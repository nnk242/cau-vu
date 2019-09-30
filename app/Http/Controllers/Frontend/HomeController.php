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

    public function category() {
        return 1;
    }
}
