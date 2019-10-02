<?php

namespace App\Http\Controllers\Frontend;

use App\Model\Category;
use App\Model\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $new_products = Product::orderby('id', 'DESC')->take(10)->get();
        return view('frontend.index', compact('categories', 'new_products'));
    }

    public function category($name_unicode)
    {
        if ($name_unicode === 'khac.hv') {
            $products = Product::select('products.*')
                ->leftJoin('category_product', function ($join) {
                    $join->on('category_product.product_id', '=', 'products.id');
                })
                ->paginate(10);
            return view('frontend.category', compact('products'));
        } else {
            $category = Category::wherename_unicode($name_unicode)->firstorfail();
            $products = Product::select('products.*')
                ->where('category_product.category_id', $category->id)
                ->join('category_product', 'category_product.product_id', '=', 'products.id')
                ->paginate(10);
        }
        return view('frontend.category', compact('products'));
    }
}
