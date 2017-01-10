<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateEcosystemParentAPIRequest;
use App\Http\Requests\API\UpdateEcosystemParentAPIRequest;
use App\Ecosystem\Models\EcosystemParent;
use App\Ecosystem\Repositories\EcosystemParentRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class EcosystemParentController
 * @package App\Http\Controllers\API
 */

class EcosystemParentAPIController extends AppBaseController
{
    /** @var  EcosystemParentRepository */
    private $ecosystemParentRepository;

    public function __construct(EcosystemParentRepository $ecosystemParentRepo)
    {
        $this->ecosystemParentRepository = $ecosystemParentRepo;
    }

    /**
     * Display a listing of the EcosystemParent.
     * GET|HEAD /ecosystemParents
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->ecosystemParentRepository->pushCriteria(new RequestCriteria($request));
        $this->ecosystemParentRepository->pushCriteria(new LimitOffsetCriteria($request));
        $ecosystemParents = $this->ecosystemParentRepository->all();

        return $this->sendResponse($ecosystemParents->toArray(), 'Ecosystem Parents retrieved successfully');
    }

    /**
     * Store a newly created EcosystemParent in storage.
     * POST /ecosystemParents
     *
     * @param CreateEcosystemParentAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateEcosystemParentAPIRequest $request)
    {
        $input = $request->all();

        $ecosystemParents = $this->ecosystemParentRepository->create($input);

        return $this->sendResponse($ecosystemParents->toArray(), 'Ecosystem Parent saved successfully');
    }

    /**
     * Display the specified EcosystemParent.
     * GET|HEAD /ecosystemParents/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var EcosystemParent $ecosystemParent */
        $ecosystemParent = $this->ecosystemParentRepository->findWithoutFail($id);

        if (empty($ecosystemParent)) {
            return $this->sendError('Ecosystem Parent not found');
        }

        return $this->sendResponse($ecosystemParent->toArray(), 'Ecosystem Parent retrieved successfully');
    }

    /**
     * Update the specified EcosystemParent in storage.
     * PUT/PATCH /ecosystemParents/{id}
     *
     * @param  int $id
     * @param UpdateEcosystemParentAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateEcosystemParentAPIRequest $request)
    {
        $input = $request->all();

        /** @var EcosystemParent $ecosystemParent */
        $ecosystemParent = $this->ecosystemParentRepository->findWithoutFail($id);

        if (empty($ecosystemParent)) {
            return $this->sendError('Ecosystem Parent not found');
        }

        $ecosystemParent = $this->ecosystemParentRepository->update($input, $id);

        return $this->sendResponse($ecosystemParent->toArray(), 'EcosystemParent updated successfully');
    }

    /**
     * Remove the specified EcosystemParent from storage.
     * DELETE /ecosystemParents/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var EcosystemParent $ecosystemParent */
        $ecosystemParent = $this->ecosystemParentRepository->findWithoutFail($id);

        if (empty($ecosystemParent)) {
            return $this->sendError('Ecosystem Parent not found');
        }

        $ecosystemParent->delete();

        return $this->sendResponse($id, 'Ecosystem Parent deleted successfully');
    }
}
