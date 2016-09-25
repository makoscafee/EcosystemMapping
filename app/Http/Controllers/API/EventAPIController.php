<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateEventAPIRequest;
use App\Http\Requests\API\UpdateEventAPIRequest;
use App\Models\Event;
use App\Repositories\EventRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class EventController
 * @package App\Http\Controllers\API
 */

class EventAPIController extends AppBaseController
{
    /** @var  EventRepository */
    private $eventRepository;

    public function __construct(EventRepository $eventRepo)
    {
        $this->eventRepository = $eventRepo;
    }

    /**
     * Display a listing of the Event.
     * GET|HEAD /events
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->eventRepository->pushCriteria(new RequestCriteria($request));
        $this->eventRepository->pushCriteria(new LimitOffsetCriteria($request));
        $events = $this->eventRepository->all();

        return $this->sendResponse($events->toArray(), 'Events retrieved successfully');
    }

    /**
     * Store a newly created Event in storage.
     * POST /events
     *
     * @param CreateEventAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateEventAPIRequest $request)
    {
        $input = $request->all();

        $events = $this->eventRepository->create($input);

        return $this->sendResponse($events->toArray(), 'Event saved successfully');
    }

    /**
     * Display the specified Event.
     * GET|HEAD /events/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var Event $event */
        $event = $this->eventRepository->findWithoutFail($id);

        if (empty($event)) {
            return $this->sendError('Event not found');
        }

        return $this->sendResponse($event->toArray(), 'Event retrieved successfully');
    }

    /**
     * Update the specified Event in storage.
     * PUT/PATCH /events/{id}
     *
     * @param  int $id
     * @param UpdateEventAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateEventAPIRequest $request)
    {
        $input = $request->all();

        /** @var Event $event */
        $event = $this->eventRepository->findWithoutFail($id);

        if (empty($event)) {
            return $this->sendError('Event not found');
        }

        $event = $this->eventRepository->update($input, $id);

        return $this->sendResponse($event->toArray(), 'Event updated successfully');
    }

    /**
     * Remove the specified Event from storage.
     * DELETE /events/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var Event $event */
        $event = $this->eventRepository->findWithoutFail($id);

        if (empty($event)) {
            return $this->sendError('Event not found');
        }

        $event->delete();

        return $this->sendResponse($id, 'Event deleted successfully');
    }
}
