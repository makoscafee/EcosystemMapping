<?php

namespace App\Ecosystem\Repositories;

use App\Ecosystem\Models\EventRole;
use InfyOm\Generator\Common\BaseRepository;

class EventRoleRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'description'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return EventRole::class;
    }
}
