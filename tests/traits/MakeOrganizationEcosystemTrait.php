<?php

use Faker\Factory as Faker;
use App\Models\OrganizationEcosystem;
use App\Repositories\OrganizationEcosystemRepository;

trait MakeOrganizationEcosystemTrait
{
    /**
     * Create fake instance of OrganizationEcosystem and save it in database
     *
     * @param array $organizationEcosystemFields
     * @return OrganizationEcosystem
     */
    public function makeOrganizationEcosystem($organizationEcosystemFields = [])
    {
        /** @var OrganizationEcosystemRepository $organizationEcosystemRepo */
        $organizationEcosystemRepo = App::make(OrganizationEcosystemRepository::class);
        $theme = $this->fakeOrganizationEcosystemData($organizationEcosystemFields);
        return $organizationEcosystemRepo->create($theme);
    }

    /**
     * Get fake instance of OrganizationEcosystem
     *
     * @param array $organizationEcosystemFields
     * @return OrganizationEcosystem
     */
    public function fakeOrganizationEcosystem($organizationEcosystemFields = [])
    {
        return new OrganizationEcosystem($this->fakeOrganizationEcosystemData($organizationEcosystemFields));
    }

    /**
     * Get fake data of OrganizationEcosystem
     *
     * @param array $postFields
     * @return array
     */
    public function fakeOrganizationEcosystemData($organizationEcosystemFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'ecosystem_id' => $fake->randomDigitNotNull,
            'organization_id' => $fake->randomDigitNotNull,
            'status' => $fake->word,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
        ], $organizationEcosystemFields);
    }
}
