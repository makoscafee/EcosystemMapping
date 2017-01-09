<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OrganizationApiTest extends TestCase
{
    use MakeOrganizationTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateOrganization()
    {
        $organization = $this->fakeOrganizationData();
        $this->json('POST', '/api/v1/organizations', $organization);

        $this->assertApiResponse($organization);
    }

    /**
     * @test
     */
    public function testReadOrganization()
    {
        $organization = $this->makeOrganization();
        $this->json('GET', '/api/v1/organizations/'.$organization->id);

        $this->assertApiResponse($organization->toArray());
    }

    /**
     * @test
     */
    public function testUpdateOrganization()
    {
        $organization = $this->makeOrganization();
        $editedOrganization = $this->fakeOrganizationData();

        $this->json('PUT', '/api/v1/organizations/'.$organization->id, $editedOrganization);

        $this->assertApiResponse($editedOrganization);
    }

    /**
     * @test
     */
    public function testDeleteOrganization()
    {
        $organization = $this->makeOrganization();
        $this->json('DELETE', '/api/v1/organizations/'.$organization->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/organizations/'.$organization->id);

        $this->assertResponseStatus(404);
    }
}
