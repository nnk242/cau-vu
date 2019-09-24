@extends('components.layouts.backend.index')
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
        </div>
        <div class="form-group">
            @foreach($categories as $category)
                <label class="checkbox-inline"><input type="checkbox" value="{{ $category->id }}"
                                                      name="categoies">{{ $category->name }}</label>
            @endforeach
        </div>
        <div class="form-group">
            <label>Nhập giá tiền gốc</label>
            <input type="text" class="form-control" id="price" placeholder="Nhập giá tiền..." name="price" required>
        </div>

        <div class="form-group">
            <label>Giảm giá khuyến mại</label>
            <input type="number" min="0" max="100" class="form-control" id="discount" placeholder="Nhập % giảm giá..." name="discount" required>
        </div>
        <div class="form-group">
            <label><span style="font-weight: bold;">Thành tiền:</span> <span id="final_price"></span></label>
        </div>
        <div class="form-group">
            <label>Hình ảnh</label>
            <input type="file" class="form-control" name="image">
        </div>
        <button type="submit" class="btn_">Thêm danh mục</button>
    </form>
@endsection

@section('js')
    <script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>
    <script>
        $('#price').on('keyup', function () {
            let real_price = parseInt(numeral($(this).val()))
            let price = numeral(real_price).format('0,0')
            $(this).val(price)
            $('#final_price').empty()

            let discount = $('#discount').val()
            if(discount) {
                price = real_price - real_price*
                $('#final_price').append(price + ' ₫')
            } else {
                $('#final_price').append(price + ' ₫')
            }
        })
    </script>
@endsection
