<?php

use App\Models\OrganizationRole;
use App\Repositories\OrganizationRoleRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OrganizationRoleRepositoryTest extends TestCase
{
    use MakeOrganizationRoleTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var OrganizationRoleRepository
     */
    protected $organizationRoleRepo;

    public function setUp()
    {
        parent::setUp();
        $this->organizationRoleRepo = App::make(OrganizationRoleRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateOrganizationRole()
    {
        $organizationRole = $this->fakeOrganizationRoleData();
        $createdOrganizationRole = $this->organizationRoleRepo->create($organizationRole);
        $createdOrganizationRole = $createdOrganizationRole->toArray();
        $this->assertArrayHasKey('id', $createdOrganizationRole);
        $this->assertNotNull($createdOrganizationRole['id'], 'Created OrganizationRole must have id specified');
        $this->assertNotNull(OrganizationRole::find($createdOrganizationRole['id']), 'OrganizationRole with given id must be in DB');
        $this->assertModelData($organizationRole, $createdOrganizationRole);
    }

    /**
     * @test read
     */
    public function testReadOrganizationRole()
    {
        $organizationRole = $this->makeOrganizationRole();
        $dbOrganizationRole = $this->organizationRoleRepo->find($organizationRole->id);
        $dbOrganizationRole = $dbOrganizationRole->toArray();
        $this->assertModelData($organizationRole->toArray(), $dbOrganizationRole);
    }

    /**
     * @test update
     */
    public function testUpdateOrganizationRole()
    {
        $organizationRole = $this->makeOrganizationRole();
        $fakeOrganizationRole = $this->fakeOrganizationRoleData();
        $updatedOrganizationRole = $this->organizationRoleRepo->update($fakeOrganizationRole, $organizationRole->id);
        $this->assertModelData($fakeOrganizationRole, $updatedOrganizationRole->toArray());
        $dbOrganizationRole = $this->organizationRoleRepo->find($organizationRole->id);
        $this->assertModelData($fakeOrganizationRole, $dbOrganizationRole->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteOrganizationRole()
    {
        $organizationRole = $this->makeOrganizationRole();
        $resp = $this->organizationRoleRepo->delete($organizationRole->id);
        $this->assertTrue($resp);
        $this->assertNull(OrganizationRole::find($organizationRole->id), 'OrganizationRole should not exist in DB');
    }
}
