<?php

namespace App\Ecosystem\Transformer;

use League\Fractal\TransformerAbstract;
use App\Ecosystem\Models\Stage;
use DB;

class StageTransformer extends TransformerAbstract
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
    public function transform(Stage $stage)
    {
        return [
            'id'        => (int) $stage->id,
            'name'      => $stage->name,
            'description'     => $stage->description,
            'links'     => [
                'rel' => 'self',
                'uri' => '/organizations/'.$stage->id,
            ],
        ];
    }

}
