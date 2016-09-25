<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Organization
 * @package App\Models
 * @version September 25, 2016, 6:05 pm UTC
 */
class Organization extends Model
{
    use SoftDeletes;

    public $table = 'organizations';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];


    public $fillable = [
        'parent_id',
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
        'parent_id' => 'integer',
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
        return $this->belongsTo(\App\Models\Parent::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function eventInfos()
    {
        return $this->hasMany(\App\Models\EventInfo::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function organizationContacts()
    {
        return $this->hasMany(\App\Models\OrganizationContact::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function organizationEcosystems()
    {
        return $this->hasMany(\App\Models\OrganizationEcosystem::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function organizationLocations()
    {
        return $this->hasMany(\App\Models\OrganizationLocation::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function organizationRoles()
    {
        return $this->hasMany(\App\Models\OrganizationRole::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function organizationSectors()
    {
        return $this->hasMany(\App\Models\OrganizationSector::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function organizationStages()
    {
        return $this->hasMany(\App\Models\OrganizationStage::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function projectInfos()
    {
        return $this->hasMany(\App\Models\ProjectInfo::class);
    }
}
