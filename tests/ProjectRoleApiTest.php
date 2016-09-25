<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ProjectRoleApiTest extends TestCase
{
    use MakeProjectRoleTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateProjectRole()
    {
        $projectRole = $this->fakeProjectRoleData();
        $this->json('POST', '/api/v1/projectRoles', $projectRole);

        $this->assertApiResponse($projectRole);
    }

    /**
     * @test
     */
    public function testReadProjectRole()
    {
        $projectRole = $this->makeProjectRole();
        $this->json('GET', '/api/v1/projectRoles/'.$projectRole->id);

        $this->assertApiResponse($projectRole->toArray());
    }

    /**
     * @test
     */
    public function testUpdateProjectRole()
    {
        $projectRole = $this->makeProjectRole();
        $editedProjectRole = $this->fakeProjectRoleData();

        $this->json('PUT', '/api/v1/projectRoles/'.$projectRole->id, $editedProjectRole);

        $this->assertApiResponse($editedProjectRole);
    }

    /**
     * @test
     */
    public function testDeleteProjectRole()
    {
        $projectRole = $this->makeProjectRole();
        $this->json('DELETE', '/api/v1/projectRoles/'.$projectRole->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/projectRoles/'.$projectRole->id);

        $this->assertResponseStatus(404);
    }
}
