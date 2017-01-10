<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateOrganizationRoleRequest;
use App\Http\Requests\UpdateOrganizationRoleRequest;
use App\Ecosystem\Repositories\OrganizationRoleRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class OrganizationRoleController extends AppBaseController
{
    /** @var  OrganizationRoleRepository */
    private $organizationRoleRepository;

    public function __construct(OrganizationRoleRepository $organizationRoleRepo)
    {
        $this->organizationRoleRepository = $organizationRoleRepo;
    }

    /**
     * Display a listing of the OrganizationRole.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->organizationRoleRepository->pushCriteria(new RequestCriteria($request));
        $organizationRoles = $this->organizationRoleRepository->all();

        return view('organization_roles.index')
            ->with('organizationRoles', $organizationRoles);
    }

    /**
     * Show the form for creating a new OrganizationRole.
     *
     * @return Response
     */
    public function create()
    {
        return view('organization_roles.create');
    }

    /**
     * Store a newly created OrganizationRole in storage.
     *
     * @param CreateOrganizationRoleRequest $request
     *
     * @return Response
     */
    public function store(CreateOrganizationRoleRequest $request)
    {
        $input = $request->all();

        $organizationRole = $this->organizationRoleRepository->create($input);

        Flash::success('Organization Role saved successfully.');

        return redirect(route('organizationRoles.index'));
    }

    /**
     * Display the specified OrganizationRole.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $organizationRole = $this->organizationRoleRepository->findWithoutFail($id);

        if (empty($organizationRole)) {
            Flash::error('Organization Role not found');

            return redirect(route('organizationRoles.index'));
        }

        return view('organization_roles.show')->with('organizationRole', $organizationRole);
    }

    /**
     * Show the form for editing the specified OrganizationRole.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $organizationRole = $this->organizationRoleRepository->findWithoutFail($id);

        if (empty($organizationRole)) {
            Flash::error('Organization Role not found');

            return redirect(route('organizationRoles.index'));
        }

        return view('organization_roles.edit')->with('organizationRole', $organizationRole);
    }

    /**
     * Update the specified OrganizationRole in storage.
     *
     * @param  int              $id
     * @param UpdateOrganizationRoleRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateOrganizationRoleRequest $request)
    {
        $organizationRole = $this->organizationRoleRepository->findWithoutFail($id);

        if (empty($organizationRole)) {
            Flash::error('Organization Role not found');

            return redirect(route('organizationRoles.index'));
        }

        $organizationRole = $this->organizationRoleRepository->update($request->all(), $id);

        Flash::success('Organization Role updated successfully.');

        return redirect(route('organizationRoles.index'));
    }

    /**
     * Remove the specified OrganizationRole from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $organizationRole = $this->organizationRoleRepository->findWithoutFail($id);

        if (empty($organizationRole)) {
            Flash::error('Organization Role not found');

            return redirect(route('organizationRoles.index'));
        }

        $this->organizationRoleRepository->delete($id);

        Flash::success('Organization Role deleted successfully.');

        return redirect(route('organizationRoles.index'));
    }
}
