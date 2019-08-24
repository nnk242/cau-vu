$('#prev').on('click', function() {
    $('.scroll-product-hot_').animate({
        scrollLeft: '-=100'
    }, 300, 'swing')
    console.log('prev')
});

$('#next').on('click', function() {
    $('.scroll-product-hot_').animate({
        scrollLeft: '+=100'
    }, 300, 'swing')
    console.log('next')
});
