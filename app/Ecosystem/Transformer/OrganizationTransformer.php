<?php

namespace App\Ecosystem\Transformer;

use League\Fractal\TransformerAbstract;
use League\Fractal\Resource\Item;
use App\Ecosystem\Models\Organization;
use DB;

class OrganizationTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes      = ['sectors', 'roles', 'stages', 'locations','projects', 'events'];
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes    = [
        'sectors',
        'roles',
        'stages',
        'locations',
        'projects',
        'events'
    ];

    /**
     * @param Organization $organization
     * @return array
     */
    public function transform(Organization $organization)
    {
        return [
            'id'        => (int) $organization->id,
            'name'      => $organization->name,
            'description'     => $organization->description,
            'date_founded' => $organization->date_founded,
            'date_registered' => $organization->date_registered,
            'tin_number' => $organization->tin_number,
            'links'     => [
                'rel' => 'self',
                'uri' => '/organizations/'.$organization->id,
            ],
        ];
    }

    /**
     * Include Sector
     *
     * @param Organization $organization
     * @return \League\Fractal\Resource\Item
     */
    public function includeSectors(Organization $organization)
    {
        $sector = $organization->sectors;

        return $this->collection($sector, new SectorTransformer);
    }

    /**
     *Include Stages
     *
     * @param Organization $organization
     * @return \League\Fractal\Resource\Item
     */
    public function includeStages(Organization $organization)
    {
        $stage = $organization->stages;

        return $this->collection($stage, new StageTransformer);
    }

    /**
     * Include Roles
     *
     * @param Organization $organization
     * @return \League\Fractal\Resource\Item
     */
    public function includeRoles(Organization $organization)
    {
        $roles = $organization->roles;

        return $this->collection($roles, new RoleTransformer);
    }

    /**
     * Include Locations
     *
     * @param Organization $organization
     * @return \League\Fractal\Resource\Item
     */
    public function includeLocations(Organization $organization)
    {
        $locations = $organization->locations;

        return $this->collection($locations, new LocationTransformer);
    }

    /**
     * Include Projects
     *
     * @param Organization $organization
     * @return \League\Fractal\Resource\Item
     */
    public function includeProjects(Organization $organization)
    {
        $projects = $organization->projects;

        return $this->collection($projects, new ProjectTransformer);
    }

    /**
     * Include Events
     *
     * @param Organization $organization
     * @return \League\Fractal\Resource\Item
     */
    public function includeEvents(Organization $organization)
    {
        $events = $organization->events;

        return $this->collection($events, new EventTransformer);
    }

}
