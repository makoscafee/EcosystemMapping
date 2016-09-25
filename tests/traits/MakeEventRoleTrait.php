<?php

use Faker\Factory as Faker;
use App\Ecosystem\Models\EventRole;
use App\Ecosystem\Repositories\EventRoleRepository;

trait MakeEventRoleTrait
{
    /**
     * Create fake instance of EventRole and save it in database
     *
     * @param array $eventRoleFields
     * @return EventRole
     */
    public function makeEventRole($eventRoleFields = [])
    {
        /** @var EventRoleRepository $eventRoleRepo */
        $eventRoleRepo = App::make(EventRoleRepository::class);
        $theme = $this->fakeEventRoleData($eventRoleFields);
        return $eventRoleRepo->create($theme);
    }

    /**
     * Get fake instance of EventRole
     *
     * @param array $eventRoleFields
     * @return EventRole
     */
    public function fakeEventRole($eventRoleFields = [])
    {
        return new EventRole($this->fakeEventRoleData($eventRoleFields));
    }

    /**
     * Get fake data of EventRole
     *
     * @param array $postFields
     * @return array
     */
    public function fakeEventRoleData($eventRoleFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'name' => $fake->word,
            'description' => $fake->word,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
        ], $eventRoleFields);
    }
}
