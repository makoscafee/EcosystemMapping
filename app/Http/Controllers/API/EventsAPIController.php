<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateEventsAPIRequest;
use App\Http\Requests\API\UpdateEventsAPIRequest;
use App\Models\Events;
use App\Repositories\EventsRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class EventsController
 * @package App\Http\Controllers\API
 */

class EventsAPIController extends AppBaseController
{
    /** @var  EventsRepository */
    private $eventsRepository;

    public function __construct(EventsRepository $eventsRepo)
    {
        $this->eventsRepository = $eventsRepo;
    }

    /**
     * Display a listing of the Events.
     * GET|HEAD /events
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->eventsRepository->pushCriteria(new RequestCriteria($request));
        $this->eventsRepository->pushCriteria(new LimitOffsetCriteria($request));
        $events = $this->eventsRepository->all();

        return $this->sendResponse($events->toArray(), 'Events retrieved successfully');
    }

    /**
     * Store a newly created Events in storage.
     * POST /events
     *
     * @param CreateEventsAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateEventsAPIRequest $request)
    {
        $input = $request->all();

        $events = $this->eventsRepository->create($input);

        return $this->sendResponse($events->toArray(), 'Events saved successfully');
    }

    /**
     * Display the specified Events.
     * GET|HEAD /events/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var Events $events */
        $events = $this->eventsRepository->findWithoutFail($id);

        if (empty($events)) {
            return $this->sendError('Events not found');
        }

        return $this->sendResponse($events->toArray(), 'Events retrieved successfully');
    }

    /**
     * Update the specified Events in storage.
     * PUT/PATCH /events/{id}
     *
     * @param  int $id
     * @param UpdateEventsAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateEventsAPIRequest $request)
    {
        $input = $request->all();

        /** @var Events $events */
        $events = $this->eventsRepository->findWithoutFail($id);

        if (empty($events)) {
            return $this->sendError('Events not found');
        }

        $events = $this->eventsRepository->update($input, $id);

        return $this->sendResponse($events->toArray(), 'Events updated successfully');
    }

    /**
     * Remove the specified Events from storage.
     * DELETE /events/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var Events $events */
        $events = $this->eventsRepository->findWithoutFail($id);

        if (empty($events)) {
            return $this->sendError('Events not found');
        }

        $events->delete();

        return $this->sendResponse($id, 'Events deleted successfully');
    }
}
