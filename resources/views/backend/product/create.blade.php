@extends('components.layouts.backend.index')
@section('css')
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.9/dist/css/bootstrap-select.min.css">
@endsection
@section('content')
    <h1>Thêm danh mục</h1>
    <form method="POST" action="{{route('category.store')}}" enctype="multipart/form-data">
        @csrf
        <div class="form-group">
            <label>Nhập tên danh mục</label>
            <input type="text" class="form-control" placeholder="Nhập tên danh mục" name="name" required>
        </div>
        <div class="form-group">
            <label>Giới thiệu</label>
            <textarea type="text" class="form-control" placeholder="Giới thiệu danh mục" name="description"></textarea>
        </div>
        <div class="form-group">
            <label>Chọn danh mục sản phẩm</label>
            <select class="form-control selectpicker" multiple>
                @foreach($categories as $category)
                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                @endforeach
            </select>
        </div>
        <div class="form-group">
            <label>Hình ảnh</label>
            <input type="file" class="form-control" name="image">
        </div>
        <button type="submit" class="btn_">Thêm danh mục</button>
    </form>
@endsection
@section('js')
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.9/dist/js/bootstrap-select.min.js"></script>
@endsection
