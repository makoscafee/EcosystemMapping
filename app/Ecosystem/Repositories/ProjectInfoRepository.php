<?php

namespace App\Ecosystem\Repositories;

use App\Ecosystem\Models\ProjectInfo;
use InfyOm\Generator\Common\BaseRepository;

class ProjectInfoRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'organization_id',
        'project_id',
        'project_role_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return ProjectInfo::class;
    }
}
