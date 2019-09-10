@extends('demo-web.components.layouts.backend.index')
@section('content')
    <h1>Tất cả sản phẩm</h1>
    @component('components.callout.exclamation')
        Khi xóa danh mục thì bạn có thể xóa tất cả sản phẩm thuộc danh mục đó
    @endcomponent
    <table>
        <thead>
        <tr>
            <th>###</th>
            <th>Tên danh mục</th>
            <th>Hình ảnh</th>
            <th>Thới thiệu</th>
            <th>Người tạo</th>
            <th>Ngày tạo</th>
            <th>Hoạt động</th>
        </tr>
        </thead>
        <tbody>
        @foreach($data as $key => $value)
            <tr>
                <td>{{ $key + 1 }}</td>
                <td><code class=" language-php">{{ $value->name }}</code></td>
                <td>index</td>
                <td>photos.index</td>
                <td>photos.index</td>
                <td>photos.index</td>
            </tr>
        @endforeach
        </tbody>
    </table>
    <div>
        {{ $data->appends(request()->input())->links() }}
    </div>
@endsection
