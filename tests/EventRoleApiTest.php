<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class EventRoleApiTest extends TestCase
{
    use MakeEventRoleTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateEventRole()
    {
        $eventRole = $this->fakeEventRoleData();
        $this->json('POST', '/api/v1/eventRoles', $eventRole);

        $this->assertApiResponse($eventRole);
    }

    /**
     * @test
     */
    public function testReadEventRole()
    {
        $eventRole = $this->makeEventRole();
        $this->json('GET', '/api/v1/eventRoles/'.$eventRole->id);

        $this->assertApiResponse($eventRole->toArray());
    }

    /**
     * @test
     */
    public function testUpdateEventRole()
    {
        $eventRole = $this->makeEventRole();
        $editedEventRole = $this->fakeEventRoleData();

        $this->json('PUT', '/api/v1/eventRoles/'.$eventRole->id, $editedEventRole);

        $this->assertApiResponse($editedEventRole);
    }

    /**
     * @test
     */
    public function testDeleteEventRole()
    {
        $eventRole = $this->makeEventRole();
        $this->json('DELETE', '/api/v1/eventRoles/'.$eventRole->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/eventRoles/'.$eventRole->id);

        $this->assertResponseStatus(404);
    }
}
