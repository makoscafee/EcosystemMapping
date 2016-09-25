<?php

namespace App\Ecosystem\Repositories;

use App\Ecosystem\Models\OrganizationRole;
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
