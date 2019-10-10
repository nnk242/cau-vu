@extends('components.layouts.backend.index')
@section('content')
    <h1>Tất cả sản phẩm</h1>
    <table>
        <thead>
        <tr>
            <th>###</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
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
                <td>
                    @if($value->categoryProducts)
                        @foreach($value->categoryProducts as $item)
                            {{ $item->product->name }}
                        @endforeach
                    @endif
                </td>
                <td>
                    @isset($value->image)
                        <img class="image-table_" src="{{ asset('img/upload/' . $value->image) }}">
                    @endisset
                </td>
                <td>{!!  $value->description !!}</td>
                <td>{{ $value->user->name }}</td>
                <td>{{ $value->created_at }}</td>
                <td><a href="{{ route('category.edit', ['id' => $value->id]) }}" class="action_ action-edit_"><img
                            src="{{ asset('img/icon/edit.svg') }}"></a>
                    <a href="{{ route('category.show', ['id' => $value->id]) }}" class="action_ action-show_"><img
                            src="{{ asset('img/icon/eye.svg') }}"></a>
                    <a href="#delete-item" class="action_ action-delete_" data-toggle="modal"
                       data-target=".delete-item" data-id="{{ $value->id }}"><img
                            src="{{ asset('img/icon/trash.svg') }}"></a></td>
            </tr>
        @endforeach
        </tbody>
    </table>
    <div>
        {{ $data->appends(request()->input())->links() }}
    </div>

    <div class="modal delete-item">
        <div class="modal-dialog">
            <form class="modal-content" method="POST" action="#" data-url="{{ route('category.index') }}"
                  id="form-delete-item">
            @csrf
            {{ method_field('DELETE') }}
            <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Bạn có muốn xóa item</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Xác nhận</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Hủy</button>
                </div>

            </form>
        </div>
    </div>

@endsection

@section('js')
    <script>
        $('.action-delete_').on('click', function () {
            let id = $(this).attr('data-id')
            $('.modal-title').empty()
            $('.modal-title').append('Bạn có muốn xóa item ' + id)
            $('#form-delete-item').attr('action', $('#form-delete-item').attr('data-url') + '/' + id)
        })
    </script>
@endsection
