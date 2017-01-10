<?php

namespace App\Ecosystem\Repositories;

use App\Ecosystem\Models\OrganizationSector;
use InfyOm\Generator\Common\BaseRepository;

class OrganizationSectorRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'organization_id',
        'sector_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return OrganizationSector::class;
    }
}
