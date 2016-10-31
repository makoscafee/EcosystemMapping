<?php

namespace App\Ecosystem\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Organization
 * @package App\Ecosystem\Models
 * @version September 25, 2016, 6:05 pm UTC
 */
class Organization extends Model
{
    use SoftDeletes;

    public $table = 'organizations';

    const CREATED_AT = 'created_at';

    protected $dates = ['deleted_at'];


    public $fillable = [
        'ecosystem_parent_id',
        'name',
        'description',
        'date_founded',
        'date_registered',
        'tin_number'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'ecosystem_parent_id' => 'integer',
        'name' => 'string',
        'description' => 'string',
        'date_founded' => 'date',
        'date_registered' => 'date',
        'tin_number' => 'string'
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
    public function parent()
    {
        return $this->belongsTo(\App\Ecosystem\Models\Parent::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function events()
    {
        return $this->belongsToMany(\App\Ecosystem\Models\Event::class, 'event_infos')->withTimestamps();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function contacts()
    {
        return $this->belongsToMany(\App\Ecosystem\Models\Contact::class, 'organization_contacts')->withTimestamps();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     **/
    public function ecosystem()
    {
        return $this->belongsToMany(\App\Ecosystem\Models\Ecosystem::class, 'organization_ecosystems')->withPivot('status')->withTimestamps();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function locations()
    {
        return $this->belongsToMany(\App\Ecosystem\Models\Location::class, 'organization_locations')->withTimestamps();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function roles()
    {
        return $this->belongsToMany(\App\Ecosystem\Models\Role::class, 'organization_roles')->withTimestamps();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function sectors()
    {
        return $this->belongsToMany(\App\Ecosystem\Models\Sector::class, 'organization_sectors')->withTimestamps();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function stages()
    {
        return $this->belongsToMany(\App\Ecosystem\Models\Stage::class, 'organization_stages')->withTimestamps();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function projects()
    {
        return $this->belongsToMany(\App\Ecosystem\Models\Project::class, 'project_infos')->withTimestamps();
    }

}
