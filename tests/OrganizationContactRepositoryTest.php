<?php

use App\Ecosystem\Models\OrganizationContact;
use App\Ecosystem\Repositories\OrganizationContactRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OrganizationContactRepositoryTest extends TestCase
{
    use MakeOrganizationContactTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var OrganizationContactRepository
     */
    protected $organizationContactRepo;

    public function setUp()
    {
        parent::setUp();
        $this->organizationContactRepo = App::make(OrganizationContactRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateOrganizationContact()
    {
        $organizationContact = $this->fakeOrganizationContactData();
        $createdOrganizationContact = $this->organizationContactRepo->create($organizationContact);
        $createdOrganizationContact = $createdOrganizationContact->toArray();
        $this->assertArrayHasKey('id', $createdOrganizationContact);
        $this->assertNotNull($createdOrganizationContact['id'], 'Created OrganizationContact must have id specified');
        $this->assertNotNull(OrganizationContact::find($createdOrganizationContact['id']), 'OrganizationContact with given id must be in DB');
        $this->assertModelData($organizationContact, $createdOrganizationContact);
    }

    /**
     * @test read
     */
    public function testReadOrganizationContact()
    {
        $organizationContact = $this->makeOrganizationContact();
        $dbOrganizationContact = $this->organizationContactRepo->find($organizationContact->id);
        $dbOrganizationContact = $dbOrganizationContact->toArray();
        $this->assertModelData($organizationContact->toArray(), $dbOrganizationContact);
    }

    /**
     * @test update
     */
    public function testUpdateOrganizationContact()
    {
        $organizationContact = $this->makeOrganizationContact();
        $fakeOrganizationContact = $this->fakeOrganizationContactData();
        $updatedOrganizationContact = $this->organizationContactRepo->update($fakeOrganizationContact, $organizationContact->id);
        $this->assertModelData($fakeOrganizationContact, $updatedOrganizationContact->toArray());
        $dbOrganizationContact = $this->organizationContactRepo->find($organizationContact->id);
        $this->assertModelData($fakeOrganizationContact, $dbOrganizationContact->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteOrganizationContact()
    {
        $organizationContact = $this->makeOrganizationContact();
        $resp = $this->organizationContactRepo->delete($organizationContact->id);
        $this->assertTrue($resp);
        $this->assertNull(OrganizationContact::find($organizationContact->id), 'OrganizationContact should not exist in DB');
    }
}
