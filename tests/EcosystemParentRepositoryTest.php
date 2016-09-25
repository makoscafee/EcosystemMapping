<?php

use App\Models\EcosystemParent;
use App\Repositories\EcosystemParentRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class EcosystemParentRepositoryTest extends TestCase
{
    use MakeEcosystemParentTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var EcosystemParentRepository
     */
    protected $ecosystemParentRepo;

    public function setUp()
    {
        parent::setUp();
        $this->ecosystemParentRepo = App::make(EcosystemParentRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateEcosystemParent()
    {
        $ecosystemParent = $this->fakeEcosystemParentData();
        $createdEcosystemParent = $this->ecosystemParentRepo->create($ecosystemParent);
        $createdEcosystemParent = $createdEcosystemParent->toArray();
        $this->assertArrayHasKey('id', $createdEcosystemParent);
        $this->assertNotNull($createdEcosystemParent['id'], 'Created EcosystemParent must have id specified');
        $this->assertNotNull(EcosystemParent::find($createdEcosystemParent['id']), 'EcosystemParent with given id must be in DB');
        $this->assertModelData($ecosystemParent, $createdEcosystemParent);
    }

    /**
     * @test read
     */
    public function testReadEcosystemParent()
    {
        $ecosystemParent = $this->makeEcosystemParent();
        $dbEcosystemParent = $this->ecosystemParentRepo->find($ecosystemParent->id);
        $dbEcosystemParent = $dbEcosystemParent->toArray();
        $this->assertModelData($ecosystemParent->toArray(), $dbEcosystemParent);
    }

    /**
     * @test update
     */
    public function testUpdateEcosystemParent()
    {
        $ecosystemParent = $this->makeEcosystemParent();
        $fakeEcosystemParent = $this->fakeEcosystemParentData();
        $updatedEcosystemParent = $this->ecosystemParentRepo->update($fakeEcosystemParent, $ecosystemParent->id);
        $this->assertModelData($fakeEcosystemParent, $updatedEcosystemParent->toArray());
        $dbEcosystemParent = $this->ecosystemParentRepo->find($ecosystemParent->id);
        $this->assertModelData($fakeEcosystemParent, $dbEcosystemParent->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteEcosystemParent()
    {
        $ecosystemParent = $this->makeEcosystemParent();
        $resp = $this->ecosystemParentRepo->delete($ecosystemParent->id);
        $this->assertTrue($resp);
        $this->assertNull(EcosystemParent::find($ecosystemParent->id), 'EcosystemParent should not exist in DB');
    }
}
