<?php

use App\Models\EventRole;
use App\Repositories\EventRoleRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class EventRoleRepositoryTest extends TestCase
{
    use MakeEventRoleTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var EventRoleRepository
     */
    protected $eventRoleRepo;

    public function setUp()
    {
        parent::setUp();
        $this->eventRoleRepo = App::make(EventRoleRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateEventRole()
    {
        $eventRole = $this->fakeEventRoleData();
        $createdEventRole = $this->eventRoleRepo->create($eventRole);
        $createdEventRole = $createdEventRole->toArray();
        $this->assertArrayHasKey('id', $createdEventRole);
        $this->assertNotNull($createdEventRole['id'], 'Created EventRole must have id specified');
        $this->assertNotNull(EventRole::find($createdEventRole['id']), 'EventRole with given id must be in DB');
        $this->assertModelData($eventRole, $createdEventRole);
    }

    /**
     * @test read
     */
    public function testReadEventRole()
    {
        $eventRole = $this->makeEventRole();
        $dbEventRole = $this->eventRoleRepo->find($eventRole->id);
        $dbEventRole = $dbEventRole->toArray();
        $this->assertModelData($eventRole->toArray(), $dbEventRole);
    }

    /**
     * @test update
     */
    public function testUpdateEventRole()
    {
        $eventRole = $this->makeEventRole();
        $fakeEventRole = $this->fakeEventRoleData();
        $updatedEventRole = $this->eventRoleRepo->update($fakeEventRole, $eventRole->id);
        $this->assertModelData($fakeEventRole, $updatedEventRole->toArray());
        $dbEventRole = $this->eventRoleRepo->find($eventRole->id);
        $this->assertModelData($fakeEventRole, $dbEventRole->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteEventRole()
    {
        $eventRole = $this->makeEventRole();
        $resp = $this->eventRoleRepo->delete($eventRole->id);
        $this->assertTrue($resp);
        $this->assertNull(EventRole::find($eventRole->id), 'EventRole should not exist in DB');
    }
}
