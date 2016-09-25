<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class EcosystemParentApiTest extends TestCase
{
    use MakeEcosystemParentTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateEcosystemParent()
    {
        $ecosystemParent = $this->fakeEcosystemParentData();
        $this->json('POST', '/api/v1/ecosystemParents', $ecosystemParent);

        $this->assertApiResponse($ecosystemParent);
    }

    /**
     * @test
     */
    public function testReadEcosystemParent()
    {
        $ecosystemParent = $this->makeEcosystemParent();
        $this->json('GET', '/api/v1/ecosystemParents/'.$ecosystemParent->id);

        $this->assertApiResponse($ecosystemParent->toArray());
    }

    /**
     * @test
     */
    public function testUpdateEcosystemParent()
    {
        $ecosystemParent = $this->makeEcosystemParent();
        $editedEcosystemParent = $this->fakeEcosystemParentData();

        $this->json('PUT', '/api/v1/ecosystemParents/'.$ecosystemParent->id, $editedEcosystemParent);

        $this->assertApiResponse($editedEcosystemParent);
    }

    /**
     * @test
     */
    public function testDeleteEcosystemParent()
    {
        $ecosystemParent = $this->makeEcosystemParent();
        $this->json('DELETE', '/api/v1/ecosystemParents/'.$ecosystemParent->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/ecosystemParents/'.$ecosystemParent->id);

        $this->assertResponseStatus(404);
    }
}
