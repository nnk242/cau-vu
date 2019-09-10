$('.sidebar_layout .sidebar nav .navigation_contain ul li').on('click', function () {
    if($(this).hasClass('sub--on')) {
        $(this).removeClass('sub--on')
    } else {
        $(this).addClass('sub--on')
    }
})
