<?php

namespace App\Repositories;

use App\Models\OrganizationRole;
use InfyOm\Generator\Common\BaseRepository;

class OrganizationRoleRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'organization_id',
        'role_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return OrganizationRole::class;
    }
}
