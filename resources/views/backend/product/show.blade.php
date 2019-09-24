@extends('components.layouts.backend.index')
@section('content')
    <h1>Danh mục sản phẩm: {{ $category->id }}</h1>
    @isset($category->image)
        <img class="image-edit_" src="{{ asset('img/upload/' . $category->image) }}">
    @endisset
    <h4>Đường dẫn đến trang: <a
            href="{{ request()->getHttpHost() . '/' . $category->name_unicode }}">{{ $category->name }}
            (#{{ request()->getHttpHost() . '/' . $category->name_unicode }})</a></h4>
    <h4>Tên danh mục: {{ $category->name }}</h4>
    @isset($category->description)
        <h4>Giới thiệu: {{ $category->description }}</h4>
    @endisset
@endsection
