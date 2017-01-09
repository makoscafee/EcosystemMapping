<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OrganizationStageApiTest extends TestCase
{
    use MakeOrganizationStageTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateOrganizationStage()
    {
        $organizationStage = $this->fakeOrganizationStageData();
        $this->json('POST', '/api/v1/organizationStages', $organizationStage);

        $this->assertApiResponse($organizationStage);
    }

    /**
     * @test
     */
    public function testReadOrganizationStage()
    {
        $organizationStage = $this->makeOrganizationStage();
        $this->json('GET', '/api/v1/organizationStages/'.$organizationStage->id);

        $this->assertApiResponse($organizationStage->toArray());
    }

    /**
     * @test
     */
    public function testUpdateOrganizationStage()
    {
        $organizationStage = $this->makeOrganizationStage();
        $editedOrganizationStage = $this->fakeOrganizationStageData();

        $this->json('PUT', '/api/v1/organizationStages/'.$organizationStage->id, $editedOrganizationStage);

        $this->assertApiResponse($editedOrganizationStage);
    }

    /**
     * @test
     */
    public function testDeleteOrganizationStage()
    {
        $organizationStage = $this->makeOrganizationStage();
        $this->json('DELETE', '/api/v1/organizationStages/'.$organizationStage->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/organizationStages/'.$organizationStage->id);

        $this->assertResponseStatus(404);
    }
}
