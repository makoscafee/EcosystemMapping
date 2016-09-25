<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateProjectRoleAPIRequest;
use App\Http\Requests\API\UpdateProjectRoleAPIRequest;
use App\Models\ProjectRole;
use App\Repositories\ProjectRoleRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class ProjectRoleController
 * @package App\Http\Controllers\API
 */

class ProjectRoleAPIController extends AppBaseController
{
    /** @var  ProjectRoleRepository */
    private $projectRoleRepository;

    public function __construct(ProjectRoleRepository $projectRoleRepo)
    {
        $this->projectRoleRepository = $projectRoleRepo;
    }

    /**
     * Display a listing of the ProjectRole.
     * GET|HEAD /projectRoles
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->projectRoleRepository->pushCriteria(new RequestCriteria($request));
        $this->projectRoleRepository->pushCriteria(new LimitOffsetCriteria($request));
        $projectRoles = $this->projectRoleRepository->all();

        return $this->sendResponse($projectRoles->toArray(), 'Project Roles retrieved successfully');
    }

    /**
     * Store a newly created ProjectRole in storage.
     * POST /projectRoles
     *
     * @param CreateProjectRoleAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateProjectRoleAPIRequest $request)
    {
        $input = $request->all();

        $projectRoles = $this->projectRoleRepository->create($input);

        return $this->sendResponse($projectRoles->toArray(), 'Project Role saved successfully');
    }

    /**
     * Display the specified ProjectRole.
     * GET|HEAD /projectRoles/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var ProjectRole $projectRole */
        $projectRole = $this->projectRoleRepository->findWithoutFail($id);

        if (empty($projectRole)) {
            return $this->sendError('Project Role not found');
        }

        return $this->sendResponse($projectRole->toArray(), 'Project Role retrieved successfully');
    }

    /**
     * Update the specified ProjectRole in storage.
     * PUT/PATCH /projectRoles/{id}
     *
     * @param  int $id
     * @param UpdateProjectRoleAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateProjectRoleAPIRequest $request)
    {
        $input = $request->all();

        /** @var ProjectRole $projectRole */
        $projectRole = $this->projectRoleRepository->findWithoutFail($id);

        if (empty($projectRole)) {
            return $this->sendError('Project Role not found');
        }

        $projectRole = $this->projectRoleRepository->update($input, $id);

        return $this->sendResponse($projectRole->toArray(), 'ProjectRole updated successfully');
    }

    /**
     * Remove the specified ProjectRole from storage.
     * DELETE /projectRoles/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var ProjectRole $projectRole */
        $projectRole = $this->projectRoleRepository->findWithoutFail($id);

        if (empty($projectRole)) {
            return $this->sendError('Project Role not found');
        }

        $projectRole->delete();

        return $this->sendResponse($id, 'Project Role deleted successfully');
    }
}
