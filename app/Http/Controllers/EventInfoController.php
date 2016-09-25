<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateEventInfoRequest;
use App\Http\Requests\UpdateEventInfoRequest;
use App\Ecosystem\Repositories\EventInfoRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class EventInfoController extends AppBaseController
{
    /** @var  EventInfoRepository */
    private $eventInfoRepository;

    public function __construct(EventInfoRepository $eventInfoRepo)
    {
        $this->eventInfoRepository = $eventInfoRepo;
    }

    /**
     * Display a listing of the EventInfo.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->eventInfoRepository->pushCriteria(new RequestCriteria($request));
        $eventInfos = $this->eventInfoRepository->all();

        return view('event_infos.index')
            ->with('eventInfos', $eventInfos);
    }

    /**
     * Show the form for creating a new EventInfo.
     *
     * @return Response
     */
    public function create()
    {
        return view('event_infos.create');
    }

    /**
     * Store a newly created EventInfo in storage.
     *
     * @param CreateEventInfoRequest $request
     *
     * @return Response
     */
    public function store(CreateEventInfoRequest $request)
    {
        $input = $request->all();

        $eventInfo = $this->eventInfoRepository->create($input);

        Flash::success('Event Info saved successfully.');

        return redirect(route('eventInfos.index'));
    }

    /**
     * Display the specified EventInfo.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $eventInfo = $this->eventInfoRepository->findWithoutFail($id);

        if (empty($eventInfo)) {
            Flash::error('Event Info not found');

            return redirect(route('eventInfos.index'));
        }

        return view('event_infos.show')->with('eventInfo', $eventInfo);
    }

    /**
     * Show the form for editing the specified EventInfo.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $eventInfo = $this->eventInfoRepository->findWithoutFail($id);

        if (empty($eventInfo)) {
            Flash::error('Event Info not found');

            return redirect(route('eventInfos.index'));
        }

        return view('event_infos.edit')->with('eventInfo', $eventInfo);
    }

    /**
     * Update the specified EventInfo in storage.
     *
     * @param  int              $id
     * @param UpdateEventInfoRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateEventInfoRequest $request)
    {
        $eventInfo = $this->eventInfoRepository->findWithoutFail($id);

        if (empty($eventInfo)) {
            Flash::error('Event Info not found');

            return redirect(route('eventInfos.index'));
        }

        $eventInfo = $this->eventInfoRepository->update($request->all(), $id);

        Flash::success('Event Info updated successfully.');

        return redirect(route('eventInfos.index'));
    }

    /**
     * Remove the specified EventInfo from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $eventInfo = $this->eventInfoRepository->findWithoutFail($id);

        if (empty($eventInfo)) {
            Flash::error('Event Info not found');

            return redirect(route('eventInfos.index'));
        }

        $this->eventInfoRepository->delete($id);

        Flash::success('Event Info deleted successfully.');

        return redirect(route('eventInfos.index'));
    }
}
