<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateSectorAPIRequest;
use App\Http\Requests\API\UpdateSectorAPIRequest;
use App\Models\Sector;
use App\Repositories\SectorRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class SectorController
 * @package App\Http\Controllers\API
 */

class SectorAPIController extends AppBaseController
{
    /** @var  SectorRepository */
    private $sectorRepository;

    public function __construct(SectorRepository $sectorRepo)
    {
        $this->sectorRepository = $sectorRepo;
    }

    /**
     * Display a listing of the Sector.
     * GET|HEAD /sectors
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->sectorRepository->pushCriteria(new RequestCriteria($request));
        $this->sectorRepository->pushCriteria(new LimitOffsetCriteria($request));
        $sectors = $this->sectorRepository->all();

        return $this->sendResponse($sectors->toArray(), 'Sectors retrieved successfully');
    }

    /**
     * Store a newly created Sector in storage.
     * POST /sectors
     *
     * @param CreateSectorAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateSectorAPIRequest $request)
    {
        $input = $request->all();

        $sectors = $this->sectorRepository->create($input);

        return $this->sendResponse($sectors->toArray(), 'Sector saved successfully');
    }

    /**
     * Display the specified Sector.
     * GET|HEAD /sectors/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var Sector $sector */
        $sector = $this->sectorRepository->findWithoutFail($id);

        if (empty($sector)) {
            return $this->sendError('Sector not found');
        }

        return $this->sendResponse($sector->toArray(), 'Sector retrieved successfully');
    }

    /**
     * Update the specified Sector in storage.
     * PUT/PATCH /sectors/{id}
     *
     * @param  int $id
     * @param UpdateSectorAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateSectorAPIRequest $request)
    {
        $input = $request->all();

        /** @var Sector $sector */
        $sector = $this->sectorRepository->findWithoutFail($id);

        if (empty($sector)) {
            return $this->sendError('Sector not found');
        }

        $sector = $this->sectorRepository->update($input, $id);

        return $this->sendResponse($sector->toArray(), 'Sector updated successfully');
    }

    /**
     * Remove the specified Sector from storage.
     * DELETE /sectors/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var Sector $sector */
        $sector = $this->sectorRepository->findWithoutFail($id);

        if (empty($sector)) {
            return $this->sendError('Sector not found');
        }

        $sector->delete();

        return $this->sendResponse($id, 'Sector deleted successfully');
    }
}
