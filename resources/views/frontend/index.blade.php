@extends('demo-web.components.layouts.frontend.index')

@section('content')
    <div style="max-width: 80em; height: auto; padding: 1px; margin: 0 auto">
        <div class="content-header-top_">
            <div class="left-menu-header-top_">
                <ul class="ecosystem">
                    @foreach($categories as $category)
                        <li style="width: 100%">
                            <a href="{{ route('danh-muc', ['id' => $category->name_unicode]) }}">
                                <div class="system_icon">
                                    <img
                                        src="{{ asset($category->image ? 'img/upload/' . $category->image : 'img/icon/archive.svg') }}"
                                        alt="Icon"></div>
                                <div class="system_info">{{ $category->name }}
                                    <span>{{ str_limit($category->description, 15) }}</span>
                                </div>
                            </a>
                        </li>
                    @endforeach
                    <li style="width: 100%">
                        <a href="{{ url('khac.hv/danh-muc') }}">
                            <div class="system_icon"><img src="{{ asset('img/icon/archive.svg') }}" alt="Icon"></div>
                            <div class="system_info">Khác</div>
                        </a>
                    </li>
                </ul>
            </div>
            @isset($slides)
                <div class="right-menu-header-top_">
                    <div class="slider-holder_">
                        <div class="image-holder_">
                            @foreach($slides as $slide)
                                <img
                                    src="{{$slide->images ? (\App\Component\FirstImage::img($slide->images) ? \App\Component\FirstImage::img($slide->images) : 'https://66.media.tumblr.com/a8e3c2a519fa0bfad2f9c562dd33ccc0/tumblr_pvjg6bpkKe1rogvb0o1_1280.jpg') : 'https://66.media.tumblr.com/a8e3c2a519fa0bfad2f9c562dd33ccc0/tumblr_pvjg6bpkKe1rogvb0o1_1280.jpg'}}"
                                    class="slider-image_"/>
                            @endforeach
                            {{--                        <img--}}
                            {{--                            src="https://66.media.tumblr.com/9cea6215dc83cd113d1d0d485636eb19/tumblr_psieapK3X01rogvb0o1_1280.jpg"--}}
                            {{--                            class="slider-image_"/>--}}
                            {{--                        <img--}}
                            {{--                            src="https://66.media.tumblr.com/02bf725cc58f7012fed1a78e33e9e9f3/tumblr_psiealE4b31rogvb0o1_1280.jpg"--}}
                            {{--                            class="slider-image_"/>--}}
                        </div>
                        @if($slides->count() > 1)
                            <div class="slider-button-holder_">
                                @foreach($slides as $key=>$slide)
                                    <div class="slider-image-dot_ active-slide_" ref="{{ $key+1 }}"
                                         onclick="currentDiv(parseInt('{{$key+1}}'), this)"></div>
                                @endforeach
                                {{--                        <div class="slider-image-dot_" ref="2" onclick="currentDiv(2, this)"></div>--}}
                                {{--                        <div class="slider-image-dot_" ref="3" onclick="currentDiv(3, this)"></div>--}}
                            </div>
                        @endif
                        @if($slides->count() > 1)
                            <div class="control-scroll-product_" id="header-control-scroll-product_">
                                <div class="prev-scroll-product_" onclick="plusDivs(-1)"><img
                                        src="{{asset('demo/img/icons/prev.svg')}}"></div>
                                <div class="next-scroll-product_" onclick="plusDivs(1)"><img
                                        src="{{asset('demo/img/icons/next.svg')}}"></div>
                            </div>
                        @endif
                    </div>
                </div>
            @endisset
        </div>
    </div>
    <div class="contain">
        <div class="partners_block content_block bg_left">
            <div class="bg">
                <img
                    src="https://66.media.tumblr.com/8d86774c82a41fbea03c9b2749f59d73/tumblr_prw6u0AmjP1rogvb0o1_1280.jpg">
            </div>
            <div class="partners_list product-hot_" id="top-control-scroll-product_">
                <div class="title-product-hot_">
                    <h3>Sản phẩm mới</h3>
                </div>
                <div class="scroll-product-hot_">
                    <div class="items-product-hot_">
                        @foreach($new_products as $new)
                            <div class="hot-product_">
                                <div class="content-product_">
                                    @if(time() <= (int)$new->time_end and time() >= $new->time_begin)
                                        <div
                                            class="discount-badge_">{{ (1-((int)$new->promotion_price/(int)$new->price))*100 }}
                                            %
                                        </div>
                                    @endif
                                    <div class="image-product-hot_">
                                        <img class="img-product_"
                                             src="{{$new->images ? (\App\Component\FirstImage::img($new->images) ? \App\Component\FirstImage::img($new->images) : 'https://66.media.tumblr.com/a8e3c2a519fa0bfad2f9c562dd33ccc0/tumblr_pvjg6bpkKe1rogvb0o1_1280.jpg') : 'https://66.media.tumblr.com/a8e3c2a519fa0bfad2f9c562dd33ccc0/tumblr_pvjg6bpkKe1rogvb0o1_1280.jpg'}}"
                                             alt="{{ $new->name }}">
                                    </div>
                                    <h5 class="name-product_">{{ $new->name }}</h5>
                                    <p class="price_">Giá: <b>{{ number_format($new->price, 0) }} ₫</b></p>
                                    <a href="{{ route('san-pham', ['name_unicode' => $new->name_unicode]) }}" class="learn_more">Xem chi tiết sản phẩm
                                        <span>→</span></a>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="control-scroll-product_">
                    <div class="prev-scroll-product_"><img src="{{asset('demo/img/icons/prev.svg')}}"></div>
                    <div class="next-scroll-product_"><img src="{{asset('demo/img/icons/next.svg')}}"></div>
                </div>
            </div>

            <ul class="partners_list">
                <li style="width: 100%; color: #ff2d20">
                    <h3>Danh sách sản phẩm</h3>
                </li>
                @foreach($products as $product)
                    <li>
                        <div class="content position-relative_">
                            @if(time() <= (int)$product->time_end and time() >= $product->time_begin)
                                <div
                                    class="discount-badge_">{{ (1-((int)$product->promotion_price/(int)$product->price))*100 }}
                                    %
                                </div>
                            @endif
                            <div class="logo_contain">
                                <img class="img-product_"
                                     src="{{ asset($product->images ? (\App\Component\FirstImage::img($product->images) ? \App\Component\FirstImage::img($product->images) : 'https://66.media.tumblr.com/a8e3c2a519fa0bfad2f9c562dd33ccc0/tumblr_pvjg6bpkKe1rogvb0o1_1280.jpg') : 'https://66.media.tumblr.com/a8e3c2a519fa0bfad2f9c562dd33ccc0/tumblr_pvjg6bpkKe1rogvb0o1_1280.jpg' )}}"
                                     alt="{{ $product->name }}">
                            </div>
                            <h5 class="name-product_">{{ $product->name  }}</h5>
                            <p class="small">{{ str_limit(strip_tags($product->description), 30) }}</p>
                            @if(time() <= (int)$product->time_end and time() >= $product->time_begin)
                                <p class="price_">Giá: <b>{{ number_format($product->promotion_price, 0) }} ₫</b> <span
                                        class="product-sale_">{{ number_format($product->price, 0) }} ₫</span></p>
                            @else
                                <p class="price_">Giá: <b>{{ number_format($product->price, 0) }} ₫</b></p>
                            @endif
                            <a href="{{ route('san-pham', ['name_unicode' => $product->name_unicode]) }}" class="learn_more">Xem chi tiết sản phẩm
                                <span>→</span></a>
                        </div>
                    </li>
                @endforeach
            </ul>

            <div class="partners_list product-hot_" id="bottom-control-scroll-product_">
                <div class="title-product-hot_">
                    <h3>Sản phẩm bán chạy</h3>
                </div>
                <div class="scroll-product-hot_">
                    <div class="items-product-hot_">
                        <div class="hot-product_">
                            <div class="content-product_">
                                <div class="image-product-hot_">
                                    <img class="img-product_"
                                         src="https://66.media.tumblr.com/2b45b80a5b746f71d6837972ef6047c8/tumblr_ps78efsqTt1rogvb0o1_640.jpg"
                                         alt="Tighten">
                                </div>
                                <h5 class="name-product_">Tên sản phẩm</h5>
                                <p class="price_">Giá: <b>150.000 vnđ</b></p>
                                <a href="{{route('detail')}}" class="learn_more">Xem chi tiết sản phẩm
                                    <span>→</span></a>
                            </div>
                        </div>
                        <div class="hot-product_">
                            <div class="content-product_">
                                <div class="image-product-hot_">
                                    <img class="img-product_"
                                         src="https://66.media.tumblr.com/2b45b80a5b746f71d6837972ef6047c8/tumblr_ps78efsqTt1rogvb0o1_640.jpg"
                                         alt="Tighten">
                                </div>
                                <h5 class="name-product_">Tên sản phẩm Tên sản phẩm Tên sản phẩm Tên sản
                                    phẩm</h5>
                                <p class="price_">Giá: <b>150.000 vnđ</b></p>
                                <a href="{{route('detail')}}" class="learn_more">Xem chi tiết sản phẩm
                                    <span>→</span></a>
                            </div>
                        </div>
                        <div class="hot-product_">
                            <div class="content-product_">
                                <div class="image-product-hot_">
                                    <img class="img-product_"
                                         src="https://66.media.tumblr.com/a2b105d5eaaa7f739709cb53ec61f2d8/tumblr_poyjg1Fdva1rogvb0o1_1280.jpg"
                                         alt="Kirschbaum">
                                </div>
                                <h5 class="name-product_">Tên sản phẩm</h5>
                                <p class="price_">Giá: <b>150.000 vnđ</b></p>
                                <p class="product-sale_">Giá gốc: <b>150.000 vnđ</b></p>
                                <a href="{{route('detail')}}" class="learn_more">Xem chi tiết sản phẩm
                                    <span>→</span></a>
                            </div>
                        </div>
                        <div class="hot-product_">
                            <div class="content-product_">
                                <div class="image-product-hot_">
                                    <img class="img-product_"
                                         src="https://66.media.tumblr.com/04ed25266bffa9d0f538512d5a24b5e3/tumblr_pvykscJ2n41rogvb0o1_1280.jpg"
                                         alt="Kirschbaum">
                                </div>
                                <h5 class="name-product_">Tên sản phẩm</h5>
                                <p class="price_">Giá: <b>150.000 vnđ</b></p>
                                <a href="{{route('detail')}}" class="learn_more">Xem chi tiết sản phẩm
                                    <span>→</span></a>
                            </div>
                        </div>
                        <div class="hot-product_">
                            <div class="content-product_">
                                <div class="image-product-hot_">
                                    <img class="img-product_"
                                         src="https://66.media.tumblr.com/079ad9261491e7bd6650633297755394/tumblr_pu1w3gRGxc1rogvb0o1_640.jpg"
                                         alt="Kirschbaum">
                                </div>
                                <h5 class="name-product_">Tên sản phẩm</h5>
                                <p class="price_">Giá: <b>150.000 vnđ</b></p>
                                <a href="{{route('detail')}}" class="learn_more">Xem chi tiết sản phẩm
                                    <span>→</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="control-scroll-product_">
                    <div class="prev-scroll-product_"><img src="{{asset('demo/img/icons/prev.svg')}}"></div>
                    <div class="next-scroll-product_"><img src="{{asset('demo/img/icons/next.svg')}}"></div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('js')
    <script src="{{asset('demo/js/hoang-vu.js')}}"></script>
@endsection
