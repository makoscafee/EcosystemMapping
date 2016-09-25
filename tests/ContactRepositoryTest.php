<?php

use App\Models\Contact;
use App\Repositories\ContactRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ContactRepositoryTest extends TestCase
{
    use MakeContactTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var ContactRepository
     */
    protected $contactRepo;

    public function setUp()
    {
        parent::setUp();
        $this->contactRepo = App::make(ContactRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateContact()
    {
        $contact = $this->fakeContactData();
        $createdContact = $this->contactRepo->create($contact);
        $createdContact = $createdContact->toArray();
        $this->assertArrayHasKey('id', $createdContact);
        $this->assertNotNull($createdContact['id'], 'Created Contact must have id specified');
        $this->assertNotNull(Contact::find($createdContact['id']), 'Contact with given id must be in DB');
        $this->assertModelData($contact, $createdContact);
    }

    /**
     * @test read
     */
    public function testReadContact()
    {
        $contact = $this->makeContact();
        $dbContact = $this->contactRepo->find($contact->id);
        $dbContact = $dbContact->toArray();
        $this->assertModelData($contact->toArray(), $dbContact);
    }

    /**
     * @test update
     */
    public function testUpdateContact()
    {
        $contact = $this->makeContact();
        $fakeContact = $this->fakeContactData();
        $updatedContact = $this->contactRepo->update($fakeContact, $contact->id);
        $this->assertModelData($fakeContact, $updatedContact->toArray());
        $dbContact = $this->contactRepo->find($contact->id);
        $this->assertModelData($fakeContact, $dbContact->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteContact()
    {
        $contact = $this->makeContact();
        $resp = $this->contactRepo->delete($contact->id);
        $this->assertTrue($resp);
        $this->assertNull(Contact::find($contact->id), 'Contact should not exist in DB');
    }
}
