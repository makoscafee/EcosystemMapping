<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OrganizationLocationApiTest extends TestCase
{
    use MakeOrganizationLocationTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateOrganizationLocation()
    {
        $organizationLocation = $this->fakeOrganizationLocationData();
        $this->json('POST', '/api/v1/organizationLocations', $organizationLocation);

        $this->assertApiResponse($organizationLocation);
    }

    /**
     * @test
     */
    public function testReadOrganizationLocation()
    {
        $organizationLocation = $this->makeOrganizationLocation();
        $this->json('GET', '/api/v1/organizationLocations/'.$organizationLocation->id);

        $this->assertApiResponse($organizationLocation->toArray());
    }

    /**
     * @test
     */
    public function testUpdateOrganizationLocation()
    {
        $organizationLocation = $this->makeOrganizationLocation();
        $editedOrganizationLocation = $this->fakeOrganizationLocationData();

        $this->json('PUT', '/api/v1/organizationLocations/'.$organizationLocation->id, $editedOrganizationLocation);

        $this->assertApiResponse($editedOrganizationLocation);
    }

    /**
     * @test
     */
    public function testDeleteOrganizationLocation()
    {
        $organizationLocation = $this->makeOrganizationLocation();
        $this->json('DELETE', '/api/v1/organizationLocations/'.$organizationLocation->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/organizationLocations/'.$organizationLocation->id);

        $this->assertResponseStatus(404);
    }
}
