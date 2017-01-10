<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class EventInfoApiTest extends TestCase
{
    use MakeEventInfoTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateEventInfo()
    {
        $eventInfo = $this->fakeEventInfoData();
        $this->json('POST', '/api/v1/eventInfos', $eventInfo);

        $this->assertApiResponse($eventInfo);
    }

    /**
     * @test
     */
    public function testReadEventInfo()
    {
        $eventInfo = $this->makeEventInfo();
        $this->json('GET', '/api/v1/eventInfos/'.$eventInfo->id);

        $this->assertApiResponse($eventInfo->toArray());
    }

    /**
     * @test
     */
    public function testUpdateEventInfo()
    {
        $eventInfo = $this->makeEventInfo();
        $editedEventInfo = $this->fakeEventInfoData();

        $this->json('PUT', '/api/v1/eventInfos/'.$eventInfo->id, $editedEventInfo);

        $this->assertApiResponse($editedEventInfo);
    }

    /**
     * @test
     */
    public function testDeleteEventInfo()
    {
        $eventInfo = $this->makeEventInfo();
        $this->json('DELETE', '/api/v1/eventInfos/'.$eventInfo->iidd);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/eventInfos/'.$eventInfo->id);

        $this->assertResponseStatus(404);
    }
}
