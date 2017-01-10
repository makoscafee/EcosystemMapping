<?php

use Faker\Factory as Faker;
use App\Ecosystem\Models\EcoParent;
use App\Ecosystem\Repositories\ParentRepository;

trait MakeParentTrait
{
    /**
     * Create fake instance of Parent and save it in database
     *
     * @param array $parentFields
     * @return Parent
     */
    public function makeParent($parentFields = [])
    {
        /** @var ParentRepository $parentRepo */
        $parentRepo = App::make(ParentRepository::class);
        $theme = $this->fakeParentData($parentFields);
        return $parentRepo->create($theme);
    }

    /**
     * Get fake instance of Parent
     *
     * @param array $parentFields
     * @return Parent
     */
    public function fakeParent($parentFields = [])
    {
        return new Parent($this->fakeParentData($parentFields));
    }

    /**
     * Get fake data of Parent
     *
     * @param array $postFields
     * @return array
     */
    public function fakeParentData($parentFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
        ], $parentFields);
    }
}
