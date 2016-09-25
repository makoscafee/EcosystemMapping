<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateOrganizationLocationRequest;
use App\Http\Requests\UpdateOrganizationLocationRequest;
use App\Repositories\OrganizationLocationRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class OrganizationLocationController extends AppBaseController
{
    /** @var  OrganizationLocationRepository */
    private $organizationLocationRepository;

    public function __construct(OrganizationLocationRepository $organizationLocationRepo)
    {
        $this->organizationLocationRepository = $organizationLocationRepo;
    }

    /**
     * Display a listing of the OrganizationLocation.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->organizationLocationRepository->pushCriteria(new RequestCriteria($request));
        $organizationLocations = $this->organizationLocationRepository->all();

        return view('organization_locations.index')
            ->with('organizationLocations', $organizationLocations);
    }

    /**
     * Show the form for creating a new OrganizationLocation.
     *
     * @return Response
     */
    public function create()
    {
        return view('organization_locations.create');
    }

    /**
     * Store a newly created OrganizationLocation in storage.
     *
     * @param CreateOrganizationLocationRequest $request
     *
     * @return Response
     */
    public function store(CreateOrganizationLocationRequest $request)
    {
        $input = $request->all();

        $organizationLocation = $this->organizationLocationRepository->create($input);

        Flash::success('Organization Location saved successfully.');

        return redirect(route('organizationLocations.index'));
    }

    /**
     * Display the specified OrganizationLocation.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $organizationLocation = $this->organizationLocationRepository->findWithoutFail($id);

        if (empty($organizationLocation)) {
            Flash::error('Organization Location not found');

            return redirect(route('organizationLocations.index'));
        }

        return view('organization_locations.show')->with('organizationLocation', $organizationLocation);
    }

    /**
     * Show the form for editing the specified OrganizationLocation.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $organizationLocation = $this->organizationLocationRepository->findWithoutFail($id);

        if (empty($organizationLocation)) {
            Flash::error('Organization Location not found');

            return redirect(route('organizationLocations.index'));
        }

        return view('organization_locations.edit')->with('organizationLocation', $organizationLocation);
    }

    /**
     * Update the specified OrganizationLocation in storage.
     *
     * @param  int              $id
     * @param UpdateOrganizationLocationRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateOrganizationLocationRequest $request)
    {
        $organizationLocation = $this->organizationLocationRepository->findWithoutFail($id);

        if (empty($organizationLocation)) {
            Flash::error('Organization Location not found');

            return redirect(route('organizationLocations.index'));
        }

        $organizationLocation = $this->organizationLocationRepository->update($request->all(), $id);

        Flash::success('Organization Location updated successfully.');

        return redirect(route('organizationLocations.index'));
    }

    /**
     * Remove the specified OrganizationLocation from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $organizationLocation = $this->organizationLocationRepository->findWithoutFail($id);

        if (empty($organizationLocation)) {
            Flash::error('Organization Location not found');

            return redirect(route('organizationLocations.index'));
        }

        $this->organizationLocationRepository->delete($id);

        Flash::success('Organization Location deleted successfully.');

        return redirect(route('organizationLocations.index'));
    }
}
