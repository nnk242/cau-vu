<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Backend</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('demo/img/favicon/apple-touch-icon.png')}}">
    <link rel="icon" type="image/png')}}" sizes="32x32" href="{{asset('demo/img/favicon/favicon-32x32.png')}}">
    <link rel="icon" type="image/png')}}" sizes="16x16" href="{{asset('demo/img/favicon/favicon-16x16.png')}}">
    <link rel="manifest" href="{{asset('demo/img/favicon/site.webmanifest')}}">
    <link rel="mask-icon" href="{{asset('demo/img/favicon/safari-pinned-tab.svg')}}" color="#ff2d20">
    <link rel="shortcut icon" href="{{asset('demo/img/favicon/favicon.ico')}}">
    <meta name="msapplication-TileColor" content="#ff2d20">
    <meta name="msapplication-config" content="{{asset('demo/img/favicon/browserconfig.xml')}}">
    <meta name="theme-color" content="#ffffff">

    <!-- Load fonts -->
    <link rel="stylesheet" href="https://use.typekit.net/ins2wgm.css">

    <!-- Load styles -->
    <link rel="stylesheet" type="text/css" href="{{asset('demo/css/app.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('demo/css/hoang-vu.css')}}">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

@yield('css')
<!-- Load JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/mousetrap/1.4.6/mousetrap.min.js"></script>

    <link href="https://fonts.googleapis.com/css?family=Livvic&display=swap" rel="stylesheet">

</head>
<body class="language-php">

<div class="sidebar_layout" id="docsScreen">

    <div class="page_contain">
        <div class="contain">
            <aside class="sidebar">
                <a href="{{route('demo-web')}}" class="logo">
                    <img class="mark" src="{{asset('demo/img/logomark.min.svg')}}" alt="hoangvu" width="40">
                    <span class="type text-logo_">HoangVu</span>
                </a>
                @include('components.layouts.backend.sidebar')
                <div class="trigger_contain">
                    <a href="#" class="nav_trigger">
                        <div class="bar"></div>
                    </a>
                </div>
            </aside>

            <section class="body_content">
                <header class="docs_actions">
{{--                    <div class="version_drop">--}}
{{--                        <div class="input_group">--}}
{{--                            <label>Version</label>--}}
{{--                            <div class="custom_select">--}}
{{--                                <select id="version_switcher">--}}
{{--                                    <option value="https://laravel.com/docs/master">Master</option>--}}
{{--                                    <option selected value="https://laravel.com/docs/6.0">6.0</option>--}}
{{--                                    <option value="https://laravel.com/docs/5.8">5.8</option>--}}
{{--                                    <option value="https://laravel.com/docs/5.7">5.7</option>--}}
{{--                                    <option value="https://laravel.com/docs/5.6">5.6</option>--}}
{{--                                    <option value="https://laravel.com/docs/5.5">5.5</option>--}}
{{--                                    <option value="https://laravel.com/docs/5.4">5.4</option>--}}
{{--                                    <option value="https://laravel.com/docs/5.3">5.3</option>--}}
{{--                                    <option value="https://laravel.com/docs/5.2">5.2</option>--}}
{{--                                    <option value="https://laravel.com/docs/5.1">5.1</option>--}}
{{--                                    <option value="https://laravel.com/docs/5.0">5.0</option>--}}
{{--                                    <option value="https://laravel.com/docs/4.2">4.2</option>--}}
{{--                                </select>--}}
{{--                            </div>--}}
{{--                        </div>--}}
{{--                    </div>--}}
                    <div class="search_contain">
                        <div class="input_group search icon">
                            <input type="text" class="search_input" id="search-docs-input" placeholder="Tìm kiếm">
                            <input type="submit" class="search_submit icon_display">
                        </div>
                    </div>
                </header>
                <section class="docs_body">
                    <section class="docs_main">
                        @yield('content')
                    </section>
                </section>
            </section>
        </div>
    </div>

</div>

<footer>
    <div class="footer_contain" style="padding-top: 10px;">
        <p class="small copyright">NNK.<br>Copyright &copy; 2019 NNK.</p>
    </div>
</footer>


<script src="{{asset('demo/js/js.js')}}"></script>
<script src="{{asset('demo/js/common.js')}}"></script>
@yield('js')
</body>
</html>
