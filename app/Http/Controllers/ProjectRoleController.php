<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProjectRoleRequest;
use App\Http\Requests\UpdateProjectRoleRequest;
use App\Ecosystem\Repositories\ProjectRoleRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class ProjectRoleController extends AppBaseController
{
    /** @var  ProjectRoleRepository */
    private $projectRoleRepository;

    public function __construct(ProjectRoleRepository $projectRoleRepo)
    {
        $this->projectRoleRepository = $projectRoleRepo;
    }

    /**
     * Display a listing of the ProjectRole.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->projectRoleRepository->pushCriteria(new RequestCriteria($request));
        $projectRoles = $this->projectRoleRepository->all();

        return view('project_roles.index')
            ->with('projectRoles', $projectRoles);
    }

    /**
     * Show the form for creating a new ProjectRole.
     *
     * @return Response
     */
    public function create()
    {
        return view('project_roles.create');
    }

    /**
     * Store a newly created ProjectRole in storage.
     *
     * @param CreateProjectRoleRequest $request
     *
     * @return Response
     */
    public function store(CreateProjectRoleRequest $request)
    {
        $input = $request->all();

        $projectRole = $this->projectRoleRepository->create($input);

        Flash::success('Project Role saved successfully.');

        return redirect(route('projectRoles.index'));
    }

    /**
     * Display the specified ProjectRole.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $projectRole = $this->projectRoleRepository->findWithoutFail($id);

        if (empty($projectRole)) {
            Flash::error('Project Role not found');

            return redirect(route('projectRoles.index'));
        }

        return view('project_roles.show')->with('projectRole', $projectRole);
    }

    /**
     * Show the form for editing the specified ProjectRole.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $projectRole = $this->projectRoleRepository->findWithoutFail($id);

        if (empty($projectRole)) {
            Flash::error('Project Role not found');

            return redirect(route('projectRoles.index'));
        }

        return view('project_roles.edit')->with('projectRole', $projectRole);
    }

    /**
     * Update the specified ProjectRole in storage.
     *
     * @param  int              $id
     * @param UpdateProjectRoleRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateProjectRoleRequest $request)
    {
        $projectRole = $this->projectRoleRepository->findWithoutFail($id);

        if (empty($projectRole)) {
            Flash::error('Project Role not found');

            return redirect(route('projectRoles.index'));
        }

        $projectRole = $this->projectRoleRepository->update($request->all(), $id);

        Flash::success('Project Role updated successfully.');

        return redirect(route('projectRoles.index'));
    }

    /**
     * Remove the specified ProjectRole from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $projectRole = $this->projectRoleRepository->findWithoutFail($id);

        if (empty($projectRole)) {
            Flash::error('Project Role not found');

            return redirect(route('projectRoles.index'));
        }

        $this->projectRoleRepository->delete($id);

        Flash::success('Project Role deleted successfully.');

        return redirect(route('projectRoles.index'));
    }
}
