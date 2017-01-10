<?php

namespace App\Ecosystem\Repositories;

use App\Ecosystem\Models\Organization;
use InfyOm\Generator\Common\BaseRepository;

class OrganizationRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'ecosystem_parent_id',
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
