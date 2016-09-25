<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ProjectInfoApiTest extends TestCase
{
    use MakeProjectInfoTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateProjectInfo()
    {
        $projectInfo = $this->fakeProjectInfoData();
        $this->json('POST', '/api/v1/projectInfos', $projectInfo);

        $this->assertApiResponse($projectInfo);
    }

    /**
     * @test
     */
    public function testReadProjectInfo()
    {
        $projectInfo = $this->makeProjectInfo();
        $this->json('GET', '/api/v1/projectInfos/'.$projectInfo->id);

        $this->assertApiResponse($projectInfo->toArray());
    }

    /**
     * @test
     */
    public function testUpdateProjectInfo()
    {
        $projectInfo = $this->makeProjectInfo();
        $editedProjectInfo = $this->fakeProjectInfoData();

        $this->json('PUT', '/api/v1/projectInfos/'.$projectInfo->id, $editedProjectInfo);

        $this->assertApiResponse($editedProjectInfo);
    }

    /**
     * @test
     */
    public function testDeleteProjectInfo()
    {
        $projectInfo = $this->makeProjectInfo();
        $this->json('DELETE', '/api/v1/projectInfos/'.$projectInfo->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/projectInfos/'.$projectInfo->id);

        $this->assertResponseStatus(404);
    }
}
