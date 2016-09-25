<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class StageApiTest extends TestCase
{
    use MakeStageTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateStage()
    {
        $stage = $this->fakeStageData();
        $this->json('POST', '/api/v1/stages', $stage);

        $this->assertApiResponse($stage);
    }

    /**
     * @test
     */
    public function testReadStage()
    {
        $stage = $this->makeStage();
        $this->json('GET', '/api/v1/stages/'.$stage->id);

        $this->assertApiResponse($stage->toArray());
    }

    /**
     * @test
     */
    public function testUpdateStage()
    {
        $stage = $this->makeStage();
        $editedStage = $this->fakeStageData();

        $this->json('PUT', '/api/v1/stages/'.$stage->id, $editedStage);

        $this->assertApiResponse($editedStage);
    }

    /**
     * @test
     */
    public function testDeleteStage()
    {
        $stage = $this->makeStage();
        $this->json('DELETE', '/api/v1/stages/'.$stage->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/stages/'.$stage->id);

        $this->assertResponseStatus(404);
    }
}
