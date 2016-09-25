<?php

use App\Models\ProjectRole;
use App\Repositories\ProjectRoleRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ProjectRoleRepositoryTest extends TestCase
{
    use MakeProjectRoleTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var ProjectRoleRepository
     */
    protected $projectRoleRepo;

    public function setUp()
    {
        parent::setUp();
        $this->projectRoleRepo = App::make(ProjectRoleRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateProjectRole()
    {
        $projectRole = $this->fakeProjectRoleData();
        $createdProjectRole = $this->projectRoleRepo->create($projectRole);
        $createdProjectRole = $createdProjectRole->toArray();
        $this->assertArrayHasKey('id', $createdProjectRole);
        $this->assertNotNull($createdProjectRole['id'], 'Created ProjectRole must have id specified');
        $this->assertNotNull(ProjectRole::find($createdProjectRole['id']), 'ProjectRole with given id must be in DB');
        $this->assertModelData($projectRole, $createdProjectRole);
    }

    /**
     * @test read
     */
    public function testReadProjectRole()
    {
        $projectRole = $this->makeProjectRole();
        $dbProjectRole = $this->projectRoleRepo->find($projectRole->id);
        $dbProjectRole = $dbProjectRole->toArray();
        $this->assertModelData($projectRole->toArray(), $dbProjectRole);
    }

    /**
     * @test update
     */
    public function testUpdateProjectRole()
    {
        $projectRole = $this->makeProjectRole();
        $fakeProjectRole = $this->fakeProjectRoleData();
        $updatedProjectRole = $this->projectRoleRepo->update($fakeProjectRole, $projectRole->id);
        $this->assertModelData($fakeProjectRole, $updatedProjectRole->toArray());
        $dbProjectRole = $this->projectRoleRepo->find($projectRole->id);
        $this->assertModelData($fakeProjectRole, $dbProjectRole->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteProjectRole()
    {
        $projectRole = $this->makeProjectRole();
        $resp = $this->projectRoleRepo->delete($projectRole->id);
        $this->assertTrue($resp);
        $this->assertNull(ProjectRole::find($projectRole->id), 'ProjectRole should not exist in DB');
    }
}
