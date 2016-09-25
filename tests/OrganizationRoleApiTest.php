<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OrganizationRoleApiTest extends TestCase
{
    use MakeOrganizationRoleTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateOrganizationRole()
    {
        $organizationRole = $this->fakeOrganizationRoleData();
        $this->json('POST', '/api/v1/organizationRoles', $organizationRole);

        $this->assertApiResponse($organizationRole);
    }

    /**
     * @test
     */
    public function testReadOrganizationRole()
    {
        $organizationRole = $this->makeOrganizationRole();
        $this->json('GET', '/api/v1/organizationRoles/'.$organizationRole->id);

        $this->assertApiResponse($organizationRole->toArray());
    }

    /**
     * @test
     */
    public function testUpdateOrganizationRole()
    {
        $organizationRole = $this->makeOrganizationRole();
        $editedOrganizationRole = $this->fakeOrganizationRoleData();

        $this->json('PUT', '/api/v1/organizationRoles/'.$organizationRole->id, $editedOrganizationRole);

        $this->assertApiResponse($editedOrganizationRole);
    }

    /**
     * @test
     */
    public function testDeleteOrganizationRole()
    {
        $organizationRole = $this->makeOrganizationRole();
        $this->json('DELETE', '/api/v1/organizationRoles/'.$organizationRole->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/organizationRoles/'.$organizationRole->id);

        $this->assertResponseStatus(404);
    }
}
