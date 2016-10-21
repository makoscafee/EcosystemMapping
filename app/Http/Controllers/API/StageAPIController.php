<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateStageAPIRequest;
use App\Http\Requests\API\UpdateStageAPIRequest;
use App\Ecosystem\Models\Stage;
use App\Ecosystem\Repositories\StageRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class StageController
 * @package App\Http\Controllers\API
 */

class StageAPIController extends AppBaseController
{
    /** @var  StageRepository */
    private $stageRepository;

    public function __construct(StageRepository $stageRepo)
    {
        $this->stageRepository = $stageRepo;
    }

    /**
     * Display a listing of the Stage.
     * GET|HEAD /stages
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->stageRepository->pushCriteria(new RequestCriteria($request));
        $this->stageRepository->pushCriteria(new LimitOffsetCriteria($request));
        $stages = $this->stageRepository->all();

        return $this->sendResponse($stages->toArray(), 'Stages retrieved successfully');
    }

    /**
     * Store a newly created Stage in storage.
     * POST /stages
     *
     * @param CreateStageAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateStageAPIRequest $request)
    {
        $input = $request->all();

        $stages = $this->stageRepository->create($input);

        return $this->sendResponse($stages->toArray(), 'Stage saved successfully');
    }

    /**
     * Display the specified Stage.
     * GET|HEAD /stages/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var Stage $stage */
        $stage = $this->stageRepository->findWithoutFail($id);

        if (empty($stage)) {
            return $this->sendError('Stage not found');
        }

        return $this->sendResponse($stage->toArray(), 'Stage retrieved successfully');
    }

    /**
     * Update the specified Stage in storage.
     * PUT/PATCH /stages/{id}
     *
     * @param  int $id
     * @param UpdateStageAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateStageAPIRequest $request)
    {
        $input = $request->all();

        /** @var Stage $stage */
        $stage = $this->stageRepository->findWithoutFail($id);

        if (empty($stage)) {
            return $this->sendError('Stage not found');
        }

        $stage = $this->stageRepository->update($input, $id);

        return $this->sendResponse($stage->toArray(), 'Stage updated successfully');
    }

    /**
     * Remove the specified Stage from storage.
     * DELETE /stages/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var Stage $stage */
        $stage = $this->stageRepository->findWithoutFail($id);

        if (empty($stage)) {
            return $this->sendError('Stage not found');
        }

        $stage->delete();

        return $this->sendResponse($id, 'Stage deleted successfully');
    }

    /**
     * get the specified Organization from storage based on the stage.
     * GET /stages/{id}/organizations
     *
     * @param  int $id
     *
     * @return Response
     */
    public function organizations($id)
    {
        /** @var Stage $stage */
        $stage = $this->stageRepository->findWithoutFail($id);

        if (empty($stage)) {
            return $this->sendError('Role not found');
        }

        $organizations = $stage->organizations()->get();

        if (empty($organizations)) {
            return $this->sendError('No organizations in this role not found');
        }

        return $this->sendResponse($organizations, 'organizations retrieved successfully');
    }


}
