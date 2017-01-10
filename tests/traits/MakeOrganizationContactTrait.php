<?php

use Faker\Factory as Faker;
use App\Ecosystem\Models\OrganizationContact;
use App\Ecosystem\Repositories\OrganizationContactRepository;

trait MakeOrganizationContactTrait
{
    /**
     * Create fake instance of OrganizationContact and save it in database
     *
     * @param array $organizationContactFields
     * @return OrganizationContact
     */
    public function makeOrganizationContact($organizationContactFields = [])
    {
        /** @var OrganizationContactRepository $organizationContactRepo */
        $organizationContactRepo = App::make(OrganizationContactRepository::class);
        $theme = $this->fakeOrganizationContactData($organizationContactFields);
        return $organizationContactRepo->create($theme);
    }

    /**
     * Get fake instance of OrganizationContact
     *
     * @param array $organizationContactFields
     * @return OrganizationContact
     */
    public function fakeOrganizationContact($organizationContactFields = [])
    {
        return new OrganizationContact($this->fakeOrganizationContactData($organizationContactFields));
    }

    /**
     * Get fake data of OrganizationContact
     *
     * @param array $postFields
     * @return array
     */
    public function fakeOrganizationContactData($organizationContactFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'organization_id' => $fake->randomDigitNotNull,
            'contact_id' => $fake->randomDigitNotNull,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
        ], $organizationContactFields);
    }
}
