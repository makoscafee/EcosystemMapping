<?php

use App\Ecosystem\Models\ProjectInfo;
use App\Ecosystem\Repositories\ProjectInfoRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ProjectInfoRepositoryTest extends TestCase
{
    use MakeProjectInfoTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var ProjectInfoRepository
     */
    protected $projectInfoRepo;

    public function setUp()
    {
        parent::setUp();
        $this->projectInfoRepo = App::make(ProjectInfoRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateProjectInfo()
    {
        $projectInfo = $this->fakeProjectInfoData();
        $createdProjectInfo = $this->projectInfoRepo->create($projectInfo);
        $createdProjectInfo = $createdProjectInfo->toArray();
        $this->assertArrayHasKey('id', $createdProjectInfo);
        $this->assertNotNull($createdProjectInfo['id'], 'Created ProjectInfo must have id specified');
        $this->assertNotNull(ProjectInfo::find($createdProjectInfo['id']), 'ProjectInfo with given id must be in DB');
        $this->assertModelData($projectInfo, $createdProjectInfo);
    }

    /**
     * @test read
     */
    public function testReadProjectInfo()
    {
        $projectInfo = $this->makeProjectInfo();
        $dbProjectInfo = $this->projectInfoRepo->find($projectInfo->id);
        $dbProjectInfo = $dbProjectInfo->toArray();
        $this->assertModelData($projectInfo->toArray(), $dbProjectInfo);
    }

    /**
     * @test update
     */
    public function testUpdateProjectInfo()
    {
        $projectInfo = $this->makeProjectInfo();
        $fakeProjectInfo = $this->fakeProjectInfoData();
        $updatedProjectInfo = $this->projectInfoRepo->update($fakeProjectInfo, $projectInfo->id);
        $this->assertModelData($fakeProjectInfo, $updatedProjectInfo->toArray());
        $dbProjectInfo = $this->projectInfoRepo->find($projectInfo->id);
        $this->assertModelData($fakeProjectInfo, $dbProjectInfo->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteProjectInfo()
    {
        $projectInfo = $this->makeProjectInfo();
        $resp = $this->projectInfoRepo->delete($projectInfo->id);
        $this->assertTrue($resp);
        $this->assertNull(ProjectInfo::find($projectInfo->id), 'ProjectInfo should not exist in DB');
    }
}
