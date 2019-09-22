<?php

namespace App\Http\Controllers;

use App\Model\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    private function model()
    {
        return Category::class;
    }

    public function index()
    {
        $data = $this->model()::paginate(10);
        return view('backend.category.index', compact('data'));
    }

    public function create()
    {
        return view('backend.category.create');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->with('error', $validator->errors()->first());
        }

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
                'user_id' => Auth::id()
            )
        );

        return redirect()->back()->with('success', 'Lưu thành công!');
    }

    public function show(Category $category)
    {
        dd($category);
    }

    public function edit(Category $category)
    {
        return view('backend.category.edit', compact('category'));
    }

    public function update(Request $request, Category $category)
    {
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
            'description' => $request->description
        ]);

        return redirect()->back()->with('success', 'Lưu thành công!');
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return redirect()->back()->with('success', 'Xóa thành công!');
    }
}
