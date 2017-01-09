<?php

namespace App\Ecosystem\Models;

use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{
    protected $fillable = ['email', 'token'];

    public function setUpdatedAtAttribute($value)
    {
        // to disable updated_at
    }
}
