@extends('demo-web.components.layouts.frontend.index')

@section('content')
    <div class="home standard_layout">
        <div class="remodal-bg">
            <div class="content_contain" style="padding-bottom: 4.5em;">
                <div class="page_contain">
                    <div class="contain content-breadcrumb_">
                        <a href="{{route('demo-web')}}">Trang chủ</a><img class="img-breadcrumb_"
                                                                          src="{{asset('demo/img/icons/chevron-right.svg')}}">
                        <a href="{{route('demo-web')}}">Kệ tường</a>
                        <img class="img-breadcrumb_"
                             src="{{asset('demo/img/icons/chevron-right.svg')}}"><span>Tên sản phẩm</span>
                    </div>
                    <div class="contain">
                        <div class="detail-item_">
                            <div class="detail-item-all-images_">
                                <div class="detail-item-left-image_">
                                    @foreach(\App\Component\ArrImg::img($product->images) as $key=>$image)
                                        <img class="item-image_ {{ $key==0 ? 'active-item-image_' : '' }}"
                                             role="{{ $key==0 ? 'active' : 'non-active' }}"
                                             src="{{ asset('img/upload/' . $image) }}">
                                    @endforeach
                                </div>
                                <div class="detail-item-right-image_ zoom" id="ex2">
                                    <img
                                        src="{{ asset(\App\Component\FirstImage::img($product->images)) }}">
                                </div>
                            </div>
                            <div class="detail-price_">
                                <span class="title-name-product_">{{ $product->name }}</span>
                                <p style="margin-bottom: 0">Người chế tác: Hoàng vũ</p>
                                <p style="margin: 0">Mã sản phẩm: {{ $product->id }}</p>
                                @if(time() <= (int)$product->time_end and time() >= $product->time_begin)
                                    <p class="price_">Giá: <b>{{ number_format($product->promotion_price, 0) }} ₫</b>
                                        <span
                                            class="product-sale_">{{ number_format($product->price, 0) }} ₫</span></p>
                                @else
                                    <p class="price_">Giá: <b>{{ number_format($product->price, 0) }} ₫</b></p>
                                @endif
                                <div>
                                    <div class="content">
                                        <p style="margin-bottom: 0">Hãy trở thành khách hàng của chúng tôi!!!</p>
                                        <p>SĐT: <b>0382 997 997</b></p>
                                    </div>
                                    <a href="{{route('demo-web')}}" class="btn"><span><img
                                                src="{{asset('demo/img/icons/shopping-cart.svg')}}"
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
                        {!! $product->description !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('js')
    <script src="{{asset('demo/js/detail.js')}}"></script>
    <script src="{{asset('demo/js/zoom.js')}}"></script>
    <script>
        $(document).ready(function () {
            $('#ex2').zoom({on: 'grab'})
        });
    </script>
@endsection
