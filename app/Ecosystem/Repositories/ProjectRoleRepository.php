<?php

namespace App\Ecosystem\Repositories;

use App\Ecosystem\Models\ProjectRole;
use InfyOm\Generator\Common\BaseRepository;

class ProjectRoleRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'description'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return ProjectRole::class;
    }
}
