<?php

namespace App\Repositories;

use App\Models\Sector;
use InfyOm\Generator\Common\BaseRepository;

class SectorRepository extends BaseRepository
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
        return Sector::class;
    }
}
