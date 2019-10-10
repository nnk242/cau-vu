<?php

namespace App\Http\Controllers;

use App\Component\UploadFile;
use App\Model\Category;
use App\Model\CategoryProduct;
use App\Model\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    private function model()
    {
        return Product::class;
    }

    public function index()
    {
        $data = $this->model()::paginate(10);
        return view('backend.product.index', compact('data'));
    }

    public function create()
    {
        $categories = Category::all();
        return view('backend.product.create', compact('categories'));
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'price' => 'required',
            'images.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->with('error', $validator->errors()->first());
        }
        $image_name = '';
        foreach ($request->images as $key => $image) {
            if ($key != 0) {
                $image_name = $image_name . ',';
            }
            $image_name = $image_name . UploadFile::uploadFile($image);
        }

        $name_unicode = str_seo($request->name);

        $count_name_unicode = $this->model()::wherename_unicode($name_unicode)->count();

        if ($count_name_unicode) {
            $name_unicode = $name_unicode . '-' . generateRandomString(3) . '-' . time() . '-' . generateRandomString(3);
        }

        $time_begin = 0;
        $time_end = 0;

        if ($request->daterange) {
            $arr_daterange = explode('-', $request->daterange);
            if (count($arr_daterange)) {
                $time_begin = strtotime($arr_daterange[0]);
                $time_end = strtotime($arr_daterange[1]);
            }

            if ($time_begin > $time_end) {
                $temp = $time_begin;
                $time_begin = $time_end;
                $time_end = $temp;
            }
        }

        $price = preg_replace('/[^0-9]/', '', $request->price);

        $promotion_price = preg_replace('/[^0-9]/', '', $request->promotion_price);

        $data = [
            'name' => $request->name,
            'name_unicode' => $name_unicode,
            'description' => $request->description,
            'images' => $image_name,
            'user_id' => Auth::id(),
            'price' => (int)$price,
            'promotion_price' => (int)$promotion_price,
            'time_begin' => $time_begin,
            'time_end' => $time_end,
            'status' => (int)$request->status == 1 ? $request->status : 0,
            'type' => $request->type == 'slide' ? 'slide' : 'normal'
        ];

        $product = $this->model()::create(
            $data
        );

        if (gettype($request->categories) === 'array') {
            foreach ($request->categories as $category_id) {
                $category = Category::find($category_id);
                if (isset($c)) {
                    CategoryProduct::create([
                        'product_id' => $product->id,
                        'category_id' => $category_id
                    ]);
                }
            }
        }

        return redirect()->back()->with('success', 'Lưu thành công!');
    }

    public function show(Product $product)
    {
        return view('backend.product.show', compact('product'));
    }

    public function edit(Product $product)
    {
        return view('backend.product.edit', compact('product'));
    }

    public function update(Request $request, Product $product)
    {
        dd($product);
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'price' => 'required',
            'images.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->with('error', $validator->errors()->first());
        }
        $image_name = '';
        foreach ($request->images as $key => $image) {
            if ($key != 0) {
                $image_name = $image_name . ',';
            }
            $image_name = $image_name . UploadFile::uploadFile($image);
        }

        $string_image = $product->images;

        if ($string_image) {
            $arr_image = explode(',', $string_image);
            foreach ($arr_image as $value) {
                UploadFile::removeFile('img/upload/' . $value);
            }
        }

        $name_unicode = str_seo($request->name);

        $count_name_unicode = $this->model()::wherename_unicode($name_unicode)->count();

        if ($count_name_unicode) {
            $name_unicode = $name_unicode . '-' . generateRandomString(3) . '-' . time() . '-' . generateRandomString(3);
        }

        $time_begin = 0;
        $time_end = 0;

        if ($request->daterange) {
            $arr_daterange = explode('-', $request->daterange);
            if (count($arr_daterange)) {
                $time_begin = strtotime($arr_daterange[0]);
                $time_end = strtotime($arr_daterange[1]);
            }

            if ($time_begin > $time_end) {
                $temp = $time_begin;
                $time_begin = $time_end;
                $time_end = $temp;
            }
        }

        $price = preg_replace('/[^0-9]/', '', $request->price);

        $promotion_price = preg_replace('/[^0-9]/', '', $request->promotion_price);

        $data = [
            'name' => $request->name,
            'name_unicode' => $name_unicode,
            'description' => $request->description,
            'images' => $image_name,
            'user_id' => Auth::id(),
            'price' => (int)$price,
            'promotion_price' => (int)$promotion_price,
            'time_begin' => $time_begin,
            'time_end' => $time_end,
            'status' => (int)$request->status == 1 ? $request->status : 0,
            'type' => $request->type == 'slide' ? 'slide' : 'normal'
        ];

        $product::update(
            $data
        );

        return redirect()->back()->with('success', 'Lưu thành công!');
    }

    public function destroy(Product $product)
    {
        $string_image = $product->images;

        if ($string_image) {
            $arr_image = explode(',', $string_image);
            foreach ($arr_image as $value) {
                UploadFile::removeFile('img/upload/' . $value);
            }
        }

        $product->delete();
        return redirect()->back()->with('success', 'Xóa thành công!');
    }
}
