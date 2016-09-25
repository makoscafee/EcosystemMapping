<?php

namespace App\Repositories;

use App\Models\EventInfo;
use InfyOm\Generator\Common\BaseRepository;

class EventInfoRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'event_id',
        'organization_id',
        'event_role_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return EventInfo::class;
    }
}
