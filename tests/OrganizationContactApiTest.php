<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OrganizationContactApiTest extends TestCase
{
    use MakeOrganizationContactTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateOrganizationContact()
    {
        $organizationContact = $this->fakeOrganizationContactData();
        $this->json('POST', '/api/v1/organizationContacts', $organizationContact);

        $this->assertApiResponse($organizationContact);
    }

    /**
     * @test
     */
    public function testReadOrganizationContact()
    {
        $organizationContact = $this->makeOrganizationContact();
        $this->json('GET', '/api/v1/organizationContacts/'.$organizationContact->id);

        $this->assertApiResponse($organizationContact->toArray());
    }

    /**
     * @test
     */
    public function testUpdateOrganizationContact()
    {
        $organizationContact = $this->makeOrganizationContact();
        $editedOrganizationContact = $this->fakeOrganizationContactData();

        $this->json('PUT', '/api/v1/organizationContacts/'.$organizationContact->id, $editedOrganizationContact);

        $this->assertApiResponse($editedOrganizationContact);
    }

    /**
     * @test
     */
    public function testDeleteOrganizationContact()
    {
        $organizationContact = $this->makeOrganizationContact();
        $this->json('DELETE', '/api/v1/organizationContacts/'.$organizationContact->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/organizationContacts/'.$organizationContact->id);

        $this->assertResponseStatus(404);
    }
}
