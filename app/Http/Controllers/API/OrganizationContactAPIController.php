<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateOrganizationContactAPIRequest;
use App\Http\Requests\API\UpdateOrganizationContactAPIRequest;
use App\Models\OrganizationContact;
use App\Repositories\OrganizationContactRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class OrganizationContactController
 * @package App\Http\Controllers\API
 */

class OrganizationContactAPIController extends AppBaseController
{
    /** @var  OrganizationContactRepository */
    private $organizationContactRepository;

    public function __construct(OrganizationContactRepository $organizationContactRepo)
    {
        $this->organizationContactRepository = $organizationContactRepo;
    }

    /**
     * Display a listing of the OrganizationContact.
     * GET|HEAD /organizationContacts
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->organizationContactRepository->pushCriteria(new RequestCriteria($request));
        $this->organizationContactRepository->pushCriteria(new LimitOffsetCriteria($request));
        $organizationContacts = $this->organizationContactRepository->all();

        return $this->sendResponse($organizationContacts->toArray(), 'Organization Contacts retrieved successfully');
    }

    /**
     * Store a newly created OrganizationContact in storage.
     * POST /organizationContacts
     *
     * @param CreateOrganizationContactAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateOrganizationContactAPIRequest $request)
    {
        $input = $request->all();

        $organizationContacts = $this->organizationContactRepository->create($input);

        return $this->sendResponse($organizationContacts->toArray(), 'Organization Contact saved successfully');
    }

    /**
     * Display the specified OrganizationContact.
     * GET|HEAD /organizationContacts/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var OrganizationContact $organizationContact */
        $organizationContact = $this->organizationContactRepository->findWithoutFail($id);

        if (empty($organizationContact)) {
            return $this->sendError('Organization Contact not found');
        }

        return $this->sendResponse($organizationContact->toArray(), 'Organization Contact retrieved successfully');
    }

    /**
     * Update the specified OrganizationContact in storage.
     * PUT/PATCH /organizationContacts/{id}
     *
     * @param  int $id
     * @param UpdateOrganizationContactAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateOrganizationContactAPIRequest $request)
    {
        $input = $request->all();

        /** @var OrganizationContact $organizationContact */
        $organizationContact = $this->organizationContactRepository->findWithoutFail($id);

        if (empty($organizationContact)) {
            return $this->sendError('Organization Contact not found');
        }

        $organizationContact = $this->organizationContactRepository->update($input, $id);

        return $this->sendResponse($organizationContact->toArray(), 'OrganizationContact updated successfully');
    }

    /**
     * Remove the specified OrganizationContact from storage.
     * DELETE /organizationContacts/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var OrganizationContact $organizationContact */
        $organizationContact = $this->organizationContactRepository->findWithoutFail($id);

        if (empty($organizationContact)) {
            return $this->sendError('Organization Contact not found');
        }

        $organizationContact->delete();

        return $this->sendResponse($id, 'Organization Contact deleted successfully');
    }
}
