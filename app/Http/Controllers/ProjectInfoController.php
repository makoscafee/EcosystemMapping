<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProjectInfoRequest;
use App\Http\Requests\UpdateProjectInfoRequest;
use App\Ecosystem\Repositories\ProjectInfoRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class ProjectInfoController extends AppBaseController
{
    /** @var  ProjectInfoRepository */
    private $projectInfoRepository;

    public function __construct(ProjectInfoRepository $projectInfoRepo)
    {
        $this->projectInfoRepository = $projectInfoRepo;
    }

    /**
     * Display a listing of the ProjectInfo.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->projectInfoRepository->pushCriteria(new RequestCriteria($request));
        $projectInfos = $this->projectInfoRepository->all();

        return view('project_infos.index')
            ->with('projectInfos', $projectInfos);
    }

    /**
     * Show the form for creating a new ProjectInfo.
     *
     * @return Response
     */
    public function create()
    {
        return view('project_infos.create');
    }

    /**
     * Store a newly created ProjectInfo in storage.
     *
     * @param CreateProjectInfoRequest $request
     *
     * @return Response
     */
    public function store(CreateProjectInfoRequest $request)
    {
        $input = $request->all();

        $projectInfo = $this->projectInfoRepository->create($input);

        Flash::success('Project Info saved successfully.');

        return redirect(route('projectInfos.index'));
    }

    /**
     * Display the specified ProjectInfo.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $projectInfo = $this->projectInfoRepository->findWithoutFail($id);

        if (empty($projectInfo)) {
            Flash::error('Project Info not found');

            return redirect(route('projectInfos.index'));
        }

        return view('project_infos.show')->with('projectInfo', $projectInfo);
    }

    /**
     * Show the form for editing the specified ProjectInfo.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $projectInfo = $this->projectInfoRepository->findWithoutFail($id);

        if (empty($projectInfo)) {
            Flash::error('Project Info not found');

            return redirect(route('projectInfos.index'));
        }

        return view('project_infos.edit')->with('projectInfo', $projectInfo);
    }

    /**
     * Update the specified ProjectInfo in storage.
     *
     * @param  int              $id
     * @param UpdateProjectInfoRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateProjectInfoRequest $request)
    {
        $projectInfo = $this->projectInfoRepository->findWithoutFail($id);

        if (empty($projectInfo)) {
            Flash::error('Project Info not found');

            return redirect(route('projectInfos.index'));
        }

        $projectInfo = $this->projectInfoRepository->update($request->all(), $id);

        Flash::success('Project Info updated successfully.');

        return redirect(route('projectInfos.index'));
    }

    /**
     * Remove the specified ProjectInfo from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $projectInfo = $this->projectInfoRepository->findWithoutFail($id);

        if (empty($projectInfo)) {
            Flash::error('Project Info not found');

            return redirect(route('projectInfos.index'));
        }

        $this->projectInfoRepository->delete($id);

        Flash::success('Project Info deleted successfully.');

        return redirect(route('projectInfos.index'));
    }
}
