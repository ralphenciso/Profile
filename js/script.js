var navMenu = document.querySelector('.brgBtn')
var nav = document.querySelector('#nav');
var navHeader = document.querySelector('.navHeader');
var navToggle = document.querySelector('.navSlide > img');
var navigation = document.querySelector('.navigation');
var navMin;
var contentsContainer = document.querySelector('.contentsContainer')
var moreTxt = document.querySelector('#moreText');


navMenu.addEventListener('click', function(e){
    nav.classList.toggle('navClose');
    navHeader.classList.toggle('shadowBreak');
    this.classList.toggle('brgBtnOpen');
    e.preventDefault();
    e.stopPropagation();
});


navToggle.addEventListener('click', function(e){
    e.stopPropagation();
    navigation.classList.toggle('navMin'); 
    contentsContainer.classList.toggle('marginAdjust');

    if (navigation.classList.contains('navMin')) {
        navigation.addEventListener('click', navMinListener)
    } else {
        navigation.removeEventListener('click', navMinListener)
    }
});

function navMinListener(){
    navToggle.click();
}




