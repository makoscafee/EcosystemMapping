<?php

namespace App\Ecosystem\Repositories;

use App\Ecosystem\Models\OrganizationEcosystem;
use InfyOm\Generator\Common\BaseRepository;

class OrganizationEcosystemRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'ecosystem_id',
        'organization_id',
        'status'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return OrganizationEcosystem::class;
    }
}
