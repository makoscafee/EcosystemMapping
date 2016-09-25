<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OrganizationSectorApiTest extends TestCase
{
    use MakeOrganizationSectorTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateOrganizationSector()
    {
        $organizationSector = $this->fakeOrganizationSectorData();
        $this->json('POST', '/api/v1/organizationSectors', $organizationSector);

        $this->assertApiResponse($organizationSector);
    }

    /**
     * @test
     */
    public function testReadOrganizationSector()
    {
        $organizationSector = $this->makeOrganizationSector();
        $this->json('GET', '/api/v1/organizationSectors/'.$organizationSector->id);

        $this->assertApiResponse($organizationSector->toArray());
    }

    /**
     * @test
     */
    public function testUpdateOrganizationSector()
    {
        $organizationSector = $this->makeOrganizationSector();
        $editedOrganizationSector = $this->fakeOrganizationSectorData();

        $this->json('PUT', '/api/v1/organizationSectors/'.$organizationSector->id, $editedOrganizationSector);

        $this->assertApiResponse($editedOrganizationSector);
    }

    /**
     * @test
     */
    public function testDeleteOrganizationSector()
    {
        $organizationSector = $this->makeOrganizationSector();
        $this->json('DELETE', '/api/v1/organizationSectors/'.$organizationSector->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/organizationSectors/'.$organizationSector->id);

        $this->assertResponseStatus(404);
    }
}
