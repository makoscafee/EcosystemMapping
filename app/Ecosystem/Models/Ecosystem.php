<?php

namespace App\Ecosystem\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Ecosystem
 * @package App\Models
 * @version September 25, 2016, 5:52 pm UTC
 */
class Ecosystem extends Model
{
    use SoftDeletes;

    public $table = 'ecosystems';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $dates = ['deleted_at'];

    public $fillable = [
        'name',
        'edition',
        'ecosystem_parent_id'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'edition' => 'string',
        'ecosystem_parent_id' => 'integer'
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
        return $this->belongsTo('App\Ecosystem\Models\Parent', 'ecosystem_parent_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function organizations()
    {
        return $this->belongsToMany('App\Ecosystem\Models\Organization', 'organization_ecosystems', 'ecosystem_id', 'organization_id')->withPivot('status')->withTimestamps();
    }
}
