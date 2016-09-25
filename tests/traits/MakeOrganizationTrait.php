<?php

use Faker\Factory as Faker;
use App\Models\Organization;
use App\Repositories\OrganizationRepository;

trait MakeOrganizationTrait
{
    /**
     * Create fake instance of Organization and save it in database
     *
     * @param array $organizationFields
     * @return Organization
     */
    public function makeOrganization($organizationFields = [])
    {
        /** @var OrganizationRepository $organizationRepo */
        $organizationRepo = App::make(OrganizationRepository::class);
        $theme = $this->fakeOrganizationData($organizationFields);
        return $organizationRepo->create($theme);
    }

    /**
     * Get fake instance of Organization
     *
     * @param array $organizationFields
     * @return Organization
     */
    public function fakeOrganization($organizationFields = [])
    {
        return new Organization($this->fakeOrganizationData($organizationFields));
    }

    /**
     * Get fake data of Organization
     *
     * @param array $postFields
     * @return array
     */
    public function fakeOrganizationData($organizationFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'parent_id' => $fake->randomDigitNotNull,
            'name' => $fake->word,
            'description' => $fake->word,
            'date_founded' => $fake->word,
            'date_registered' => $fake->word,
            'tin_number' => $fake->word,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
        ], $organizationFields);
    }
}
