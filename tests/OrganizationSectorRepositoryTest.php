<?php

use App\Ecosystem\Models\OrganizationSector;
use App\Ecosystem\Repositories\OrganizationSectorRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OrganizationSectorRepositoryTest extends TestCase
{
    use MakeOrganizationSectorTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var OrganizationSectorRepository
     */
    protected $organizationSectorRepo;

    public function setUp()
    {
        parent::setUp();
        $this->organizationSectorRepo = App::make(OrganizationSectorRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateOrganizationSector()
    {
        $organizationSector = $this->fakeOrganizationSectorData();
        $createdOrganizationSector = $this->organizationSectorRepo->create($organizationSector);
        $createdOrganizationSector = $createdOrganizationSector->toArray();
        $this->assertArrayHasKey('id', $createdOrganizationSector);
        $this->assertNotNull($createdOrganizationSector['id'], 'Created OrganizationSector must have id specified');
        $this->assertNotNull(OrganizationSector::find($createdOrganizationSector['id']), 'OrganizationSector with given id must be in DB');
        $this->assertModelData($organizationSector, $createdOrganizationSector);
    }

    /**
     * @test read
     */
    public function testReadOrganizationSector()
    {
        $organizationSector = $this->makeOrganizationSector();
        $dbOrganizationSector = $this->organizationSectorRepo->find($organizationSector->id);
        $dbOrganizationSector = $dbOrganizationSector->toArray();
        $this->assertModelData($organizationSector->toArray(), $dbOrganizationSector);
    }

    /**
     * @test update
     */
    public function testUpdateOrganizationSector()
    {
        $organizationSector = $this->makeOrganizationSector();
        $fakeOrganizationSector = $this->fakeOrganizationSectorData();
        $updatedOrganizationSector = $this->organizationSectorRepo->update($fakeOrganizationSector, $organizationSector->id);
        $this->assertModelData($fakeOrganizationSector, $updatedOrganizationSector->toArray());
        $dbOrganizationSector = $this->organizationSectorRepo->find($organizationSector->id);
        $this->assertModelData($fakeOrganizationSector, $dbOrganizationSector->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteOrganizationSector()
    {
        $organizationSector = $this->makeOrganizationSector();
        $resp = $this->organizationSectorRepo->delete($organizationSector->id);
        $this->assertTrue($resp);
        $this->assertNull(OrganizationSector::find($organizationSector->id), 'OrganizationSector should not exist in DB');
    }
}
