
$('.navToggle').click(function(){
    var nv = $('.navigation')

    nv.toggleClass('navMobileOpen');


    if (nv.hasClass('navMobileOpen')){
        $('.nav li').fadeIn('slow');
        $('.nav').slideDown();
    } else {
        $('.nav li').fadeOut('fast');
        $('.nav').slideUp();
    }
    
});


// handle nav state on window resize

$(window).resize(function(){
    
    if (($(this).width() >= 768) && !($('.navigation').hasClass('navDeskClose')) )  {
        $('.nav li').show();
        $('.nav').show();
    }

    if (($(this).width() < 768 && !($('.navigation').hasClass('navMobileOpen'))) )  {
        $('.nav li').hide();
        $('.nav').hide();
    } else if (($(this).width() < 768 && ($('.navigation').hasClass('navMobileOpen')))) {
        $('.nav li').show();
        $('.nav').show();
    }

})


$('.navSlide').click(function(event){
    var nv = $('.navigation')
    nv.toggleClass('navDeskClose');

    if (nv.hasClass('navDeskClose')) {
    $('.navHeader').hide();
    $('.nav').hide();
    $(this).addClass('navSlideClose');
    $('.navFlex').addClass('navFlexClosed');

    } else {
    $(this).removeClass('navSlideClose');
    $('.navFlex').removeClass('navFlexClosed');
    $('.navHeader').show();
    $('.nav li').show();
    $('.nav').show();
        
        
    }

    event.stopPropagation();
});


$('.navigation').click(function(){
    if ($('.navigation').hasClass('navDeskClose')) {
    $('.navSlide').click();
}
});




$('.sMore').click(function(){
     var txt = $('#moreText').fadeToggle('fast');
    
    if (txt.css('display') === 'none'){
        $(this).text('Show more . . .')
    } else {
        $(this).text('Show less . . .')
    }
});




