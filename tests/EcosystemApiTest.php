<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class EcosystemApiTest extends TestCase
{
    use MakeEcosystemTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateEcosystem()
    {
        $ecosystem = $this->fakeEcosystemData();
        $this->json('POST', '/api/v1/ecosystems', $ecosystem);

        $this->assertApiResponse($ecosystem);
    }

    /**
     * @test
     */
    public function testReadEcosystem()
    {
        $ecosystem = $this->makeEcosystem();
        $this->json('GET', '/api/v1/ecosystems/'.$ecosystem->id);

        $this->assertApiResponse($ecosystem->toArray());
    }

    /**
     * @test
     */
    public function testUpdateEcosystem()
    {
        $ecosystem = $this->makeEcosystem();
        $editedEcosystem = $this->fakeEcosystemData();

        $this->json('PUT', '/api/v1/ecosystems/'.$ecosystem->id, $editedEcosystem);

        $this->assertApiResponse($editedEcosystem);
    }

    /**
     * @test
     */
    public function testDeleteEcosystem()
    {
        $ecosystem = $this->makeEcosystem();
        $this->json('DELETE', '/api/v1/ecosystems/'.$ecosystem->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/ecosystems/'.$ecosystem->id);

        $this->assertResponseStatus(404);
    }
}
