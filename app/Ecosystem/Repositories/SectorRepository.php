<?php

namespace App\Ecosystem\Repositories;

use App\Ecosystem\Models\Sector;
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
