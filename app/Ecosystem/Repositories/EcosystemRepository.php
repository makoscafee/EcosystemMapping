<?php

namespace App\Repositories;

use App\Models\Ecosystem;
use InfyOm\Generator\Common\BaseRepository;

class EcosystemRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'edition',
        'parent_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Ecosystem::class;
    }
}
