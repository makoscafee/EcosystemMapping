<?php

namespace App\Repositories;

use App\Models\Stage;
use InfyOm\Generator\Common\BaseRepository;

class StageRepository extends BaseRepository
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
        return Stage::class;
    }
}
