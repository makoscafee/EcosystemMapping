<?php

use App\Models\Stage;
use App\Repositories\StageRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class StageRepositoryTest extends TestCase
{
    use MakeStageTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var StageRepository
     */
    protected $stageRepo;

    public function setUp()
    {
        parent::setUp();
        $this->stageRepo = App::make(StageRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateStage()
    {
        $stage = $this->fakeStageData();
        $createdStage = $this->stageRepo->create($stage);
        $createdStage = $createdStage->toArray();
        $this->assertArrayHasKey('id', $createdStage);
        $this->assertNotNull($createdStage['id'], 'Created Stage must have id specified');
        $this->assertNotNull(Stage::find($createdStage['id']), 'Stage with given id must be in DB');
        $this->assertModelData($stage, $createdStage);
    }

    /**
     * @test read
     */
    public function testReadStage()
    {
        $stage = $this->makeStage();
        $dbStage = $this->stageRepo->find($stage->id);
        $dbStage = $dbStage->toArray();
        $this->assertModelData($stage->toArray(), $dbStage);
    }

    /**
     * @test update
     */
    public function testUpdateStage()
    {
        $stage = $this->makeStage();
        $fakeStage = $this->fakeStageData();
        $updatedStage = $this->stageRepo->update($fakeStage, $stage->id);
        $this->assertModelData($fakeStage, $updatedStage->toArray());
        $dbStage = $this->stageRepo->find($stage->id);
        $this->assertModelData($fakeStage, $dbStage->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteStage()
    {
        $stage = $this->makeStage();
        $resp = $this->stageRepo->delete($stage->id);
        $this->assertTrue($resp);
        $this->assertNull(Stage::find($stage->id), 'Stage should not exist in DB');
    }
}
