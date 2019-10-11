@extends('components.layouts.backend.index')
@section('content')
    <h1>Thêm danh mục</h1>
    <form method="POST" action="{{route('seller.store')}}" enctype="multipart/form-data">
        @csrf
        <div class="form-group">
            <label>Nhập tên người tạo sản phẩm</label>
            <input type="text" class="form-control" placeholder="Tên người tạo sản phẩm" name="name" required>
        </div>
        <div class="form-group">
            <label>Nhập số điện thoại đặt hàng</label>
            <input type="text" class="form-control" placeholder="Số điện thoại đặt hàng" name="number_phone" required>
        </div>
        <div class="form-group">
            <label>Nhập địa chỉ</label>
            <input type="text" class="form-control" placeholder="Địa chỉ" name="address">
        </div>
        <div class="form-group">
            <label>Giới thiệu về người bán</label>
            <textarea type="text" class="form-control" placeholder="Giới thiệu về người bán"
                      name="introduce"></textarea>
        </div>
        <div class="form-group">
            <label> Hình ảnh </label>
            <input type="file" class="form-control" name="image">
        </div>
        <button type="submit" class="btn btn-success">Thêm người bán</button>
    </form>
@endsection
