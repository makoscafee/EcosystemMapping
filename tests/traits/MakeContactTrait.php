<?php

use Faker\Factory as Faker;
use App\Models\Contact;
use App\Repositories\ContactRepository;

trait MakeContactTrait
{
    /**
     * Create fake instance of Contact and save it in database
     *
     * @param array $contactFields
     * @return Contact
     */
    public function makeContact($contactFields = [])
    {
        /** @var ContactRepository $contactRepo */
        $contactRepo = App::make(ContactRepository::class);
        $theme = $this->fakeContactData($contactFields);
        return $contactRepo->create($theme);
    }

    /**
     * Get fake instance of Contact
     *
     * @param array $contactFields
     * @return Contact
     */
    public function fakeContact($contactFields = [])
    {
        return new Contact($this->fakeContactData($contactFields));
    }

    /**
     * Get fake data of Contact
     *
     * @param array $postFields
     * @return array
     */
    public function fakeContactData($contactFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'email' => $fake->word,
            'phone_number' => $fake->randomDigitNotNull,
            'website' => $fake->word,
            'facebook' => $fake->word,
            'twitter' => $fake->word,
            'instagram' => $fake->word,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
        ], $contactFields);
    }
}
