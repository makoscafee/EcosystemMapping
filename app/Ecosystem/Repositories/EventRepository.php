<?php

namespace App\Repositories;

use App\Models\Event;
use InfyOm\Generator\Common\BaseRepository;

class EventRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'description',
        'start_date',
        'end_date'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Event::class;
    }
}
