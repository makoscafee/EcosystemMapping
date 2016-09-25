<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateOrganizationSectorAPIRequest;
use App\Http\Requests\API\UpdateOrganizationSectorAPIRequest;
use App\Models\OrganizationSector;
use App\Repositories\OrganizationSectorRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class OrganizationSectorController
 * @package App\Http\Controllers\API
 */

class OrganizationSectorAPIController extends AppBaseController
{
    /** @var  OrganizationSectorRepository */
    private $organizationSectorRepository;

    public function __construct(OrganizationSectorRepository $organizationSectorRepo)
    {
        $this->organizationSectorRepository = $organizationSectorRepo;
    }

    /**
     * Display a listing of the OrganizationSector.
     * GET|HEAD /organizationSectors
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->organizationSectorRepository->pushCriteria(new RequestCriteria($request));
        $this->organizationSectorRepository->pushCriteria(new LimitOffsetCriteria($request));
        $organizationSectors = $this->organizationSectorRepository->all();

        return $this->sendResponse($organizationSectors->toArray(), 'Organization Sectors retrieved successfully');
    }

    /**
     * Store a newly created OrganizationSector in storage.
     * POST /organizationSectors
     *
     * @param CreateOrganizationSectorAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateOrganizationSectorAPIRequest $request)
    {
        $input = $request->all();

        $organizationSectors = $this->organizationSectorRepository->create($input);

        return $this->sendResponse($organizationSectors->toArray(), 'Organization Sector saved successfully');
    }

    /**
     * Display the specified OrganizationSector.
     * GET|HEAD /organizationSectors/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var OrganizationSector $organizationSector */
        $organizationSector = $this->organizationSectorRepository->findWithoutFail($id);

        if (empty($organizationSector)) {
            return $this->sendError('Organization Sector not found');
        }

        return $this->sendResponse($organizationSector->toArray(), 'Organization Sector retrieved successfully');
    }

    /**
     * Update the specified OrganizationSector in storage.
     * PUT/PATCH /organizationSectors/{id}
     *
     * @param  int $id
     * @param UpdateOrganizationSectorAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateOrganizationSectorAPIRequest $request)
    {
        $input = $request->all();

        /** @var OrganizationSector $organizationSector */
        $organizationSector = $this->organizationSectorRepository->findWithoutFail($id);

        if (empty($organizationSector)) {
            return $this->sendError('Organization Sector not found');
        }

        $organizationSector = $this->organizationSectorRepository->update($input, $id);

        return $this->sendResponse($organizationSector->toArray(), 'OrganizationSector updated successfully');
    }

    /**
     * Remove the specified OrganizationSector from storage.
     * DELETE /organizationSectors/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var OrganizationSector $organizationSector */
        $organizationSector = $this->organizationSectorRepository->findWithoutFail($id);

        if (empty($organizationSector)) {
            return $this->sendError('Organization Sector not found');
        }

        $organizationSector->delete();

        return $this->sendResponse($id, 'Organization Sector deleted successfully');
    }
}
