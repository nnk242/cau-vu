<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    protected $fillable = ['name', 'name_unicode', 'description', 'images', 'user_id',
        'price', 'promotion_price', 'time_begin', 'time_end', 'status', 'type'
        ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
