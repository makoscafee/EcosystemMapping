<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateEcosystemAPIRequest;
use App\Http\Requests\API\UpdateEcosystemAPIRequest;
use App\Ecosystem\Models\Ecosystem;
use App\Ecosystem\Repositories\EcosystemRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
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
      $ecosystem = $this->ecosystemRepository->findOrFail($id);

      if (empty($ecosystem)) {
          return $this->sendError('Ecosystem not found');
      }

      $organizations = $ecosystem->organizations()->get();
      return $this->sendResponse($organizations, 'organizations retrieved successfully');
    }
}
