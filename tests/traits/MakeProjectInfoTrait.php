<?php

use Faker\Factory as Faker;
use App\Ecosystem\Models\ProjectInfo;
use App\Ecosystem\Repositories\ProjectInfoRepository;

trait MakeProjectInfoTrait
{
    /**
     * Create fake instance of ProjectInfo and save it in database
     *
     * @param array $projectInfoFields
     * @return ProjectInfo
     */
    public function makeProjectInfo($projectInfoFields = [])
    {
        /** @var ProjectInfoRepository $projectInfoRepo */
        $projectInfoRepo = App::make(ProjectInfoRepository::class);
        $theme = $this->fakeProjectInfoData($projectInfoFields);
        return $projectInfoRepo->create($theme);
    }

    /**
     * Get fake instance of ProjectInfo
     *
     * @param array $projectInfoFields
     * @return ProjectInfo
     */
    public function fakeProjectInfo($projectInfoFields = [])
    {
        return new ProjectInfo($this->fakeProjectInfoData($projectInfoFields));
    }

    /**
     * Get fake data of ProjectInfo
     *
     * @param array $postFields
     * @return array
     */
    public function fakeProjectInfoData($projectInfoFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'organization_id' => $fake->randomDigitNotNull,
            'project_id' => $fake->randomDigitNotNull,
            'project_role_id' => $fake->randomDigitNotNull,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
        ], $projectInfoFields);
    }
}
