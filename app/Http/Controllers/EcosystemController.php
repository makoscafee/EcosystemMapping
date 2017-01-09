<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateEcosystemRequest;
use App\Http\Requests\UpdateEcosystemRequest;
use App\Ecosystem\Repositories\EcosystemRepository;
use App\Ecosystem\Repositories\OrganizationRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class EcosystemController extends AppBaseController
{
    /** @var  EcosystemRepository */
    private $ecosystemRepository;

    public function __construct(EcosystemRepository $ecosystemRepo)
    {
        $this->ecosystemRepository = $ecosystemRepo;
    }

    /**
     * Display a listing of the Ecosystem.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->ecosystemRepository->pushCriteria(new RequestCriteria($request));
        $ecosystems = $this->ecosystemRepository->all();

        return view('ecosystems.index')
            ->with('ecosystems', $ecosystems);
    }

    /**
     * Show the form for creating a new Ecosystem.
     *
     * @return Response
     */
    public function create()
    {
        return view('ecosystems.create');
    }

    /**
     * Store a newly created Ecosystem in storage.
     *
     * @param CreateEcosystemRequest $request
     *
     * @return Response
     */
    public function store(CreateEcosystemRequest $request)
    {
        $input = $request->all();

        $ecosystem = $this->ecosystemRepository->create($input);

        Flash::success('Ecosystem saved successfully.');

        return redirect(route('ecosystems.index'));
    }

    /**
     * Display the specified Ecosystem.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $ecosystem = $this->ecosystemRepository->findWithoutFail($id);

        if (empty($ecosystem)) {
            Flash::error('Ecosystem not found');

            return redirect(route('ecosystems.index'));
        }

        return view('ecosystems.show')->with('ecosystem', $ecosystem);
    }

    /**
     * Show the form for editing the specified Ecosystem.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $ecosystem = $this->ecosystemRepository->findWithoutFail($id);

        if (empty($ecosystem)) {
            Flash::error('Ecosystem not found');

            return redirect(route('ecosystems.index'));
        }

        return view('ecosystems.edit')->with('ecosystem', $ecosystem);
    }

    /**
     * Update the specified Ecosystem in storage.
     *
     * @param  int              $id
     * @param UpdateEcosystemRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateEcosystemRequest $request)
    {
        $ecosystem = $this->ecosystemRepository->findWithoutFail($id);

        if (empty($ecosystem)) {
            Flash::error('Ecosystem not found');

            return redirect(route('ecosystems.index'));
        }

        $ecosystem = $this->ecosystemRepository->update($request->all(), $id);

        Flash::success('Ecosystem updated successfully.');

        return redirect(route('ecosystems.index'));
    }

    /**
     * Remove the specified Ecosystem from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $ecosystem = $this->ecosystemRepository->findWithoutFail($id);

        if (empty($ecosystem)) {
            Flash::error('Ecosystem not found');

            return redirect(route('ecosystems.index'));
        }

        $this->ecosystemRepository->delete($id);

        Flash::success('Ecosystem deleted successfully.');

        return redirect(route('ecosystems.index'));
    }

}
