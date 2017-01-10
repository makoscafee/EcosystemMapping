<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ParentApiTest extends TestCase
{
    use MakeParentTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateParent()
    {
        $parent = $this->fakeParentData();
        $this->json('POST', '/api/v1/parents', $parent);

        $this->assertApiResponse($parent);
    }

    /**
     * @test
     */
    public function testReadParent()
    {
        $parent = $this->makeParent();
        $this->json('GET', '/api/v1/parents/'.$parent->id);

        $this->assertApiResponse($parent->toArray());
    }

    /**
     * @test
     */
    public function testUpdateParent()
    {
        $parent = $this->makeParent();
        $editedParent = $this->fakeParentData();

        $this->json('PUT', '/api/v1/parents/'.$parent->id, $editedParent);

        $this->assertApiResponse($editedParent);
    }

    /**
     * @test
     */
    public function testDeleteParent()
    {
        $parent = $this->makeParent();
        $this->json('DELETE', '/api/v1/parents/'.$parent->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/parents/'.$parent->id);

        $this->assertResponseStatus(404);
    }
}
