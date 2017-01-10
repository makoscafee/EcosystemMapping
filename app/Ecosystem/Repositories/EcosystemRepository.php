<?php

namespace App\Ecosystem\Repositories;

use App\Ecosystem\Models\Ecosystem;
use InfyOm\Generator\Common\BaseRepository;

class EcosystemRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'edition',
        'ecosystem_parent_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Ecosystem::class;
    }
}
