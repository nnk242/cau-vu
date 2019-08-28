@extends('components.layouts.frontend.index')

@section('content')
    <div class="home standard_layout">
        <div class="remodal-bg">
            <div class="content_contain" style="padding-bottom: 4.5em;">
                <div class="page_contain">
                    <div class="contain content-breadcrumb_">
                        <a href="/">Trang chủ</a><img class="img-breadcrumb_"
                                                      src="{{asset('img/icons/chevron-right.svg')}}">
                        <a href="/">Kệ tường</a>
                        <img class="img-breadcrumb_"
                             src="{{asset('img/icons/chevron-right.svg')}}"><span>Tên sản phẩm</span>
                    </div>
                    <div class="contain">
                        <div style="display: flex">
                            <div class="detail-item-all-images">
                                <div class="detail-item-left-image_">
                                    <img class="item-image_ active-item-image_" role="active"
                                         src="https://66.media.tumblr.com/a2b105d5eaaa7f739709cb53ec61f2d8/tumblr_poyjg1Fdva1rogvb0o1_1280.jpg">
                                    <img class="item-image_" role="non-active"
                                         src="https://66.media.tumblr.com/2b45b80a5b746f71d6837972ef6047c8/tumblr_ps78efsqTt1rogvb0o1_640.jpg">
                                </div>
                                <div class="detail-item-right-image_ zoom" id="ex2">
                                    <img
                                        src="https://66.media.tumblr.com/a2b105d5eaaa7f739709cb53ec61f2d8/tumblr_poyjg1Fdva1rogvb0o1_1280.jpg">
                                </div>
                            </div>
                            <div style="width: 50%; padding: 1rem">
                                <span class="title-name-product_">Tên sản phẩm</span>
                                <p style="margin-bottom: 0">Người chế tác: Hoàng vũ</p>
                                <p style="margin: 0">Mã sản phẩm: HV1</p>
                                <p class="price_">Giá: <b>150.000 ₫</b> <span
                                        class="product-sale_">10.690.000 ₫</span>
                                </p>
                                <div>
                                    <div class="content">
                                        <p style="margin-bottom: 0">Hãy trở thành khách hàng của chúng tôi!!!</p>
                                        <p>SĐT: <b>0382 997 997</b></p>
                                    </div>
                                    <a href="/" class="btn"><span><img src="{{asset('/img/icons/shopping-cart.svg')}}"
                                                                       width="20"
                                                                       style="margin-right: 5px"> Đặt mua</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contain" style="margin-bottom: 2rem">
                        <span class="title-name-product_">Thông tin chi tiết</span>
                        <div>
                            <table class="table-detail_" cellspacing="0">
                                <colgroup>
                                    <col class="first_">
                                    <col class="last_">
                                </colgroup>
                                <tbody>
                                <tr>
                                    <td>Mã sản phẩm</td>
                                    <td>HV1</td>
                                </tr>
                                <tr>
                                    <td>Chất liệu</td>
                                    <td>Gỗ lim</td>
                                </tr>
                                <tr>
                                    <td>Kích cỡ</td>
                                    <td>20cmx30cm</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="contain">
                        <span class="title-name-product_">Mô tả sản phẩm</span>
                        <p>Sản phẩm là quà lưu niệm được thiết kế dành riêng cho bạn</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('js')
    <script src="{{asset('js/detail.js')}}"></script>
    <script src="{{asset('js/zoom.js')}}"></script>
    <script>
        $(document).ready(function () {
            $('#ex2').zoom({on: 'grab'})
        });
    </script>
@endsection
