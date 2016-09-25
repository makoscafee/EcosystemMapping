<?php

use Faker\Factory as Faker;
use App\Ecosystem\Models\Ecosystem;
use App\Ecosystem\Repositories\EcosystemRepository;

trait MakeEcosystemTrait
{
    /**
     * Create fake instance of Ecosystem and save it in database
     *
     * @param array $ecosystemFields
     * @return Ecosystem
     */
    public function makeEcosystem($ecosystemFields = [])
    {
        /** @var EcosystemRepository $ecosystemRepo */
        $ecosystemRepo = App::make(EcosystemRepository::class);
        $theme = $this->fakeEcosystemData($ecosystemFields);
        return $ecosystemRepo->create($theme);
    }

    /**
     * Get fake instance of Ecosystem
     *
     * @param array $ecosystemFields
     * @return Ecosystem
     */
    public function fakeEcosystem($ecosystemFields = [])
    {
        return new Ecosystem($this->fakeEcosystemData($ecosystemFields));
    }

    /**
     * Get fake data of Ecosystem
     *
     * @param array $postFields
     * @return array
     */
    public function fakeEcosystemData($ecosystemFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'name' => $fake->word,
            'edition' => $fake->word,
            'ecosystem_parent_id' => $fake->randomDigitNotNull,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
        ], $ecosystemFields);
    }
}
