<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OrganizationEcosystemApiTest extends TestCase
{
    use MakeOrganizationEcosystemTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateOrganizationEcosystem()
    {
        $organizationEcosystem = $this->fakeOrganizationEcosystemData();
        $this->json('POST', '/api/v1/organizationEcosystems', $organizationEcosystem);

        $this->assertApiResponse($organizationEcosystem);
    }

    /**
     * @test
     */
    public function testReadOrganizationEcosystem()
    {
        $organizationEcosystem = $this->makeOrganizationEcosystem();
        $this->json('GET', '/api/v1/organizationEcosystems/'.$organizationEcosystem->id);

        $this->assertApiResponse($organizationEcosystem->toArray());
    }

    /**
     * @test
     */
    public function testUpdateOrganizationEcosystem()
    {
        $organizationEcosystem = $this->makeOrganizationEcosystem();
        $editedOrganizationEcosystem = $this->fakeOrganizationEcosystemData();

        $this->json('PUT', '/api/v1/organizationEcosystems/'.$organizationEcosystem->id, $editedOrganizationEcosystem);

        $this->assertApiResponse($editedOrganizationEcosystem);
    }

    /**
     * @test
     */
    public function testDeleteOrganizationEcosystem()
    {
        $organizationEcosystem = $this->makeOrganizationEcosystem();
        $this->json('DELETE', '/api/v1/organizationEcosystems/'.$organizationEcosystem->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/organizationEcosystems/'.$organizationEcosystem->id);

        $this->assertResponseStatus(404);
    }
}
