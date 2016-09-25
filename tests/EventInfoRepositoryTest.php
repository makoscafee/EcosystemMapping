<?php

use App\Models\EventInfo;
use App\Repositories\EventInfoRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class EventInfoRepositoryTest extends TestCase
{
    use MakeEventInfoTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var EventInfoRepository
     */
    protected $eventInfoRepo;

    public function setUp()
    {
        parent::setUp();
        $this->eventInfoRepo = App::make(EventInfoRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateEventInfo()
    {
        $eventInfo = $this->fakeEventInfoData();
        $createdEventInfo = $this->eventInfoRepo->create($eventInfo);
        $createdEventInfo = $createdEventInfo->toArray();
        $this->assertArrayHasKey('id', $createdEventInfo);
        $this->assertNotNull($createdEventInfo['id'], 'Created EventInfo must have id specified');
        $this->assertNotNull(EventInfo::find($createdEventInfo['id']), 'EventInfo with given id must be in DB');
        $this->assertModelData($eventInfo, $createdEventInfo);
    }

    /**
     * @test read
     */
    public function testReadEventInfo()
    {
        $eventInfo = $this->makeEventInfo();
        $dbEventInfo = $this->eventInfoRepo->find($eventInfo->id);
        $dbEventInfo = $dbEventInfo->toArray();
        $this->assertModelData($eventInfo->toArray(), $dbEventInfo);
    }

    /**
     * @test update
     */
    public function testUpdateEventInfo()
    {
        $eventInfo = $this->makeEventInfo();
        $fakeEventInfo = $this->fakeEventInfoData();
        $updatedEventInfo = $this->eventInfoRepo->update($fakeEventInfo, $eventInfo->id);
        $this->assertModelData($fakeEventInfo, $updatedEventInfo->toArray());
        $dbEventInfo = $this->eventInfoRepo->find($eventInfo->id);
        $this->assertModelData($fakeEventInfo, $dbEventInfo->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteEventInfo()
    {
        $eventInfo = $this->makeEventInfo();
        $resp = $this->eventInfoRepo->delete($eventInfo->id);
        $this->assertTrue($resp);
        $this->assertNull(EventInfo::find($eventInfo->id), 'EventInfo should not exist in DB');
    }
}
