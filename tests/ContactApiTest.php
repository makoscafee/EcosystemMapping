<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ContactApiTest extends TestCase
{
    use MakeContactTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateContact()
    {
        $contact = $this->fakeContactData();
        $this->json('POST', '/api/v1/contacts', $contact);

        $this->assertApiResponse($contact);
    }

    /**
     * @test
     */
    public function testReadContact()
    {
        $contact = $this->makeContact();
        $this->json('GET', '/api/v1/contacts/'.$contact->id);

        $this->assertApiResponse($contact->toArray());
    }

    /**
     * @test
     */
    public function testUpdateContact()
    {
        $contact = $this->makeContact();
        $editedContact = $this->fakeContactData();

        $this->json('PUT', '/api/v1/contacts/'.$contact->id, $editedContact);

        $this->assertApiResponse($editedContact);
    }

    /**
     * @test
     */
    public function testDeleteContact()
    {
        $contact = $this->makeContact();
        $this->json('DELETE', '/api/v1/contacts/'.$contact->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/contacts/'.$contact->id);

        $this->assertResponseStatus(404);
    }
}
