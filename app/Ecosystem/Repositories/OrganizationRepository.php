<?php

namespace App\Repositories;

use App\Models\Organization;
use InfyOm\Generator\Common\BaseRepository;

class OrganizationRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'parent_id',
        'name',
        'description',
        'date_founded',
        'date_registered',
        'tin_number'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Organization::class;
    }
}
