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
            'created_at' => $stage->created_at,
            'updated_at' => $stage->updated_at,
            'links'     => [
                'rel' => 'self',
                'uri' => '/organizations/'.$stage->id,
            ],
        ];
    }

}
