<?php

namespace App\Ecosystem\Models;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
  public function ecosystem()
  {
      return $this->belongsToMany('Ecosystem', 'organization_ecosystems');
  }
}
