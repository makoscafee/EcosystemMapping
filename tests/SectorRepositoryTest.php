<?php

use App\Ecosystem\Models\Sector;
use App\Ecosystem\Repositories\SectorRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class SectorRepositoryTest extends TestCase
{
    use MakeSectorTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var SectorRepository
     */
    protected $sectorRepo;

    public function setUp()
    {
        parent::setUp();
        $this->sectorRepo = App::make(SectorRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateSector()
    {
        $sector = $this->fakeSectorData();
        $createdSector = $this->sectorRepo->create($sector);
        $createdSector = $createdSector->toArray();
        $this->assertArrayHasKey('id', $createdSector);
        $this->assertNotNull($createdSector['id'], 'Created Sector must have id specified');
        $this->assertNotNull(Sector::find($createdSector['id']), 'Sector with given id must be in DB');
        $this->assertModelData($sector, $createdSector);
    }

    /**
     * @test read
     */
    public function testReadSector()
    {
        $sector = $this->makeSector();
        $dbSector = $this->sectorRepo->find($sector->id);
        $dbSector = $dbSector->toArray();
        $this->assertModelData($sector->toArray(), $dbSector);
    }

    /**
     * @test update
     */
    public function testUpdateSector()
    {
        $sector = $this->makeSector();
        $fakeSector = $this->fakeSectorData();
        $updatedSector = $this->sectorRepo->update($fakeSector, $sector->id);
        $this->assertModelData($fakeSector, $updatedSector->toArray());
        $dbSector = $this->sectorRepo->find($sector->id);
        $this->assertModelData($fakeSector, $dbSector->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteSector()
    {
        $sector = $this->makeSector();
        $resp = $this->sectorRepo->delete($sector->id);
        $this->assertTrue($resp);
        $this->assertNull(Sector::find($sector->id), 'Sector should not exist in DB');
    }
}
