<?php

namespace App\Ecosystem\Transformer;

use League\Fractal\TransformerAbstract;
use App\Ecosystem\Models\Location;
use DB;

class LocationTransformer extends TransformerAbstract
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
    public function transform(Location $location)
    {
        return [
            'id'        => (int) $location->id,
            'lat'      => $location->lat,
            'long'     => $location->long,
            'links'     => [
                'rel' => 'self',
                'uri' => '/locations/'.$location->id,
            ],
        ];
    }

}
