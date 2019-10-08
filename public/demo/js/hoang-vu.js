$('#top-control-scroll-product_ .prev-scroll-product_').on('click', function () {
    $('#top-control-scroll-product_ .scroll-product-hot_').animate({
        scrollLeft: '-=100'
    }, 300, 'swing')
})

$('#top-control-scroll-product_ .next-scroll-product_').on('click', function () {
    $('#top-control-scroll-product_ .scroll-product-hot_').animate({
        scrollLeft: '+=100'
    }, 300, 'swing')
})

$('#bottom-control-scroll-product_ .prev-scroll-product_').on('click', function () {
    $('#bottom-control-scroll-product_ .scroll-product-hot_').animate({
        scrollLeft: '-=100'
    }, 300, 'swing')
})

$('#bottom-control-scroll-product_ .next-scroll-product_').on('click', function () {
    $('#bottom-control-scroll-product_ .scroll-product-hot_').animate({
        scrollLeft: '+=100'
    }, 300, 'swing')
})

let slideIndex = 1

showDivs(slideIndex)

async function plusDivs(n) {
    showDivs(slideIndex += n)
    let active_slide = document.getElementsByClassName('active-slide_')[0]
    active_slide.classList.remove('active-slide_')
    await (document.getElementsByClassName('slider-image-dot_')[slideIndex - 1]).classList.add('active-slide_')
}

function showDivs(n) {
    let i
    let x = document.getElementsByClassName("slider-image_")
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }

    if (x.length !== 0) {
        x[slideIndex - 1].style.display = "block"
    }

    return slideIndex
}

function currentDiv(n, this_) {
    let active_slide = document.getElementsByClassName('active-slide_')[0]
    active_slide.classList.remove('active-slide_')
    this_.classList.add('active-slide_')
    showDivs(slideIndex = n)
}

let myIndex = 0

let t = null

carousel()

function carousel() {
    var i
    var x = document.getElementsByClassName("slider-image_")
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
    myIndex++

    let active_slide = document.getElementsByClassName('active-slide_')[0]
    if (typeof active_slide !== "undefined") {
        active_slide.classList.remove('active-slide_')
    }

    if (myIndex > x.length) {
        myIndex = 1
    }
    if (x.length !== 0) {
        x[myIndex - 1].style.display = "block"
    }
    if (typeof (document.getElementsByClassName('slider-image-dot_')[myIndex - 1]) !== "undefined")
        (document.getElementsByClassName('slider-image-dot_')[myIndex - 1]).classList.add('active-slide_')
    slideIndex = myIndex + 1
    t = setTimeout(carousel, 2000)
}

$('.right-menu-header-top_').mouseenter(function () {
    if (t) {
        clearTimeout(t)
        t = null
    }
})

$('.right-menu-header-top_').mouseleave(function () {
    t = setTimeout(carousel, 2000)
})
