<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateProjectInfoAPIRequest;
use App\Http\Requests\API\UpdateProjectInfoAPIRequest;
use App\Models\ProjectInfo;
use App\Repositories\ProjectInfoRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class ProjectInfoController
 * @package App\Http\Controllers\API
 */

class ProjectInfoAPIController extends AppBaseController
{
    /** @var  ProjectInfoRepository */
    private $projectInfoRepository;

    public function __construct(ProjectInfoRepository $projectInfoRepo)
    {
        $this->projectInfoRepository = $projectInfoRepo;
    }

    /**
     * Display a listing of the ProjectInfo.
     * GET|HEAD /projectInfos
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->projectInfoRepository->pushCriteria(new RequestCriteria($request));
        $this->projectInfoRepository->pushCriteria(new LimitOffsetCriteria($request));
        $projectInfos = $this->projectInfoRepository->all();

        return $this->sendResponse($projectInfos->toArray(), 'Project Infos retrieved successfully');
    }

    /**
     * Store a newly created ProjectInfo in storage.
     * POST /projectInfos
     *
     * @param CreateProjectInfoAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateProjectInfoAPIRequest $request)
    {
        $input = $request->all();

        $projectInfos = $this->projectInfoRepository->create($input);

        return $this->sendResponse($projectInfos->toArray(), 'Project Info saved successfully');
    }

    /**
     * Display the specified ProjectInfo.
     * GET|HEAD /projectInfos/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var ProjectInfo $projectInfo */
        $projectInfo = $this->projectInfoRepository->findWithoutFail($id);

        if (empty($projectInfo)) {
            return $this->sendError('Project Info not found');
        }

        return $this->sendResponse($projectInfo->toArray(), 'Project Info retrieved successfully');
    }

    /**
     * Update the specified ProjectInfo in storage.
     * PUT/PATCH /projectInfos/{id}
     *
     * @param  int $id
     * @param UpdateProjectInfoAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateProjectInfoAPIRequest $request)
    {
        $input = $request->all();

        /** @var ProjectInfo $projectInfo */
        $projectInfo = $this->projectInfoRepository->findWithoutFail($id);

        if (empty($projectInfo)) {
            return $this->sendError('Project Info not found');
        }

        $projectInfo = $this->projectInfoRepository->update($input, $id);

        return $this->sendResponse($projectInfo->toArray(), 'ProjectInfo updated successfully');
    }

    /**
     * Remove the specified ProjectInfo from storage.
     * DELETE /projectInfos/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var ProjectInfo $projectInfo */
        $projectInfo = $this->projectInfoRepository->findWithoutFail($id);

        if (empty($projectInfo)) {
            return $this->sendError('Project Info not found');
        }

        $projectInfo->delete();

        return $this->sendResponse($id, 'Project Info deleted successfully');
    }
}
