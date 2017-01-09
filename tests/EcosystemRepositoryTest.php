<?php

use App\Ecosystem\Models\Ecosystem;
use App\Ecosystem\Repositories\EcosystemRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class EcosystemRepositoryTest extends TestCase
{
    use MakeEcosystemTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var EcosystemRepository
     */
    protected $ecosystemRepo;

    public function setUp()
    {
        parent::setUp();
        $this->ecosystemRepo = App::make(EcosystemRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateEcosystem()
    {
        $ecosystem = $this->fakeEcosystemData();
        $createdEcosystem = $this->ecosystemRepo->create($ecosystem);
        $createdEcosystem = $createdEcosystem->toArray();
        $this->assertArrayHasKey('id', $createdEcosystem);
        $this->assertNotNull($createdEcosystem['id'], 'Created Ecosystem must have id specified');
        $this->assertNotNull(Ecosystem::find($createdEcosystem['id']), 'Ecosystem with given id must be in DB');
        $this->assertModelData($ecosystem, $createdEcosystem);
    }

    /**
     * @test read
     */
    public function testReadEcosystem()
    {
        $ecosystem = $this->makeEcosystem();
        $dbEcosystem = $this->ecosystemRepo->find($ecosystem->id);
        $dbEcosystem = $dbEcosystem->toArray();
        $this->assertModelData($ecosystem->toArray(), $dbEcosystem);
    }

    /**
     * @test update
     */
    public function testUpdateEcosystem()
    {
        $ecosystem = $this->makeEcosystem();
        $fakeEcosystem = $this->fakeEcosystemData();
        $updatedEcosystem = $this->ecosystemRepo->update($fakeEcosystem, $ecosystem->id);
        $this->assertModelData($fakeEcosystem, $updatedEcosystem->toArray());
        $dbEcosystem = $this->ecosystemRepo->find($ecosystem->id);
        $this->assertModelData($fakeEcosystem, $dbEcosystem->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteEcosystem()
    {
        $ecosystem = $this->makeEcosystem();
        $resp = $this->ecosystemRepo->delete($ecosystem->id);
        $this->assertTrue($resp);
        $this->assertNull(Ecosystem::find($ecosystem->id), 'Ecosystem should not exist in DB');
    }
}
