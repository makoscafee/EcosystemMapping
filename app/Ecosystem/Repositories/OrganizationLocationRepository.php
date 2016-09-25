<?php

namespace App\Ecosystem\Repositories;

use App\Ecosystem\Models\OrganizationLocation;
use InfyOm\Generator\Common\BaseRepository;

class OrganizationLocationRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'organization_id',
        'location_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return OrganizationLocation::class;
    }
}
