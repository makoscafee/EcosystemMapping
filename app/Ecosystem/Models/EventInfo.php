<?php

namespace App\Ecosystem\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class EventInfo
 * @package App\Models
 * @version September 25, 2016, 6:03 pm UTC
 */
class EventInfo extends Model
{
    use SoftDeletes;

    public $table = 'event_infos';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $dates = ['deleted_at'];


    public $fillable = [
        'event_id',
        'organization_id',
        'event_role_id'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'event_id' => 'integer',
        'organization_id' => 'integer',
        'event_role_id' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [

    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function event()
    {
        return $this->belongsTo(\App\Ecosystem\Models\Event::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function eventRole()
    {
        return $this->belongsTo(\App\Ecosystem\Models\EventRole::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function organization()
    {
        return $this->belongsTo(\App\Ecosystem\Models\Organization::class);
    }
}
