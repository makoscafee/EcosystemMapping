<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class SectorApiTest extends TestCase
{
    use MakeSectorTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateSector()
    {
        $sector = $this->fakeSectorData();
        $this->json('POST', '/api/v1/sectors', $sector);

        $this->assertApiResponse($sector);
    }

    /**
     * @test
     */
    public function testReadSector()
    {
        $sector = $this->makeSector();
        $this->json('GET', '/api/v1/sectors/'.$sector->id);

        $this->assertApiResponse($sector->toArray());
    }

    /**
     * @test
     */
    public function testUpdateSector()
    {
        $sector = $this->makeSector();
        $editedSector = $this->fakeSectorData();

        $this->json('PUT', '/api/v1/sectors/'.$sector->id, $editedSector);

        $this->assertApiResponse($editedSector);
    }

    /**
     * @test
     */
    public function testDeleteSector()
    {
        $sector = $this->makeSector();
        $this->json('DELETE', '/api/v1/sectors/'.$sector->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/sectors/'.$sector->id);

        $this->assertResponseStatus(404);
    }
}
