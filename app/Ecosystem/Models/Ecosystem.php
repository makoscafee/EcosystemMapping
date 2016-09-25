<?php

namespace App\Ecosystem\Models;

use Illuminate\Database\Eloquent\Model;

class Ecosystem extends Model
{
  public function organization()
  {
      return $this->belongsToMany('Organization', 'organization_ecosystems');
  }

}
