<?php

use Faker\Factory as Faker;
use App\Ecosystem\Models\OrganizationStage;
use App\Ecosystem\Repositories\OrganizationStageRepository;

trait MakeOrganizationStageTrait
{
    /**
     * Create fake instance of OrganizationStage and save it in database
     *
     * @param array $organizationStageFields
     * @return OrganizationStage
     */
    public function makeOrganizationStage($organizationStageFields = [])
    {
        /** @var OrganizationStageRepository $organizationStageRepo */
        $organizationStageRepo = App::make(OrganizationStageRepository::class);
        $theme = $this->fakeOrganizationStageData($organizationStageFields);
        return $organizationStageRepo->create($theme);
    }

    /**
     * Get fake instance of OrganizationStage
     *
     * @param array $organizationStageFields
     * @return OrganizationStage
     */
    public function fakeOrganizationStage($organizationStageFields = [])
    {
        return new OrganizationStage($this->fakeOrganizationStageData($organizationStageFields));
    }

    /**
     * Get fake data of OrganizationStage
     *
     * @param array $postFields
     * @return array
     */
    public function fakeOrganizationStageData($organizationStageFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'organization_id' => $fake->randomDigitNotNull,
            'stage_id' => $fake->randomDigitNotNull,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
        ], $organizationStageFields);
    }
}
