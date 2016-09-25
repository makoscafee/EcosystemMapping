<?php

namespace App\Ecosystem\Repositories;

use App\Ecosystem\Models\EcosystemParent;
use InfyOm\Generator\Common\BaseRepository;

class EcosystemParentRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return EcosystemParent::class;
    }
}
