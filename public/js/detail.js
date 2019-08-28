$(document).on('click', '.item-image_', function () {
    if($(this).attr('role') != 'active') {
        $('.active-item-image_').attr('role', 'non-active')
        $('.active-item-image_').removeClass('active-item-image_')
        $(this).addClass('active-item-image_')
        $(this).attr('role', 'active')

        $('#ex2 > img').attr('src', $(this).attr('src'))
    }
})
