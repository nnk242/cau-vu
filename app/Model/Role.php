<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';

    protected $fillable = ['name', 'description'];

    public $timestamps = false;

    public function Users() {
        return $this->hasMany(User::class, 'role_id', 'id');
    }
}
