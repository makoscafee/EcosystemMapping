<?php

use Faker\Factory as Faker;
use App\Ecosystem\Models\EcosystemParent;
use App\Ecosystem\Repositories\EcosystemParentRepository;

trait MakeEcosystemParentTrait
{
    /**
     * Create fake instance of EcosystemParent and save it in database
     *
     * @param array $ecosystemParentFields
     * @return EcosystemParent
     */
    public function makeEcosystemParent($ecosystemParentFields = [])
    {
        /** @var EcosystemParentRepository $ecosystemParentRepo */
        $ecosystemParentRepo = App::make(EcosystemParentRepository::class);
        $theme = $this->fakeEcosystemParentData($ecosystemParentFields);
        return $ecosystemParentRepo->create($theme);
    }

    /**
     * Get fake instance of EcosystemParent
     *
     * @param array $ecosystemParentFields
     * @return EcosystemParent
     */
    public function fakeEcosystemParent($ecosystemParentFields = [])
    {
        return new EcosystemParent($this->fakeEcosystemParentData($ecosystemParentFields));
    }

    /**
     * Get fake data of EcosystemParent
     *
     * @param array $postFields
     * @return array
     */
    public function fakeEcosystemParentData($ecosystemParentFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'created_at' => $fake->word,
            'updated_at' => $fake->word
        ], $ecosystemParentFields);
    }
}
