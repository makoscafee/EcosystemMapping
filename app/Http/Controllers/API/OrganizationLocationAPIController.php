<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateOrganizationLocationAPIRequest;
use App\Http\Requests\API\UpdateOrganizationLocationAPIRequest;
use App\Ecosystem\Models\OrganizationLocation;
use App\Ecosystem\Repositories\OrganizationLocationRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class OrganizationLocationController
 * @package App\Http\Controllers\API
 */

class OrganizationLocationAPIController extends AppBaseController
{
    /** @var  OrganizationLocationRepository */
    private $organizationLocationRepository;

    public function __construct(OrganizationLocationRepository $organizationLocationRepo)
    {
        $this->organizationLocationRepository = $organizationLocationRepo;
    }

    /**
     * Display a listing of the OrganizationLocation.
     * GET|HEAD /organizationLocations
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->organizationLocationRepository->pushCriteria(new RequestCriteria($request));
        $this->organizationLocationRepository->pushCriteria(new LimitOffsetCriteria($request));
        $organizationLocations = $this->organizationLocationRepository->all();

        return $this->sendResponse($organizationLocations->toArray(), 'Organization Locations retrieved successfully');
    }

    /**
     * Store a newly created OrganizationLocation in storage.
     * POST /organizationLocations
     *
     * @param CreateOrganizationLocationAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateOrganizationLocationAPIRequest $request)
    {
        $input = $request->all();

        $organizationLocations = $this->organizationLocationRepository->create($input);

        return $this->sendResponse($organizationLocations->toArray(), 'Organization Location saved successfully');
    }

    /**
     * Display the specified OrganizationLocation.
     * GET|HEAD /organizationLocations/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var OrganizationLocation $organizationLocation */
        $organizationLocation = $this->organizationLocationRepository->findWithoutFail($id);

        if (empty($organizationLocation)) {
            return $this->sendError('Organization Location not found');
        }

        return $this->sendResponse($organizationLocation->toArray(), 'Organization Location retrieved successfully');
    }

    /**
     * Update the specified OrganizationLocation in storage.
     * PUT/PATCH /organizationLocations/{id}
     *
     * @param  int $id
     * @param UpdateOrganizationLocationAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateOrganizationLocationAPIRequest $request)
    {
        $input = $request->all();

        /** @var OrganizationLocation $organizationLocation */
        $organizationLocation = $this->organizationLocationRepository->findWithoutFail($id);

        if (empty($organizationLocation)) {
            return $this->sendError('Organization Location not found');
        }

        $organizationLocation = $this->organizationLocationRepository->update($input, $id);

        return $this->sendResponse($organizationLocation->toArray(), 'OrganizationLocation updated successfully');
    }

    /**
     * Remove the specified OrganizationLocation from storage.
     * DELETE /organizationLocations/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var OrganizationLocation $organizationLocation */
        $organizationLocation = $this->organizationLocationRepository->findWithoutFail($id);

        if (empty($organizationLocation)) {
            return $this->sendError('Organization Location not found');
        }

        $organizationLocation->delete();

        return $this->sendResponse($id, 'Organization Location deleted successfully');
    }
}
