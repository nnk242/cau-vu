@extends('demo-web.components.layouts.backend.index')
@section('content')
    <h1>Thêm danh mục</h1>
    <form method="POST" action="{{route('category.store')}}">
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
            <label> Hình ảnh </label>
            <input type="file" class="form-control" name="image">
        </div>
        <button type="submit" class="btn_">Thêm danh mục</button>
    </form>
@endsection
