<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateEcosystemAPIRequest;
use App\Http\Requests\API\UpdateEcosystemAPIRequest;
use App\Ecosystem\Models\Ecosystem;
use App\Ecosystem\Models\Organization;
use App\Ecosystem\Repositories\EcosystemRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Ecosystem\Transformer\OrganizationTransformer;
use League\Fractal;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use Response;

/**
 * Class EcosystemController
 * @package App\Http\Controllers\API
 */

class EcosystemAPIController extends AppBaseController
{
    /** @var  EcosystemRepository */
    private $ecosystemRepository;

    public function __construct(EcosystemRepository $ecosystemRepo)
    {
        $this->ecosystemRepository = $ecosystemRepo;
    }

    /**
     * Display a listing of the Ecosystem.
     * GET|HEAD /ecosystems
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->ecosystemRepository->pushCriteria(new RequestCriteria($request));
        $this->ecosystemRepository->pushCriteria(new LimitOffsetCriteria($request));
        $ecosystems = $this->ecosystemRepository->all();

        return $this->sendResponse($ecosystems->toArray(), 'Ecosystems retrieved successfully');
    }

    /**
     * Store a newly created Ecosystem in storage.
     * POST /ecosystems
     *
     * @param CreateEcosystemAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateEcosystemAPIRequest $request)
    {
        $input = $request->all();

        $ecosystems = $this->ecosystemRepository->create($input);

        return $this->sendResponse($ecosystems->toArray(), 'Ecosystem saved successfully');
    }

    /**
     * Display the specified Ecosystem.
     * GET|HEAD /ecosystems/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var Ecosystem $ecosystem */
        $ecosystem = $this->ecosystemRepository->findWithoutFail($id);

        if (empty($ecosystem)) {
            return $this->sendError('Ecosystem not found');
        }

        return $this->sendResponse($ecosystem->toArray(), 'Ecosystem retrieved successfully');
    }

    /**
     * Update the specified Ecosystem in storage.
     * PUT/PATCH /ecosystems/{id}
     *
     * @param  int $id
     * @param UpdateEcosystemAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateEcosystemAPIRequest $request)
    {
        $input = $request->all();

        /** @var Ecosystem $ecosystem */
        $ecosystem = $this->ecosystemRepository->findWithoutFail($id);

        if (empty($ecosystem)) {
            return $this->sendError('Ecosystem not found');
        }

        $ecosystem = $this->ecosystemRepository->update($input, $id);

        return $this->sendResponse($ecosystem->toArray(), 'Ecosystem updated successfully');
    }

    /**
     * Remove the specified Ecosystem from storage.
     * DELETE /ecosystems/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var Ecosystem $ecosystem */
        $ecosystem = $this->ecosystemRepository->findWithoutFail($id);

        if (empty($ecosystem)) {
            return $this->sendError('Ecosystem not found');
        }

        $ecosystem->delete();

        return $this->sendResponse($id, 'Ecosystem deleted successfully');
    }

    public function organizations($id)
    {
      $ecosystem = $this->ecosystemRepository->findWithoutFail($id);
      $fractal    = new Manager();

      if (empty($ecosystem)) {
          return $this->sendError('Ecosystem not found');
      }

      $organizations = $ecosystem->organizations()->get();
      $resource   = new Collection($ecosystem->organizations()->get(), new OrganizationTransformer);
      $data_to_array = $fractal->createData($resource)->toArray();;
      return $this->sendResponse($data_to_array, 'Organizations are successfully retrieved');
    }

    public function locations($id)
    {
      $ecosystem = $this->ecosystemRepository->findWithoutFail($id);

      if (empty($ecosystem)) {
          return $this->sendError('Ecosystem not found');
      }
      $organizations = $ecosystem->organizations();

      $organizationIds = $organizations->lists('organization_id')->all();
      $locations = array();
      foreach ($organizationIds as $key => $value) {
        $org = Organization::findOrFail($value);
        $loc = $org->locations()->get();
        if(count($loc) > 0){
          $locations[] = $loc;
        }
      }

      return $this->sendResponse($locations, 'ecosystem locations retrieved successfully');
    }

    public function attachOrganization($id, Request $request)
    {
      $ecosystem = $this->ecosystemRepository->findWithoutFail($id);

      $input = $request->all();

      if (empty($ecosystem)) {
          return $this->sendError('Ecosystem not found');
      }

      $organizationId = $input['organization_id'];


      $ecosystem->organizations()->attach($organizationId, ['status' => $input['status']]);

      return $this->sendResponse('success', 'Ecosystem organization(s) is attached successfully');

    }

    public function detachOrganization($id, Request $request)
    {
      $ecosystem = $this->ecosystemRepository->findWithoutFail($id);

      $input = $request->all();

      if (empty($ecosystem)) {
          return $this->sendError('Ecosystem not found');
      }

      $organizationId = $input['organization_id'];

      $ecosystem->organizations()->detach($organizationId);

      return $this->sendResponse('success', 'Ecosystem organization(s) is detached successfully');

    }
}
