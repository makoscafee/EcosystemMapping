<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateOrganizationEcosystemRequest;
use App\Http\Requests\UpdateOrganizationEcosystemRequest;
use App\Repositories\OrganizationEcosystemRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class OrganizationEcosystemController extends AppBaseController
{
    /** @var  OrganizationEcosystemRepository */
    private $organizationEcosystemRepository;

    public function __construct(OrganizationEcosystemRepository $organizationEcosystemRepo)
    {
        $this->organizationEcosystemRepository = $organizationEcosystemRepo;
    }

    /**
     * Display a listing of the OrganizationEcosystem.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->organizationEcosystemRepository->pushCriteria(new RequestCriteria($request));
        $organizationEcosystems = $this->organizationEcosystemRepository->all();

        return view('organization_ecosystems.index')
            ->with('organizationEcosystems', $organizationEcosystems);
    }

    /**
     * Show the form for creating a new OrganizationEcosystem.
     *
     * @return Response
     */
    public function create()
    {
        return view('organization_ecosystems.create');
    }

    /**
     * Store a newly created OrganizationEcosystem in storage.
     *
     * @param CreateOrganizationEcosystemRequest $request
     *
     * @return Response
     */
    public function store(CreateOrganizationEcosystemRequest $request)
    {
        $input = $request->all();

        $organizationEcosystem = $this->organizationEcosystemRepository->create($input);

        Flash::success('Organization Ecosystem saved successfully.');

        return redirect(route('organizationEcosystems.index'));
    }

    /**
     * Display the specified OrganizationEcosystem.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $organizationEcosystem = $this->organizationEcosystemRepository->findWithoutFail($id);

        if (empty($organizationEcosystem)) {
            Flash::error('Organization Ecosystem not found');

            return redirect(route('organizationEcosystems.index'));
        }

        return view('organization_ecosystems.show')->with('organizationEcosystem', $organizationEcosystem);
    }

    /**
     * Show the form for editing the specified OrganizationEcosystem.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $organizationEcosystem = $this->organizationEcosystemRepository->findWithoutFail($id);

        if (empty($organizationEcosystem)) {
            Flash::error('Organization Ecosystem not found');

            return redirect(route('organizationEcosystems.index'));
        }

        return view('organization_ecosystems.edit')->with('organizationEcosystem', $organizationEcosystem);
    }

    /**
     * Update the specified OrganizationEcosystem in storage.
     *
     * @param  int              $id
     * @param UpdateOrganizationEcosystemRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateOrganizationEcosystemRequest $request)
    {
        $organizationEcosystem = $this->organizationEcosystemRepository->findWithoutFail($id);

        if (empty($organizationEcosystem)) {
            Flash::error('Organization Ecosystem not found');

            return redirect(route('organizationEcosystems.index'));
        }

        $organizationEcosystem = $this->organizationEcosystemRepository->update($request->all(), $id);

        Flash::success('Organization Ecosystem updated successfully.');

        return redirect(route('organizationEcosystems.index'));
    }

    /**
     * Remove the specified OrganizationEcosystem from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $organizationEcosystem = $this->organizationEcosystemRepository->findWithoutFail($id);

        if (empty($organizationEcosystem)) {
            Flash::error('Organization Ecosystem not found');

            return redirect(route('organizationEcosystems.index'));
        }

        $this->organizationEcosystemRepository->delete($id);

        Flash::success('Organization Ecosystem deleted successfully.');

        return redirect(route('organizationEcosystems.index'));
    }
}
