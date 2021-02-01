$(function(){
    $('.tab-title a:first').addClass('active')
    $('.tab-cont').hide()
    $('.tab-cont:first').show()

    $('.tab-title a').on('click', function(){
        $('.tab-title a').removeClass('active')
        $(this).addClass('active')
        $('.tab-cont').hide()
        
        let target = $(this).attr('href')
        $(target).fadeIn()
        return false
    }) 
})