<?php

use App\Models\OrganizationEcosystem;
use App\Repositories\OrganizationEcosystemRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OrganizationEcosystemRepositoryTest extends TestCase
{
    use MakeOrganizationEcosystemTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var OrganizationEcosystemRepository
     */
    protected $organizationEcosystemRepo;

    public function setUp()
    {
        parent::setUp();
        $this->organizationEcosystemRepo = App::make(OrganizationEcosystemRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateOrganizationEcosystem()
    {
        $organizationEcosystem = $this->fakeOrganizationEcosystemData();
        $createdOrganizationEcosystem = $this->organizationEcosystemRepo->create($organizationEcosystem);
        $createdOrganizationEcosystem = $createdOrganizationEcosystem->toArray();
        $this->assertArrayHasKey('id', $createdOrganizationEcosystem);
        $this->assertNotNull($createdOrganizationEcosystem['id'], 'Created OrganizationEcosystem must have id specified');
        $this->assertNotNull(OrganizationEcosystem::find($createdOrganizationEcosystem['id']), 'OrganizationEcosystem with given id must be in DB');
        $this->assertModelData($organizationEcosystem, $createdOrganizationEcosystem);
    }

    /**
     * @test read
     */
    public function testReadOrganizationEcosystem()
    {
        $organizationEcosystem = $this->makeOrganizationEcosystem();
        $dbOrganizationEcosystem = $this->organizationEcosystemRepo->find($organizationEcosystem->id);
        $dbOrganizationEcosystem = $dbOrganizationEcosystem->toArray();
        $this->assertModelData($organizationEcosystem->toArray(), $dbOrganizationEcosystem);
    }

    /**
     * @test update
     */
    public function testUpdateOrganizationEcosystem()
    {
        $organizationEcosystem = $this->makeOrganizationEcosystem();
        $fakeOrganizationEcosystem = $this->fakeOrganizationEcosystemData();
        $updatedOrganizationEcosystem = $this->organizationEcosystemRepo->update($fakeOrganizationEcosystem, $organizationEcosystem->id);
        $this->assertModelData($fakeOrganizationEcosystem, $updatedOrganizationEcosystem->toArray());
        $dbOrganizationEcosystem = $this->organizationEcosystemRepo->find($organizationEcosystem->id);
        $this->assertModelData($fakeOrganizationEcosystem, $dbOrganizationEcosystem->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteOrganizationEcosystem()
    {
        $organizationEcosystem = $this->makeOrganizationEcosystem();
        $resp = $this->organizationEcosystemRepo->delete($organizationEcosystem->id);
        $this->assertTrue($resp);
        $this->assertNull(OrganizationEcosystem::find($organizationEcosystem->id), 'OrganizationEcosystem should not exist in DB');
    }
}
