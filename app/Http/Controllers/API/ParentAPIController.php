<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateParentAPIRequest;
use App\Http\Requests\API\UpdateParentAPIRequest;
use App\Models\Parent;
use App\Repositories\ParentRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class ParentController
 * @package App\Http\Controllers\API
 */

class ParentAPIController extends AppBaseController
{
    /** @var  ParentRepository */
    private $parentRepository;

    public function __construct(ParentRepository $parentRepo)
    {
        $this->parentRepository = $parentRepo;
    }

    /**
     * Display a listing of the Parent.
     * GET|HEAD /parents
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->parentRepository->pushCriteria(new RequestCriteria($request));
        $this->parentRepository->pushCriteria(new LimitOffsetCriteria($request));
        $parents = $this->parentRepository->all();

        return $this->sendResponse($parents->toArray(), 'Parents retrieved successfully');
    }

    /**
     * Store a newly created Parent in storage.
     * POST /parents
     *
     * @param CreateParentAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateParentAPIRequest $request)
    {
        $input = $request->all();

        $parents = $this->parentRepository->create($input);

        return $this->sendResponse($parents->toArray(), 'Parent saved successfully');
    }

    /**
     * Display the specified Parent.
     * GET|HEAD /parents/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var Parent $parent */
        $parent = $this->parentRepository->findWithoutFail($id);

        if (empty($parent)) {
            return $this->sendError('Parent not found');
        }

        return $this->sendResponse($parent->toArray(), 'Parent retrieved successfully');
    }

    /**
     * Update the specified Parent in storage.
     * PUT/PATCH /parents/{id}
     *
     * @param  int $id
     * @param UpdateParentAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateParentAPIRequest $request)
    {
        $input = $request->all();

        /** @var Parent $parent */
        $parent = $this->parentRepository->findWithoutFail($id);

        if (empty($parent)) {
            return $this->sendError('Parent not found');
        }

        $parent = $this->parentRepository->update($input, $id);

        return $this->sendResponse($parent->toArray(), 'Parent updated successfully');
    }

    /**
     * Remove the specified Parent from storage.
     * DELETE /parents/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var Parent $parent */
        $parent = $this->parentRepository->findWithoutFail($id);

        if (empty($parent)) {
            return $this->sendError('Parent not found');
        }

        $parent->delete();

        return $this->sendResponse($id, 'Parent deleted successfully');
    }
}
