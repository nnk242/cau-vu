<nav>
    <div class="navigation_contain">
        <div class="docs_sidebar">
            <ul>
                <li>
                    <h2><a href="{{route('demo-web')}}">Dashboard</a></h2>
                </li>
                <li ref="category"
                    class="{{ \App\Component\RefSideBar::ref('category')['parent'] }}">
                    <h2>Danh mục</h2>
                    <ul>
                        <li ref="category.index"
                            class="{{ \App\Component\RefSideBar::ref('category')['child'] }}">
                            <a href="{{route('category.index')}}">Tất cả danh mục</a></li>
                        <li ref="category.create"
                            class="{{ \App\Component\RefSideBar::ref('category', 'create')['child'] }}"><a
                                href="{{route('category.create')}}">Thêm danh mục</a></li>
                    </ul>
                </li>
                <li ref="product" class="{{ \App\Component\RefSideBar::ref('product')['parent'] }}">
                    <h2>Sản phẩm</h2>
                    <ul>
                        <li ref="product.index"
                            class="{{ \App\Component\RefSideBar::ref('product')['child'] }}"><a
                                href="{{route('product.index')}}">Tất cả sản phẩm</a>
                        </li>
                        <li ref="product.create"
                            class="{{ \App\Component\RefSideBar::ref('product', 'create')['child'] }}"><a
                                href="{{route('product.create')}}">Thêm sản phẩm</a></li>
                    </ul>
                </li>
            </ul>
        </div>

        {{--        <script async type="text/javascript"--}}
        {{--                src="//cdn.carbonads.com/carbon.js?serve=CKYILK3E&placement=laravelcom"--}}
        {{--                id="_carbonads_js"></script>--}}


    </div>
</nav>
