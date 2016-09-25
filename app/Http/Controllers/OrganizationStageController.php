<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateOrganizationStageRequest;
use App\Http\Requests\UpdateOrganizationStageRequest;
use App\Repositories\OrganizationStageRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class OrganizationStageController extends AppBaseController
{
    /** @var  OrganizationStageRepository */
    private $organizationStageRepository;

    public function __construct(OrganizationStageRepository $organizationStageRepo)
    {
        $this->organizationStageRepository = $organizationStageRepo;
    }

    /**
     * Display a listing of the OrganizationStage.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->organizationStageRepository->pushCriteria(new RequestCriteria($request));
        $organizationStages = $this->organizationStageRepository->all();

        return view('organization_stages.index')
            ->with('organizationStages', $organizationStages);
    }

    /**
     * Show the form for creating a new OrganizationStage.
     *
     * @return Response
     */
    public function create()
    {
        return view('organization_stages.create');
    }

    /**
     * Store a newly created OrganizationStage in storage.
     *
     * @param CreateOrganizationStageRequest $request
     *
     * @return Response
     */
    public function store(CreateOrganizationStageRequest $request)
    {
        $input = $request->all();

        $organizationStage = $this->organizationStageRepository->create($input);

        Flash::success('Organization Stage saved successfully.');

        return redirect(route('organizationStages.index'));
    }

    /**
     * Display the specified OrganizationStage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $organizationStage = $this->organizationStageRepository->findWithoutFail($id);

        if (empty($organizationStage)) {
            Flash::error('Organization Stage not found');

            return redirect(route('organizationStages.index'));
        }

        return view('organization_stages.show')->with('organizationStage', $organizationStage);
    }

    /**
     * Show the form for editing the specified OrganizationStage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $organizationStage = $this->organizationStageRepository->findWithoutFail($id);

        if (empty($organizationStage)) {
            Flash::error('Organization Stage not found');

            return redirect(route('organizationStages.index'));
        }

        return view('organization_stages.edit')->with('organizationStage', $organizationStage);
    }

    /**
     * Update the specified OrganizationStage in storage.
     *
     * @param  int              $id
     * @param UpdateOrganizationStageRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateOrganizationStageRequest $request)
    {
        $organizationStage = $this->organizationStageRepository->findWithoutFail($id);

        if (empty($organizationStage)) {
            Flash::error('Organization Stage not found');

            return redirect(route('organizationStages.index'));
        }

        $organizationStage = $this->organizationStageRepository->update($request->all(), $id);

        Flash::success('Organization Stage updated successfully.');

        return redirect(route('organizationStages.index'));
    }

    /**
     * Remove the specified OrganizationStage from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $organizationStage = $this->organizationStageRepository->findWithoutFail($id);

        if (empty($organizationStage)) {
            Flash::error('Organization Stage not found');

            return redirect(route('organizationStages.index'));
        }

        $this->organizationStageRepository->delete($id);

        Flash::success('Organization Stage deleted successfully.');

        return redirect(route('organizationStages.index'));
    }
}
