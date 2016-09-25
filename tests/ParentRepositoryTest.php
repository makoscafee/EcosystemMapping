<?php

use App\Models\Parent;
use App\Repositories\ParentRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ParentRepositoryTest extends TestCase
{
    use MakeParentTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var ParentRepository
     */
    protected $parentRepo;

    public function setUp()
    {
        parent::setUp();
        $this->parentRepo = App::make(ParentRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateParent()
    {
        $parent = $this->fakeParentData();
        $createdParent = $this->parentRepo->create($parent);
        $createdParent = $createdParent->toArray();
        $this->assertArrayHasKey('id', $createdParent);
        $this->assertNotNull($createdParent['id'], 'Created Parent must have id specified');
        $this->assertNotNull(Parent::find($createdParent['id']), 'Parent with given id must be in DB');
        $this->assertModelData($parent, $createdParent);
    }

    /**
     * @test read
     */
    public function testReadParent()
    {
        $parent = $this->makeParent();
        $dbParent = $this->parentRepo->find($parent->id);
        $dbParent = $dbParent->toArray();
        $this->assertModelData($parent->toArray(), $dbParent);
    }

    /**
     * @test update
     */
    public function testUpdateParent()
    {
        $parent = $this->makeParent();
        $fakeParent = $this->fakeParentData();
        $updatedParent = $this->parentRepo->update($fakeParent, $parent->id);
        $this->assertModelData($fakeParent, $updatedParent->toArray());
        $dbParent = $this->parentRepo->find($parent->id);
        $this->assertModelData($fakeParent, $dbParent->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteParent()
    {
        $parent = $this->makeParent();
        $resp = $this->parentRepo->delete($parent->id);
        $this->assertTrue($resp);
        $this->assertNull(Parent::find($parent->id), 'Parent should not exist in DB');
    }
}
