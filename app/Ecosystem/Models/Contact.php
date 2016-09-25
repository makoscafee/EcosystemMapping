<?php

namespace App\Ecosystem\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Contact
 * @package App\Models
 * @version September 25, 2016, 6:19 pm UTC
 */
class Contact extends Model
{
    use SoftDeletes;

    public $table = 'contacts';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $dates = ['deleted_at'];


    public $fillable = [
        'email',
        'phone_number',
        'website',
        'facebook',
        'twitter',
        'instagram'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'email' => 'string',
        'phone_number' => 'float',
        'website' => 'string',
        'facebook' => 'string',
        'twitter' => 'string',
        'instagram' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [

    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function organizationContacts()
    {
        return $this->hasMany(\App\Models\OrganizationContact::class);
    }
}
