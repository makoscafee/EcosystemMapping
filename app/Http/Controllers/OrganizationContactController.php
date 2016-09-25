<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateOrganizationContactRequest;
use App\Http\Requests\UpdateOrganizationContactRequest;
use App\Ecosystem\Repositories\OrganizationContactRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class OrganizationContactController extends AppBaseController
{
    /** @var  OrganizationContactRepository */
    private $organizationContactRepository;

    public function __construct(OrganizationContactRepository $organizationContactRepo)
    {
        $this->organizationContactRepository = $organizationContactRepo;
    }

    /**
     * Display a listing of the OrganizationContact.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->organizationContactRepository->pushCriteria(new RequestCriteria($request));
        $organizationContacts = $this->organizationContactRepository->all();

        return view('organization_contacts.index')
            ->with('organizationContacts', $organizationContacts);
    }

    /**
     * Show the form for creating a new OrganizationContact.
     *
     * @return Response
     */
    public function create()
    {
        return view('organization_contacts.create');
    }

    /**
     * Store a newly created OrganizationContact in storage.
     *
     * @param CreateOrganizationContactRequest $request
     *
     * @return Response
     */
    public function store(CreateOrganizationContactRequest $request)
    {
        $input = $request->all();

        $organizationContact = $this->organizationContactRepository->create($input);

        Flash::success('Organization Contact saved successfully.');

        return redirect(route('organizationContacts.index'));
    }

    /**
     * Display the specified OrganizationContact.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $organizationContact = $this->organizationContactRepository->findWithoutFail($id);

        if (empty($organizationContact)) {
            Flash::error('Organization Contact not found');

            return redirect(route('organizationContacts.index'));
        }

        return view('organization_contacts.show')->with('organizationContact', $organizationContact);
    }

    /**
     * Show the form for editing the specified OrganizationContact.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $organizationContact = $this->organizationContactRepository->findWithoutFail($id);

        if (empty($organizationContact)) {
            Flash::error('Organization Contact not found');

            return redirect(route('organizationContacts.index'));
        }

        return view('organization_contacts.edit')->with('organizationContact', $organizationContact);
    }

    /**
     * Update the specified OrganizationContact in storage.
     *
     * @param  int              $id
     * @param UpdateOrganizationContactRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateOrganizationContactRequest $request)
    {
        $organizationContact = $this->organizationContactRepository->findWithoutFail($id);

        if (empty($organizationContact)) {
            Flash::error('Organization Contact not found');

            return redirect(route('organizationContacts.index'));
        }

        $organizationContact = $this->organizationContactRepository->update($request->all(), $id);

        Flash::success('Organization Contact updated successfully.');

        return redirect(route('organizationContacts.index'));
    }

    /**
     * Remove the specified OrganizationContact from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $organizationContact = $this->organizationContactRepository->findWithoutFail($id);

        if (empty($organizationContact)) {
            Flash::error('Organization Contact not found');

            return redirect(route('organizationContacts.index'));
        }

        $this->organizationContactRepository->delete($id);

        Flash::success('Organization Contact deleted successfully.');

        return redirect(route('organizationContacts.index'));
    }
}
