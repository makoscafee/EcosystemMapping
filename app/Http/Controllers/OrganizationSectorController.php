<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateOrganizationSectorRequest;
use App\Http\Requests\UpdateOrganizationSectorRequest;
use App\Ecosystem\Repositories\OrganizationSectorRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class OrganizationSectorController extends AppBaseController
{
    /** @var  OrganizationSectorRepository */
    private $organizationSectorRepository;

    public function __construct(OrganizationSectorRepository $organizationSectorRepo)
    {
        $this->organizationSectorRepository = $organizationSectorRepo;
    }

    /**
     * Display a listing of the OrganizationSector.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->organizationSectorRepository->pushCriteria(new RequestCriteria($request));
        $organizationSectors = $this->organizationSectorRepository->all();

        return view('organization_sectors.index')
            ->with('organizationSectors', $organizationSectors);
    }

    /**
     * Show the form for creating a new OrganizationSector.
     *
     * @return Response
     */
    public function create()
    {
        return view('organization_sectors.create');
    }

    /**
     * Store a newly created OrganizationSector in storage.
     *
     * @param CreateOrganizationSectorRequest $request
     *
     * @return Response
     */
    public function store(CreateOrganizationSectorRequest $request)
    {
        $input = $request->all();

        $organizationSector = $this->organizationSectorRepository->create($input);

        Flash::success('Organization Sector saved successfully.');

        return redirect(route('organizationSectors.index'));
    }

    /**
     * Display the specified OrganizationSector.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $organizationSector = $this->organizationSectorRepository->findWithoutFail($id);

        if (empty($organizationSector)) {
            Flash::error('Organization Sector not found');

            return redirect(route('organizationSectors.index'));
        }

        return view('organization_sectors.show')->with('organizationSector', $organizationSector);
    }

    /**
     * Show the form for editing the specified OrganizationSector.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $organizationSector = $this->organizationSectorRepository->findWithoutFail($id);

        if (empty($organizationSector)) {
            Flash::error('Organization Sector not found');

            return redirect(route('organizationSectors.index'));
        }

        return view('organization_sectors.edit')->with('organizationSector', $organizationSector);
    }

    /**
     * Update the specified OrganizationSector in storage.
     *
     * @param  int              $id
     * @param UpdateOrganizationSectorRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateOrganizationSectorRequest $request)
    {
        $organizationSector = $this->organizationSectorRepository->findWithoutFail($id);

        if (empty($organizationSector)) {
            Flash::error('Organization Sector not found');

            return redirect(route('organizationSectors.index'));
        }

        $organizationSector = $this->organizationSectorRepository->update($request->all(), $id);

        Flash::success('Organization Sector updated successfully.');

        return redirect(route('organizationSectors.index'));
    }

    /**
     * Remove the specified OrganizationSector from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $organizationSector = $this->organizationSectorRepository->findWithoutFail($id);

        if (empty($organizationSector)) {
            Flash::error('Organization Sector not found');

            return redirect(route('organizationSectors.index'));
        }

        $this->organizationSectorRepository->delete($id);

        Flash::success('Organization Sector deleted successfully.');

        return redirect(route('organizationSectors.index'));
    }
}
