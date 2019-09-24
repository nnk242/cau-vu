<?php

namespace App\Http\Controllers;

use App\Component\UploadFile;
use App\Model\Category;
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
        return view('backend.product.create');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->with('error', $validator->errors()->first());
        }

        $image_name = UploadFile::uploadFile($request->image);

        $name_unicode = str_seo($request->name);

        $count_name_unicode = $this->model()::wherename_unicode($name_unicode)->count();

        if ($count_name_unicode) {
            $name_unicode = $name_unicode . '-' . generateRandomString(3) . '-' . time() . '-' . generateRandomString(3);
        }

        $this->model()::create(
            array(
                'name' => $request->name,
                'name_unicode' => $name_unicode,
                'description' => $request->description,
                'image' => $image_name,
                'user_id' => Auth::id()
            )
        );

        return redirect()->back()->with('success', 'Lưu thành công!');
    }

    public function show(Category $category)
    {
        return view('backend.category.show', compact('category'));
    }

    public function edit(Category $category)
    {
        return view('backend.category.edit', compact('category'));
    }

    public function update(Request $request, Category $category)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->with('error', $validator->errors()->first());
        }

        $image_name = $category->image;

        if (isset($request->image)) {
            if ($image_name) {
                UploadFile::removeFile('img/upload/' . $image_name);
            }
            $image_name = UploadFile::uploadFile($request->image);
        }

        $name = $request->name;
        if ($name == $category->name) {
            $name_unicode = $category->name_unicode;
        } else {
            $name_unicode = str_seo($name);
            $count_name_unicode = $this->model()::wherename_unicode($name_unicode)->count();
            if ($count_name_unicode) {
                $name_unicode = str_seo($name) . '-' . generateRandomString(3) . '-' . time() . '-' . generateRandomString(3);
            }
        }
        $category->update([
            'name' => $name,
            'name_unicode' => $name_unicode,
            'image' => $image_name,
            'description' => $request->description
        ]);

        return redirect()->back()->with('success', 'Lưu thành công!');
    }

    public function destroy(Category $category)
    {
        $image_name = $category->image;

        if ($image_name) {
            UploadFile::removeFile('img/upload/' . $image_name);
        }

        $category->delete();
        return redirect()->back()->with('success', 'Xóa thành công!');
    }
}
