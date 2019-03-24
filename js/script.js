
$('.navToggle').click(function(){
    $(this).toggleClass('navToggleOpen');
    $('.navHeader').toggleClass('boxShadow');
    $('.nav li').fadeToggle('slow');
    $('.nav').slideToggle();
});


$('.navSlide').click(function(event){
    $(this).toggleClass('navSlideClose');
    $('.navigation').toggleClass('navigationClose');
    $('.navFlex').toggleClass('navFlexClosed');
    event.stopPropagation();
});

$('.navigation').click(function(){
    if ($('.navigation').hasClass('navigationClose')) {
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




