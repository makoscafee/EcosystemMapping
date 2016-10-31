<?php

namespace App\Ecosystem\Transformer;

use League\Fractal\TransformerAbstract;
use App\Ecosystem\Models\Project;
use DB;

class ProjectTransformer extends TransformerAbstract
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
    public function transform(Project $project)
    {
        return [
            'id'        => (int) $project->id,
            'name'      => $project->name,
            'description'    => $project->description,
            'start_date' => $project->start_date,
            'end_date' => $project->end_date,
            'links'     => [
                'rel' => 'self',
                'uri' => '/projects/'.$location->id,
            ],
        ];
    }

}
