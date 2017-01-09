<?php

use Faker\Factory as Faker;
use App\Ecosystem\Models\ProjectRole;
use App\Ecosystem\Repositories\ProjectRoleRepository;

trait MakeProjectRoleTrait
{
    /**
     * Create fake instance of ProjectRole and save it in database
     *
     * @param array $projectRoleFields
     * @return ProjectRole
     */
    public function makeProjectRole($projectRoleFields = [])
    {
        /** @var ProjectRoleRepository $projectRoleRepo */
        $projectRoleRepo = App::make(ProjectRoleRepository::class);
        $theme = $this->fakeProjectRoleData($projectRoleFields);
        return $projectRoleRepo->create($theme);
    }

    /**
     * Get fake instance of ProjectRole
     *
     * @param array $projectRoleFields
     * @return ProjectRole
     */
    public function fakeProjectRole($projectRoleFields = [])
    {
        return new ProjectRole($this->fakeProjectRoleData($projectRoleFields));
    }

    /**
     * Get fake data of ProjectRole
     *
     * @param array $postFields
     * @return array
     */
    public function fakeProjectRoleData($projectRoleFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'name' => $fake->word,
            'description' => $fake->word,
            'created_at' => $fake->date('Y-m-d H:i:s'),
            'updated_at' => $fake->date('Y-m-d H:i:s')
        ], $projectRoleFields);
    }
}
