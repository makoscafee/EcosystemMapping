<?php

use Faker\Factory as Faker;
use App\Models\EventInfo;
use App\Repositories\EventInfoRepository;

trait MakeEventInfoTrait
{
    /**
     * Create fake instance of EventInfo and save it in database
     *
     * @param array $eventInfoFields
     * @return EventInfo
     */
    public function makeEventInfo($eventInfoFields = [])
    {
        /** @var EventInfoRepository $eventInfoRepo */
        $eventInfoRepo = App::make(EventInfoRepository::class);
        $theme = $this->fakeEventInfoData($eventInfoFields);
        return $eventInfoRepo->create($theme);
    }

    /**
     * Get fake instance of EventInfo
     *
     * @param array $eventInfoFields
     * @return EventInfo
     */
    public function fakeEventInfo($eventInfoFields = [])
    {
        return new EventInfo($this->fakeEventInfoData($eventInfoFields));
    }

    /**
     * Get fake data of EventInfo
     *
     * @param array $postFields
     * @return array
     */
    public function fakeEventInfoData($eventInfoFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'event_id' => $fake->randomDigitNotNull,
            'organization_id' => $fake->randomDigitNotNull,
            'event_role_id' => $fake->randomDigitNotNull,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
        ], $eventInfoFields);
    }
}
