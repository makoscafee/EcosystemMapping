<?php

use App\Ecosystem\Models\OrganizationStage;
use App\Ecosystem\Repositories\OrganizationStageRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OrganizationStageRepositoryTest extends TestCase
{
    use MakeOrganizationStageTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var OrganizationStageRepository
     */
    protected $organizationStageRepo;

    public function setUp()
    {
        parent::setUp();
        $this->organizationStageRepo = App::make(OrganizationStageRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateOrganizationStage()
    {
        $organizationStage = $this->fakeOrganizationStageData();
        $createdOrganizationStage = $this->organizationStageRepo->create($organizationStage);
        $createdOrganizationStage = $createdOrganizationStage->toArray();
        $this->assertArrayHasKey('id', $createdOrganizationStage);
        $this->assertNotNull($createdOrganizationStage['id'], 'Created OrganizationStage must have id specified');
        $this->assertNotNull(OrganizationStage::find($createdOrganizationStage['id']), 'OrganizationStage with given id must be in DB');
        $this->assertModelData($organizationStage, $createdOrganizationStage);
    }

    /**
     * @test read
     */
    public function testReadOrganizationStage()
    {
        $organizationStage = $this->makeOrganizationStage();
        $dbOrganizationStage = $this->organizationStageRepo->find($organizationStage->id);
        $dbOrganizationStage = $dbOrganizationStage->toArray();
        $this->assertModelData($organizationStage->toArray(), $dbOrganizationStage);
    }

    /**
     * @test update
     */
    public function testUpdateOrganizationStage()
    {
        $organizationStage = $this->makeOrganizationStage();
        $fakeOrganizationStage = $this->fakeOrganizationStageData();
        $updatedOrganizationStage = $this->organizationStageRepo->update($fakeOrganizationStage, $organizationStage->id);
        $this->assertModelData($fakeOrganizationStage, $updatedOrganizationStage->toArray());
        $dbOrganizationStage = $this->organizationStageRepo->find($organizationStage->id);
        $this->assertModelData($fakeOrganizationStage, $dbOrganizationStage->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteOrganizationStage()
    {
        $organizationStage = $this->makeOrganizationStage();
        $resp = $this->organizationStageRepo->delete($organizationStage->id);
        $this->assertTrue($resp);
        $this->assertNull(OrganizationStage::find($organizationStage->id), 'OrganizationStage should not exist in DB');
    }
}
