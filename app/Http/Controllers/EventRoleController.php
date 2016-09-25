<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateEventRoleRequest;
use App\Http\Requests\UpdateEventRoleRequest;
use App\Ecosystem\Repositories\EventRoleRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class EventRoleController extends AppBaseController
{
    /** @var  EventRoleRepository */
    private $eventRoleRepository;

    public function __construct(EventRoleRepository $eventRoleRepo)
    {
        $this->eventRoleRepository = $eventRoleRepo;
    }

    /**
     * Display a listing of the EventRole.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->eventRoleRepository->pushCriteria(new RequestCriteria($request));
        $eventRoles = $this->eventRoleRepository->all();

        return view('event_roles.index')
            ->with('eventRoles', $eventRoles);
    }

    /**
     * Show the form for creating a new EventRole.
     *
     * @return Response
     */
    public function create()
    {
        return view('event_roles.create');
    }

    /**
     * Store a newly created EventRole in storage.
     *
     * @param CreateEventRoleRequest $request
     *
     * @return Response
     */
    public function store(CreateEventRoleRequest $request)
    {
        $input = $request->all();

        $eventRole = $this->eventRoleRepository->create($input);

        Flash::success('Event Role saved successfully.');

        return redirect(route('eventRoles.index'));
    }

    /**
     * Display the specified EventRole.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $eventRole = $this->eventRoleRepository->findWithoutFail($id);

        if (empty($eventRole)) {
            Flash::error('Event Role not found');

            return redirect(route('eventRoles.index'));
        }

        return view('event_roles.show')->with('eventRole', $eventRole);
    }

    /**
     * Show the form for editing the specified EventRole.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $eventRole = $this->eventRoleRepository->findWithoutFail($id);

        if (empty($eventRole)) {
            Flash::error('Event Role not found');

            return redirect(route('eventRoles.index'));
        }

        return view('event_roles.edit')->with('eventRole', $eventRole);
    }

    /**
     * Update the specified EventRole in storage.
     *
     * @param  int              $id
     * @param UpdateEventRoleRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateEventRoleRequest $request)
    {
        $eventRole = $this->eventRoleRepository->findWithoutFail($id);

        if (empty($eventRole)) {
            Flash::error('Event Role not found');

            return redirect(route('eventRoles.index'));
        }

        $eventRole = $this->eventRoleRepository->update($request->all(), $id);

        Flash::success('Event Role updated successfully.');

        return redirect(route('eventRoles.index'));
    }

    /**
     * Remove the specified EventRole from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $eventRole = $this->eventRoleRepository->findWithoutFail($id);

        if (empty($eventRole)) {
            Flash::error('Event Role not found');

            return redirect(route('eventRoles.index'));
        }

        $this->eventRoleRepository->delete($id);

        Flash::success('Event Role deleted successfully.');

        return redirect(route('eventRoles.index'));
    }
}
