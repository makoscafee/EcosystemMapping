<?php

namespace App\Ecosystem\Transformer;

use League\Fractal\TransformerAbstract;
use App\Ecosystem\Models\Event;

class EventTransformer extends TransformerAbstract
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
     * @param Event $event
     * @return array
     */
    public function transform(Event $event)
    {
        return [
            'id'        => (int) $event->id,
            'name'      => $event->name,
            'description'     => $event->description,
            'start_date' => $event->start_date,
            'end_date'  => $event->end_date,
            'links'     => [
                'rel' => 'self',
                'uri' => '/events/'.$event->id,
            ],
        ];
    }

}
