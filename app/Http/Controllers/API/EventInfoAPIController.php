<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateEventInfoAPIRequest;
use App\Http\Requests\API\UpdateEventInfoAPIRequest;
use App\Ecosystem\Models\EventInfo;
use App\Ecosystem\Repositories\EventInfoRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class EventInfoController
 * @package App\Http\Controllers\API
 */

class EventInfoAPIController extends AppBaseController
{
    /** @var  EventInfoRepository */
    private $eventInfoRepository;

    public function __construct(EventInfoRepository $eventInfoRepo)
    {
        $this->eventInfoRepository = $eventInfoRepo;
    }

    /**
     * Display a listing of the EventInfo.
     * GET|HEAD /eventInfos
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->eventInfoRepository->pushCriteria(new RequestCriteria($request));
        $this->eventInfoRepository->pushCriteria(new LimitOffsetCriteria($request));
        $eventInfos = $this->eventInfoRepository->all();

        return $this->sendResponse($eventInfos->toArray(), 'Event Infos retrieved successfully');
    }

    /**
     * Store a newly created EventInfo in storage.
     * POST /eventInfos
     *
     * @param CreateEventInfoAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateEventInfoAPIRequest $request)
    {
        $input = $request->all();

        $eventInfos = $this->eventInfoRepository->create($input);

        return $this->sendResponse($eventInfos->toArray(), 'Event Info saved successfully');
    }

    /**
     * Display the specified EventInfo.
     * GET|HEAD /eventInfos/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var EventInfo $eventInfo */
        $eventInfo = $this->eventInfoRepository->findWithoutFail($id);

        if (empty($eventInfo)) {
            return $this->sendError('Event Info not found');
        }

        return $this->sendResponse($eventInfo->toArray(), 'Event Info retrieved successfully');
    }

    /**
     * Update the specified EventInfo in storage.
     * PUT/PATCH /eventInfos/{id}
     *
     * @param  int $id
     * @param UpdateEventInfoAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateEventInfoAPIRequest $request)
    {
        $input = $request->all();

        /** @var EventInfo $eventInfo */
        $eventInfo = $this->eventInfoRepository->findWithoutFail($id);

        if (empty($eventInfo)) {
            return $this->sendError('Event Info not found');
        }

        $eventInfo = $this->eventInfoRepository->update($input, $id);

        return $this->sendResponse($eventInfo->toArray(), 'EventInfo updated successfully');
    }

    /**
     * Remove the specified EventInfo from storage.
     * DELETE /eventInfos/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var EventInfo $eventInfo */
        $eventInfo = $this->eventInfoRepository->findWithoutFail($id);

        if (empty($eventInfo)) {
            return $this->sendError('Event Info not found');
        }

        $eventInfo->delete();

        return $this->sendResponse($id, 'Event Info deleted successfully');
    }
}
