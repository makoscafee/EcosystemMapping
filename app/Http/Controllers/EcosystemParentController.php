<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateEcosystemParentRequest;
use App\Http\Requests\UpdateEcosystemParentRequest;
use App\Ecosystem\Repositories\EcosystemParentRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class EcosystemParentController extends AppBaseController
{
    /** @var  EcosystemParentRepository */
    private $ecosystemParentRepository;

    public function __construct(EcosystemParentRepository $ecosystemParentRepo)
    {
        $this->ecosystemParentRepository = $ecosystemParentRepo;
    }

    /**
     * Display a listing of the EcosystemParent.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->ecosystemParentRepository->pushCriteria(new RequestCriteria($request));
        $ecosystemParents = $this->ecosystemParentRepository->all();

        return view('ecosystem_parents.index')
            ->with('ecosystemParents', $ecosystemParents);
    }

    /**
     * Show the form for creating a new EcosystemParent.
     *
     * @return Response
     */
    public function create()
    {
        return view('ecosystem_parents.create');
    }

    /**
     * Store a newly created EcosystemParent in storage.
     *
     * @param CreateEcosystemParentRequest $request
     *
     * @return Response
     */
    public function store(CreateEcosystemParentRequest $request)
    {
        $input = $request->all();

        $ecosystemParent = $this->ecosystemParentRepository->create($input);

        Flash::success('Ecosystem Parent saved successfully.');

        return redirect(route('ecosystemParents.index'));
    }

    /**
     * Display the specified EcosystemParent.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $ecosystemParent = $this->ecosystemParentRepository->findWithoutFail($id);

        if (empty($ecosystemParent)) {
            Flash::error('Ecosystem Parent not found');

            return redirect(route('ecosystemParents.index'));
        }

        return view('ecosystem_parents.show')->with('ecosystemParent', $ecosystemParent);
    }

    /**
     * Show the form for editing the specified EcosystemParent.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $ecosystemParent = $this->ecosystemParentRepository->findWithoutFail($id);

        if (empty($ecosystemParent)) {
            Flash::error('Ecosystem Parent not found');

            return redirect(route('ecosystemParents.index'));
        }

        return view('ecosystem_parents.edit')->with('ecosystemParent', $ecosystemParent);
    }

    /**
     * Update the specified EcosystemParent in storage.
     *
     * @param  int              $id
     * @param UpdateEcosystemParentRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateEcosystemParentRequest $request)
    {
        $ecosystemParent = $this->ecosystemParentRepository->findWithoutFail($id);

        if (empty($ecosystemParent)) {
            Flash::error('Ecosystem Parent not found');

            return redirect(route('ecosystemParents.index'));
        }

        $ecosystemParent = $this->ecosystemParentRepository->update($request->all(), $id);

        Flash::success('Ecosystem Parent updated successfully.');

        return redirect(route('ecosystemParents.index'));
    }

    /**
     * Remove the specified EcosystemParent from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $ecosystemParent = $this->ecosystemParentRepository->findWithoutFail($id);

        if (empty($ecosystemParent)) {
            Flash::error('Ecosystem Parent not found');

            return redirect(route('ecosystemParents.index'));
        }

        $this->ecosystemParentRepository->delete($id);

        Flash::success('Ecosystem Parent deleted successfully.');

        return redirect(route('ecosystemParents.index'));
    }
}
