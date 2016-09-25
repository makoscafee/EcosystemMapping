<?php

namespace App\Repositories;

use App\Models\OrganizationContact;
use InfyOm\Generator\Common\BaseRepository;

class OrganizationContactRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'organization_id',
        'contact_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return OrganizationContact::class;
    }
}
