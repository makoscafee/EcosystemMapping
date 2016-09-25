<?php

namespace App\Ecosystem\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class EcosystemParent
 * @package App\Ecosystem\Models
 * @version September 25, 2016, 8:44 pm UTC
 */
class EcosystemParent extends Model
{
    use SoftDeletes;

    public $table = 'ecosystem_parents';
    

    protected $dates = ['deleted_at'];


    public $fillable = [
        
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    
}
