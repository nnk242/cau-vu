<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SellerProduct extends Model
{
    protected $table = 'category_products';

    protected $fillable = ['seller_id', 'product_id'];

    public function seller()
    {
        return $this->belongsTo(Seller::class, 'category_id', 'id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }
}
