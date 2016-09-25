<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateOrganizationEcosystemAPIRequest;
use App\Http\Requests\API\UpdateOrganizationEcosystemAPIRequest;
use App\Models\OrganizationEcosystem;
use App\Repositories\OrganizationEcosystemRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class OrganizationEcosystemController
 * @package App\Http\Controllers\API
 */

class OrganizationEcosystemAPIController extends AppBaseController
{
    /** @var  OrganizationEcosystemRepository */
    private $organizationEcosystemRepository;

    public function __construct(OrganizationEcosystemRepository $organizationEcosystemRepo)
    {
        $this->organizationEcosystemRepository = $organizationEcosystemRepo;
    }

    /**
     * Display a listing of the OrganizationEcosystem.
     * GET|HEAD /organizationEcosystems
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->organizationEcosystemRepository->pushCriteria(new RequestCriteria($request));
        $this->organizationEcosystemRepository->pushCriteria(new LimitOffsetCriteria($request));
        $organizationEcosystems = $this->organizationEcosystemRepository->all();

        return $this->sendResponse($organizationEcosystems->toArray(), 'Organization Ecosystems retrieved successfully');
    }

    /**
     * Store a newly created OrganizationEcosystem in storage.
     * POST /organizationEcosystems
     *
     * @param CreateOrganizationEcosystemAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateOrganizationEcosystemAPIRequest $request)
    {
        $input = $request->all();

        $organizationEcosystems = $this->organizationEcosystemRepository->create($input);

        return $this->sendResponse($organizationEcosystems->toArray(), 'Organization Ecosystem saved successfully');
    }

    /**
     * Display the specified OrganizationEcosystem.
     * GET|HEAD /organizationEcosystems/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var OrganizationEcosystem $organizationEcosystem */
        $organizationEcosystem = $this->organizationEcosystemRepository->findWithoutFail($id);

        if (empty($organizationEcosystem)) {
            return $this->sendError('Organization Ecosystem not found');
        }

        return $this->sendResponse($organizationEcosystem->toArray(), 'Organization Ecosystem retrieved successfully');
    }

    /**
     * Update the specified OrganizationEcosystem in storage.
     * PUT/PATCH /organizationEcosystems/{id}
     *
     * @param  int $id
     * @param UpdateOrganizationEcosystemAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateOrganizationEcosystemAPIRequest $request)
    {
        $input = $request->all();

        /** @var OrganizationEcosystem $organizationEcosystem */
        $organizationEcosystem = $this->organizationEcosystemRepository->findWithoutFail($id);

        if (empty($organizationEcosystem)) {
            return $this->sendError('Organization Ecosystem not found');
        }

        $organizationEcosystem = $this->organizationEcosystemRepository->update($input, $id);

        return $this->sendResponse($organizationEcosystem->toArray(), 'OrganizationEcosystem updated successfully');
    }

    /**
     * Remove the specified OrganizationEcosystem from storage.
     * DELETE /organizationEcosystems/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var OrganizationEcosystem $organizationEcosystem */
        $organizationEcosystem = $this->organizationEcosystemRepository->findWithoutFail($id);

        if (empty($organizationEcosystem)) {
            return $this->sendError('Organization Ecosystem not found');
        }

        $organizationEcosystem->delete();

        return $this->sendResponse($id, 'Organization Ecosystem deleted successfully');
    }
}
