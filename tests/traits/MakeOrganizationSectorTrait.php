<?php

use Faker\Factory as Faker;
use App\Ecosystem\Models\OrganizationSector;
use App\Ecosystem\Repositories\OrganizationSectorRepository;

trait MakeOrganizationSectorTrait
{
    /**
     * Create fake instance of OrganizationSector and save it in database
     *
     * @param array $organizationSectorFields
     * @return OrganizationSector
     */
    public function makeOrganizationSector($organizationSectorFields = [])
    {
        /** @var OrganizationSectorRepository $organizationSectorRepo */
        $organizationSectorRepo = App::make(OrganizationSectorRepository::class);
        $theme = $this->fakeOrganizationSectorData($organizationSectorFields);
        return $organizationSectorRepo->create($theme);
    }

    /**
     * Get fake instance of OrganizationSector
     *
     * @param array $organizationSectorFields
     * @return OrganizationSector
     */
    public function fakeOrganizationSector($organizationSectorFields = [])
    {
        return new OrganizationSector($this->fakeOrganizationSectorData($organizationSectorFields));
    }

    /**
     * Get fake data of OrganizationSector
     *
     * @param array $postFields
     * @return array
     */
    public function fakeOrganizationSectorData($organizationSectorFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'organization_id' => $fake->randomDigitNotNull,
            'sector_id' => $fake->randomDigitNotNull,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
        ], $organizationSectorFields);
    }
}
