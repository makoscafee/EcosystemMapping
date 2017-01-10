<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ProjectApiTest extends TestCase
{
    use MakeProjectTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateProject()
    {
        $project = $this->fakeProjectData();
        $this->json('POST', '/api/v1/projects', $project);

        $this->assertApiResponse($project);
    }

    /**
     * @test
     */
    public function testReadProject()
    {
        $project = $this->makeProject();
        $this->json('GET', '/api/v1/projects/'.$project->id);

        $this->assertApiResponse($project->toArray());
    }

    /**
     * @test
     */
    public function testUpdateProject()
    {
        $project = $this->makeProject();
        $editedProject = $this->fakeProjectData();

        $this->json('PUT', '/api/v1/projects/'.$project->id, $editedProject);

        $this->assertApiResponse($editedProject);
    }

    /**
     * @test
     */
    public function testDeleteProject()
    {
        $project = $this->makeProject();
        $this->json('DELETE', '/api/v1/projects/'.$project->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/projects/'.$project->id);

        $this->assertResponseStatus(404);
    }
}
