<?php

namespace App\Ecosystem\Repositories;

use App\Ecosystem\Models\Stage;
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
