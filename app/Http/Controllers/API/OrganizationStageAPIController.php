<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateOrganizationStageAPIRequest;
use App\Http\Requests\API\UpdateOrganizationStageAPIRequest;
use App\Models\OrganizationStage;
use App\Repositories\OrganizationStageRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class OrganizationStageController
 * @package App\Http\Controllers\API
 */

class OrganizationStageAPIController extends AppBaseController
{
    /** @var  OrganizationStageRepository */
    private $organizationStageRepository;

    public function __construct(OrganizationStageRepository $organizationStageRepo)
    {
        $this->organizationStageRepository = $organizationStageRepo;
    }

    /**
     * Display a listing of the OrganizationStage.
     * GET|HEAD /organizationStages
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->organizationStageRepository->pushCriteria(new RequestCriteria($request));
        $this->organizationStageRepository->pushCriteria(new LimitOffsetCriteria($request));
        $organizationStages = $this->organizationStageRepository->all();

        return $this->sendResponse($organizationStages->toArray(), 'Organization Stages retrieved successfully');
    }

    /**
     * Store a newly created OrganizationStage in storage.
     * POST /organizationStages
     *
     * @param CreateOrganizationStageAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateOrganizationStageAPIRequest $request)
    {
        $input = $request->all();

        $organizationStages = $this->organizationStageRepository->create($input);

        return $this->sendResponse($organizationStages->toArray(), 'Organization Stage saved successfully');
    }

    /**
     * Display the specified OrganizationStage.
     * GET|HEAD /organizationStages/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var OrganizationStage $organizationStage */
        $organizationStage = $this->organizationStageRepository->findWithoutFail($id);

        if (empty($organizationStage)) {
            return $this->sendError('Organization Stage not found');
        }

        return $this->sendResponse($organizationStage->toArray(), 'Organization Stage retrieved successfully');
    }

    /**
     * Update the specified OrganizationStage in storage.
     * PUT/PATCH /organizationStages/{id}
     *
     * @param  int $id
     * @param UpdateOrganizationStageAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateOrganizationStageAPIRequest $request)
    {
        $input = $request->all();

        /** @var OrganizationStage $organizationStage */
        $organizationStage = $this->organizationStageRepository->findWithoutFail($id);

        if (empty($organizationStage)) {
            return $this->sendError('Organization Stage not found');
        }

        $organizationStage = $this->organizationStageRepository->update($input, $id);

        return $this->sendResponse($organizationStage->toArray(), 'OrganizationStage updated successfully');
    }

    /**
     * Remove the specified OrganizationStage from storage.
     * DELETE /organizationStages/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var OrganizationStage $organizationStage */
        $organizationStage = $this->organizationStageRepository->findWithoutFail($id);

        if (empty($organizationStage)) {
            return $this->sendError('Organization Stage not found');
        }

        $organizationStage->delete();

        return $this->sendResponse($id, 'Organization Stage deleted successfully');
    }
}
