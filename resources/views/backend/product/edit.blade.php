@extends('components.layouts.backend.index')
@section('content')
    <h1>Sửa danh mục {{ $category->id }}</h1>
    @isset($category->image)
        <img class="image-edit_" src="{{ asset('img/upload/' . $category->image) }}">
    @endisset
    <form method="POST" action="{{ route('category.update', ['id' => $category->id]) }}" enctype="multipart/form-data">
        @csrf
        {{ method_field('PUT') }}
        <div class="form-group">
            <label>Url người dùng thấy</label>
            <input type="text" class="form-control" placeholder="Điều hướng trang web"
                   value="{{ $category->name_unicode }}" readonly required>
        </div>
        <div class="form-group">
            <label>Nhập tên danh mục</label>
            <input type="text" class="form-control" placeholder="Nhập tên danh mục" name="name"
                   value="{{ $category->name }}" required>
        </div>
        <div class="form-group">
            <label>Giới thiệu</label>
            <textarea type="text" class="form-control" placeholder="Giới thiệu danh mục"
                      name="description">{{ $category->description }}</textarea>
        </div>
        <div class="form-group">
            <label> Hình ảnh </label>
            <input type="file" class="form-control" name="image">
        </div>
        <button type="submit" class="btn_">Sửa danh mục</button>
    </form>
@endsection
