<?php

use App\Models\Project;
use App\Repositories\ProjectRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ProjectRepositoryTest extends TestCase
{
    use MakeProjectTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var ProjectRepository
     */
    protected $projectRepo;

    public function setUp()
    {
        parent::setUp();
        $this->projectRepo = App::make(ProjectRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateProject()
    {
        $project = $this->fakeProjectData();
        $createdProject = $this->projectRepo->create($project);
        $createdProject = $createdProject->toArray();
        $this->assertArrayHasKey('id', $createdProject);
        $this->assertNotNull($createdProject['id'], 'Created Project must have id specified');
        $this->assertNotNull(Project::find($createdProject['id']), 'Project with given id must be in DB');
        $this->assertModelData($project, $createdProject);
    }

    /**
     * @test read
     */
    public function testReadProject()
    {
        $project = $this->makeProject();
        $dbProject = $this->projectRepo->find($project->id);
        $dbProject = $dbProject->toArray();
        $this->assertModelData($project->toArray(), $dbProject);
    }

    /**
     * @test update
     */
    public function testUpdateProject()
    {
        $project = $this->makeProject();
        $fakeProject = $this->fakeProjectData();
        $updatedProject = $this->projectRepo->update($fakeProject, $project->id);
        $this->assertModelData($fakeProject, $updatedProject->toArray());
        $dbProject = $this->projectRepo->find($project->id);
        $this->assertModelData($fakeProject, $dbProject->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteProject()
    {
        $project = $this->makeProject();
        $resp = $this->projectRepo->delete($project->id);
        $this->assertTrue($resp);
        $this->assertNull(Project::find($project->id), 'Project should not exist in DB');
    }
}
