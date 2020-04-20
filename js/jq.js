$(function(){

    $('.top__img').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        
    });

    $('.sp').on('click',function(){
        $('.sp__line').toggleClass('active');
        $('.gnav').fadeToggle();
    });
    
    $('.gnav__menu__item').on('click',function(){
        $('.menu__line').toggleClass('active');
        $('.gnav').fadeToggle();
    });
    
    
    });