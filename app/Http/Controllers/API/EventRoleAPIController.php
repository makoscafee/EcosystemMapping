<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateEventRoleAPIRequest;
use App\Http\Requests\API\UpdateEventRoleAPIRequest;
use App\Models\EventRole;
use App\Repositories\EventRoleRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class EventRoleController
 * @package App\Http\Controllers\API
 */

class EventRoleAPIController extends AppBaseController
{
    /** @var  EventRoleRepository */
    private $eventRoleRepository;

    public function __construct(EventRoleRepository $eventRoleRepo)
    {
        $this->eventRoleRepository = $eventRoleRepo;
    }

    /**
     * Display a listing of the EventRole.
     * GET|HEAD /eventRoles
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->eventRoleRepository->pushCriteria(new RequestCriteria($request));
        $this->eventRoleRepository->pushCriteria(new LimitOffsetCriteria($request));
        $eventRoles = $this->eventRoleRepository->all();

        return $this->sendResponse($eventRoles->toArray(), 'Event Roles retrieved successfully');
    }

    /**
     * Store a newly created EventRole in storage.
     * POST /eventRoles
     *
     * @param CreateEventRoleAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateEventRoleAPIRequest $request)
    {
        $input = $request->all();

        $eventRoles = $this->eventRoleRepository->create($input);

        return $this->sendResponse($eventRoles->toArray(), 'Event Role saved successfully');
    }

    /**
     * Display the specified EventRole.
     * GET|HEAD /eventRoles/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var EventRole $eventRole */
        $eventRole = $this->eventRoleRepository->findWithoutFail($id);

        if (empty($eventRole)) {
            return $this->sendError('Event Role not found');
        }

        return $this->sendResponse($eventRole->toArray(), 'Event Role retrieved successfully');
    }

    /**
     * Update the specified EventRole in storage.
     * PUT/PATCH /eventRoles/{id}
     *
     * @param  int $id
     * @param UpdateEventRoleAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateEventRoleAPIRequest $request)
    {
        $input = $request->all();

        /** @var EventRole $eventRole */
        $eventRole = $this->eventRoleRepository->findWithoutFail($id);

        if (empty($eventRole)) {
            return $this->sendError('Event Role not found');
        }

        $eventRole = $this->eventRoleRepository->update($input, $id);

        return $this->sendResponse($eventRole->toArray(), 'EventRole updated successfully');
    }

    /**
     * Remove the specified EventRole from storage.
     * DELETE /eventRoles/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var EventRole $eventRole */
        $eventRole = $this->eventRoleRepository->findWithoutFail($id);

        if (empty($eventRole)) {
            return $this->sendError('Event Role not found');
        }

        $eventRole->delete();

        return $this->sendResponse($id, 'Event Role deleted successfully');
    }
}
