$('.prev-scroll-product_').on('click', function() {
    $('.scroll-product-hot_').animate({
        scrollLeft: '-=100'
    }, 300, 'swing')
});

$('.next-scroll-product_').on('click', function() {
    $('.scroll-product-hot_').animate({
        scrollLeft: '+=100'
    }, 300, 'swing')
});
