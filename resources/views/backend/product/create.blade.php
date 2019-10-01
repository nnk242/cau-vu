@extends('components.layouts.backend.index')
@section('css')
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css"/>
@endsection
@section('content')
    <h1 class="mb-3">Thêm sản phẩm</h1>
    <form method="POST" action="{{route('product.store')}}" enctype="multipart/form-data">
        @csrf
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-info-product" data-toggle="tab" href="#info-product" role="tab"
               aria-controls="info-product" aria-selected="true">Sản phẩm <span class="text-danger">*</span></a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
               aria-controls="nav-profile" aria-selected="false">Hình ảnh <span class="text-danger">*</span></a>
        </div>
        <div class="tab-content mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="info-product" role="tabpanel" aria-labelledby="nav-info-product">
                <div class="form-group">
                    <label>Tên sản phẩm</label>
                    <input type="text" class="form-control" placeholder="Nhập tên sản phẩm" name="name" required>
                </div>
                <div class="form-group">
                    <label>Danh mục sản phẩm</label>
                </div>
                <div class="form-group">
                    @foreach($categories as $category)
                        <label class="checkbox-inline"><input type="checkbox" value="{{ $category->id }}"
                                                              name="categoies">{{ $category->name }}</label>
                    @endforeach
                </div>
                <div class="form-group">
                    <label>Giá tiền gốc</label>
                    <input type="text" class="form-control" id="price" placeholder="Nhập giá tiền..." name="price"
                           value="0 ₫" required>
                </div>
                <div class="form-group">
                    <label>Giá khuyến mại</label>
                    <input type="text" class="form-control" id="promotion_price" placeholder="Nhập giá khuyến mại..."
                           name="promotion_price">
                </div>
                <div class="form-group">
                    <label><span style="font-weight: bold;">Khuyến mại (%):</span> <span
                            id="discount">0.00%</span></label>
                </div>
                <div class="form-group">
                    <label>Ngày khuyến mại (Để trống có nghĩa là đang khuyến mại)</label>
                    <input type="text" name="daterange" class="form-control"/>
                </div>
                <div class="form-group">
                    <label>Giới thiệu</label>
                    <textarea type="text" class="form-control" placeholder="Giới thiệu sản phẩm" id="description"
                              name="description"></textarea>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div class="form-group">
                    <label>Hình ảnh</label>
                </div>
                <div class="form-group">
                    <label class="btn btn-secondary" for="imgInp">Hình ảnh</label>
                    <input type="file" id="imgInp" class="form-control d-none" required>
                </div>
                <div class="form-group" id="show-image"></div>
            </div>
        </div>
        <button type="submit" class="btn_">Thêm danh mục</button>
    </form>
@endsection

@section('js')
    <script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>

    <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
    <script type="text/javascript" src="{{ asset('ckeditor/ckeditor.js') }}"></script>
    <script>
        CKEDITOR.replace('description')
        $('#price').on('keyup', function () {
            let real_price = numeral($('#price').val())

            if (real_price._value < 0 || real_price._value === null) {
                real_price = numeral(0);
            }

            let price = numeral(real_price).format('0,0')
            //
            let real_promotion_price = numeral($('#promotion_price').val())

            if (real_promotion_price._value < 0 || real_promotion_price._value === null) {
                real_promotion_price = numeral(0);
            }

            $('#price').val(price + ' ₫')

            if (real_promotion_price._value >= real_price._value) {
                real_promotion_price = real_price
            }

            let discount = '0.00%'

            if (real_promotion_price._value !== 0) {
                discount = numeral((1 - (real_price._value / real_promotion_price._value))).format('0.00%')
            }

            $('#discount').empty()
            $('#discount').append(discount)

        })

        $('#promotion_price').on('keyup', function () {
            let real_price = numeral($('#price').val())

            if (real_price._value < 0 || real_price._value === null) {
                real_price = numeral(0);
            }

            let real_promotion_price = numeral($('#promotion_price').val())

            if (real_promotion_price._value < 0 || real_promotion_price._value === null) {
                real_promotion_price = numeral(0);
            }

            if (real_promotion_price._value >= real_price._value) {
                real_promotion_price = real_price
            }

            let promotion_price = numeral(real_promotion_price).format('0,0')
            $('#promotion_price').val(promotion_price + ' ₫')

            let discount = '0.00%'

            if (real_promotion_price._value !== 0) {
                discount = numeral((1 - (real_promotion_price._value / real_price._value))).format('0.00%')
            }

            $('#discount').empty()
            $('#discount').append(discount)
        })

        $("#imgInp").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader()
                var clone = $(this).clone()
                clone.attr('id', '')
                clone.attr('name', 'images[]')
                clone.attr('class', 'd-none')
                reader.onload = function (e) {
                    let result = e.target.result
                    let last_data_id = ($('.data-upload_').last()).attr('data-upload-id')
                    last_data_id = last_data_id ? parseInt(last_data_id) + 1 : 0

                    console.log(clone)

                    $('#show-image').append(
                        '<div class="data-upload_" data-upload-id="' + last_data_id + '">' +
                        '<img src="' + result + '">' +
                        '<span class="close-image-upload_">X</span>' +
                        '</div>')

                    $('#show-image').append(clone)
                }

                reader.readAsDataURL(this.files[0])
            }
        })

        $(document).on('click', '.close-image-upload_', function () {
            $(this).parent('.data-upload_').empty()
        })

        $(function () {
            $('input[name="daterange"]').daterangepicker({
                opens: 'left'
            }, function (start, end, label) {
                console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
            });
        });

    </script>
@endsection
