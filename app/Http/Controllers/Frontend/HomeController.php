<?php

namespace App\Http\Controllers\Frontend;

use App\Model\Category;
use App\Model\CategoryProduct;
use App\Model\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $slides = Product::wheretype('slide')->get();
        $new_products = Product::where('type', '!=', 'slide')->wherestatus(1)->orderby('id', 'DESC')->take(10)->get();
        $products = Product::orderby('id', 'DESC')->wherestatus(1)->paginate(10);
        return view('frontend.index', compact('categories', 'new_products', 'slides', 'products'));
    }

    public function category($name_unicode)
    {
        if ($name_unicode === 'khac.hv') {
            $products = Product::select('products.*')
                ->where('products.status', 1)
                ->leftJoin('category_products', function ($join) {
                    $join->on('category_products.product_id', '=', 'products.id');
                })
                ->paginate(10);
            return view('frontend.category', compact('products'));
        } else {
            $category = Category::wherename_unicode($name_unicode)->firstorfail();
            $products = Product::select('products.*')
                ->where('category_product.category_id', $category->id)
                ->where('products.status', 1)
                ->join('category_product', 'category_product.product_id', '=', 'products.id')
                ->paginate(10);
        }
        return view('frontend.category', compact('products'));
    }

    public function detail($name_unicode)
    {
        $product = Product::wherename_unicode($name_unicode)->firstorfail();
        $category_products = CategoryProduct::whereproduct_id($product->id)->get();
        return view('frontend.detail', compact('product', 'category_products'));
    }
}
