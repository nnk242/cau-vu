<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{
    protected $table = 'seller';

    protected $fillable = ['name', 'number_phone', 'address', 'introduce', 'images'];
}
