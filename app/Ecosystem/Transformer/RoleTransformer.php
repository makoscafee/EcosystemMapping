<?php

namespace App\Ecosystem\Transformer;

use League\Fractal\TransformerAbstract;
use App\Ecosystem\Models\Role;
use DB;

class RoleTransformer extends TransformerAbstract
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
    public function transform(Role $role)
    {
        return [
            'id'        => (int) $role->id,
            'name'      => $role->name,
            'description'     => $role->description,
            'created_at' => $role->created_at,
            'updated_at' => $role->updated_at,
            'links'     => [
                'rel' => 'self',
                'uri' => '/organizations/'.$role->id,
            ],
        ];
    }

}
