<?php

namespace App\Repositories;

use App\Models\OrganizationStage;
use InfyOm\Generator\Common\BaseRepository;

class OrganizationStageRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'organization_id',
        'stage_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return OrganizationStage::class;
    }
}
