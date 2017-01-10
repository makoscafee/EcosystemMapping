<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateOrganizationRoleAPIRequest;
use App\Http\Requests\API\UpdateOrganizationRoleAPIRequest;
use App\Ecosystem\Models\OrganizationRole;
use App\Ecosystem\Repositories\OrganizationRoleRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class OrganizationRoleController
 * @package App\Http\Controllers\API
 */

class OrganizationRoleAPIController extends AppBaseController
{
    /** @var  OrganizationRoleRepository */
    private $organizationRoleRepository;

    public function __construct(OrganizationRoleRepository $organizationRoleRepo)
    {
        $this->organizationRoleRepository = $organizationRoleRepo;
    }

    /**
     * Display a listing of the OrganizationRole.
     * GET|HEAD /organizationRoles
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->organizationRoleRepository->pushCriteria(new RequestCriteria($request));
        $this->organizationRoleRepository->pushCriteria(new LimitOffsetCriteria($request));
        $organizationRoles = $this->organizationRoleRepository->all();

        return $this->sendResponse($organizationRoles->toArray(), 'Organization Roles retrieved successfully');
    }

    /**
     * Store a newly created OrganizationRole in storage.
     * POST /organizationRoles
     *
     * @param CreateOrganizationRoleAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateOrganizationRoleAPIRequest $request)
    {
        $input = $request->all();

        $organizationRoles = $this->organizationRoleRepository->create($input);

        return $this->sendResponse($organizationRoles->toArray(), 'Organization Role saved successfully');
    }

    /**
     * Display the specified OrganizationRole.
     * GET|HEAD /organizationRoles/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var OrganizationRole $organizationRole */
        $organizationRole = $this->organizationRoleRepository->findWithoutFail($id);

        if (empty($organizationRole)) {
            return $this->sendError('Organization Role not found');
        }

        return $this->sendResponse($organizationRole->toArray(), 'Organization Role retrieved successfully');
    }

    /**
     * Update the specified OrganizationRole in storage.
     * PUT/PATCH /organizationRoles/{id}
     *
     * @param  int $id
     * @param UpdateOrganizationRoleAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateOrganizationRoleAPIRequest $request)
    {
        $input = $request->all();

        /** @var OrganizationRole $organizationRole */
        $organizationRole = $this->organizationRoleRepository->findWithoutFail($id);

        if (empty($organizationRole)) {
            return $this->sendError('Organization Role not found');
        }

        $organizationRole = $this->organizationRoleRepository->update($input, $id);

        return $this->sendResponse($organizationRole->toArray(), 'OrganizationRole updated successfully');
    }

    /**
     * Remove the specified OrganizationRole from storage.
     * DELETE /organizationRoles/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var OrganizationRole $organizationRole */
        $organizationRole = $this->organizationRoleRepository->findWithoutFail($id);

        if (empty($organizationRole)) {
            return $this->sendError('Organization Role not found');
        }

        $organizationRole->delete();

        return $this->sendResponse($id, 'Organization Role deleted successfully');
    }
}
