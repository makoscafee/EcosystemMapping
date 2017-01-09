<?php

namespace App\Ecosystem\Transformer;

use League\Fractal\TransformerAbstract;
use App\Ecosystem\Models\Sector;
use DB;

class SectorTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes      = [];
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes    = [];

    /**
     * @param User $user
     * @return array
     */
    public function transform(Sector $sector)
    {
        return [
            'id'        => (int) $sector->id,
            'name'      => $sector->name,
            'description'     => $sector->description,
            'links'     => [
                'rel' => 'self',
                'uri' => '/organizations/'.$sector->id,
            ],
        ];
    }

}
