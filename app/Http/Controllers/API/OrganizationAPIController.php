<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateOrganizationAPIRequest;
use App\Http\Requests\API\UpdateOrganizationAPIRequest;
use App\Ecosystem\Models\Organization;
use App\Ecosystem\Repositories\OrganizationRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class OrganizationController
 * @package App\Http\Controllers\API
 */

class OrganizationAPIController extends AppBaseController
{
    /** @var  OrganizationRepository */
    private $organizationRepository;

    public function __construct(OrganizationRepository $organizationRepo)
    {
        $this->organizationRepository = $organizationRepo;
    }

    /**
     * Display a listing of the Organization.
     * GET|HEAD /organizations
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->organizationRepository->pushCriteria(new RequestCriteria($request));
        $this->organizationRepository->pushCriteria(new LimitOffsetCriteria($request));
        $organizations = $this->organizationRepository->all();

        return $this->sendResponse($organizations->toArray(), 'Organizations retrieved successfully');
    }

    /**
     * Store a newly created Organization in storage.
     * POST /organizations
     *
     * @param CreateOrganizationAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateOrganizationAPIRequest $request)
    {
        $input = $request->all();

        $organizations = $this->organizationRepository->create($input);

        return $this->sendResponse($organizations->toArray(), 'Organization saved successfully');
    }

    /**
     * Display the specified Organization.
     * GET|HEAD /organizations/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var Organization $organization */
        $organization = $this->organizationRepository->findWithoutFail($id);

        if (empty($organization)) {
            return $this->sendError('Organization not found');
        }

        return $this->sendResponse($organization->toArray(), 'Organization retrieved successfully');
    }

    /**
     * Update the specified Organization in storage.
     * PUT/PATCH /organizations/{id}
     *
     * @param  int $id
     * @param UpdateOrganizationAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateOrganizationAPIRequest $request)
    {
        $input = $request->all();

        /** @var Organization $organization */
        $organization = $this->organizationRepository->findWithoutFail($id);

        if (empty($organization)) {
            return $this->sendError('Organization not found');
        }

        $organization = $this->organizationRepository->update($input, $id);

        return $this->sendResponse($organization->toArray(), 'Organization updated successfully');
    }

    /**
     * Remove the specified Organization from storage.
     * DELETE /organizations/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var Organization $organization */
        $organization = $this->organizationRepository->findWithoutFail($id);

        if (empty($organization)) {
            return $this->sendError('Organization not found');
        }

        $organization->delete();

        return $this->sendResponse($id, 'Organization deleted successfully');
    }
}
