<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Tiện mỹ nghệ Hoàng Vũ</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

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

    @yield('css')
    <!-- Load JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
    <script type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/mousetrap/1.4.6/mousetrap.min.js"></script>

    <link href="https://fonts.googleapis.com/css?family=Livvic&display=swap" rel="stylesheet">
</head>
<body class="language-php">

<header class="main">
    @include('demo-web.components.layouts.frontend.contain')
    @yield('content')
    @include('demo-web.components.layouts.frontend.footer')
</header>

{{--<script id="search_empty_template" type="text/template">--}}
{{--    <div class="autocomplete-wrapper empty">--}}
{{--        <div class="h2">We didn't find any result for "--}}
{{--            --}}{{--            {{query}}--}}
{{--            ". Sorry!--}}
{{--        </div>--}}
{{--    </div>--}}
{{--</script>--}}

<script src="{{asset('demo/js/js.js')}}"></script>
@yield('js')

<script>
    $(document).on('focusout', '#search-docs-input', function () {
        $('.tt-dropdown-menu').hide()
    })

    $(document).on('keyup', '#search-docs-input', function () {
        let query = $(this).val()
        if (query.length !== 0) {
            $('.tt-dropdown-menu').show()
        } else {
            $('.tt-dropdown-menu').hide()
        }
    })

    $(document).on('focus', '#search-docs-input', function () {
        let query = $(this).val()
        if (query.length !== 0) {
            $('.tt-dropdown-menu').show()
        } else {
            $('.tt-dropdown-menu').hide()
        }
    })

    $('.tt-dropdown-menu').hide()
</script>
</body>
</html>
