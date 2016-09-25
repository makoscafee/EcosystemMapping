<?php

use App\Models\OrganizationLocation;
use App\Repositories\OrganizationLocationRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OrganizationLocationRepositoryTest extends TestCase
{
    use MakeOrganizationLocationTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var OrganizationLocationRepository
     */
    protected $organizationLocationRepo;

    public function setUp()
    {
        parent::setUp();
        $this->organizationLocationRepo = App::make(OrganizationLocationRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateOrganizationLocation()
    {
        $organizationLocation = $this->fakeOrganizationLocationData();
        $createdOrganizationLocation = $this->organizationLocationRepo->create($organizationLocation);
        $createdOrganizationLocation = $createdOrganizationLocation->toArray();
        $this->assertArrayHasKey('id', $createdOrganizationLocation);
        $this->assertNotNull($createdOrganizationLocation['id'], 'Created OrganizationLocation must have id specified');
        $this->assertNotNull(OrganizationLocation::find($createdOrganizationLocation['id']), 'OrganizationLocation with given id must be in DB');
        $this->assertModelData($organizationLocation, $createdOrganizationLocation);
    }

    /**
     * @test read
     */
    public function testReadOrganizationLocation()
    {
        $organizationLocation = $this->makeOrganizationLocation();
        $dbOrganizationLocation = $this->organizationLocationRepo->find($organizationLocation->id);
        $dbOrganizationLocation = $dbOrganizationLocation->toArray();
        $this->assertModelData($organizationLocation->toArray(), $dbOrganizationLocation);
    }

    /**
     * @test update
     */
    public function testUpdateOrganizationLocation()
    {
        $organizationLocation = $this->makeOrganizationLocation();
        $fakeOrganizationLocation = $this->fakeOrganizationLocationData();
        $updatedOrganizationLocation = $this->organizationLocationRepo->update($fakeOrganizationLocation, $organizationLocation->id);
        $this->assertModelData($fakeOrganizationLocation, $updatedOrganizationLocation->toArray());
        $dbOrganizationLocation = $this->organizationLocationRepo->find($organizationLocation->id);
        $this->assertModelData($fakeOrganizationLocation, $dbOrganizationLocation->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteOrganizationLocation()
    {
        $organizationLocation = $this->makeOrganizationLocation();
        $resp = $this->organizationLocationRepo->delete($organizationLocation->id);
        $this->assertTrue($resp);
        $this->assertNull(OrganizationLocation::find($organizationLocation->id), 'OrganizationLocation should not exist in DB');
    }
}
