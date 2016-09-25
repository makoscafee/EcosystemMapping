<?php

namespace App\Repositories;

use App\Models\ProjectRole;
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
