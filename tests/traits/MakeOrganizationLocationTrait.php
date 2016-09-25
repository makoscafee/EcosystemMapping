<?php

use Faker\Factory as Faker;
use App\Models\OrganizationLocation;
use App\Repositories\OrganizationLocationRepository;

trait MakeOrganizationLocationTrait
{
    /**
     * Create fake instance of OrganizationLocation and save it in database
     *
     * @param array $organizationLocationFields
     * @return OrganizationLocation
     */
    public function makeOrganizationLocation($organizationLocationFields = [])
    {
        /** @var OrganizationLocationRepository $organizationLocationRepo */
        $organizationLocationRepo = App::make(OrganizationLocationRepository::class);
        $theme = $this->fakeOrganizationLocationData($organizationLocationFields);
        return $organizationLocationRepo->create($theme);
    }

    /**
     * Get fake instance of OrganizationLocation
     *
     * @param array $organizationLocationFields
     * @return OrganizationLocation
     */
    public function fakeOrganizationLocation($organizationLocationFields = [])
    {
        return new OrganizationLocation($this->fakeOrganizationLocationData($organizationLocationFields));
    }

    /**
     * Get fake data of OrganizationLocation
     *
     * @param array $postFields
     * @return array
     */
    public function fakeOrganizationLocationData($organizationLocationFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'organization_id' => $fake->randomDigitNotNull,
            'location_id' => $fake->randomDigitNotNull,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
        ], $organizationLocationFields);
    }
}
