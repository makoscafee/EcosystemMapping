<?php

use Faker\Factory as Faker;
use App\Models\OrganizationRole;
use App\Repositories\OrganizationRoleRepository;

trait MakeOrganizationRoleTrait
{
    /**
     * Create fake instance of OrganizationRole and save it in database
     *
     * @param array $organizationRoleFields
     * @return OrganizationRole
     */
    public function makeOrganizationRole($organizationRoleFields = [])
    {
        /** @var OrganizationRoleRepository $organizationRoleRepo */
        $organizationRoleRepo = App::make(OrganizationRoleRepository::class);
        $theme = $this->fakeOrganizationRoleData($organizationRoleFields);
        return $organizationRoleRepo->create($theme);
    }

    /**
     * Get fake instance of OrganizationRole
     *
     * @param array $organizationRoleFields
     * @return OrganizationRole
     */
    public function fakeOrganizationRole($organizationRoleFields = [])
    {
        return new OrganizationRole($this->fakeOrganizationRoleData($organizationRoleFields));
    }

    /**
     * Get fake data of OrganizationRole
     *
     * @param array $postFields
     * @return array
     */
    public function fakeOrganizationRoleData($organizationRoleFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'organization_id' => $fake->randomDigitNotNull,
            'role_id' => $fake->randomDigitNotNull,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
        ], $organizationRoleFields);
    }
}
