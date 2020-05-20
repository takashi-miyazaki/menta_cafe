$(function(){

    $('.top__img').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        
    });

    $('.sp').on('click',function(){
        $('.sp__line').toggleClass('active');
        $('.gnav').slideToggle();
    });
    
    $('.gnav__item').on('click',function(){
        $('.sp__line').toggleClass('active');
        $('.gnav').slideToggle();
    });

    $('.scroll').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.scroll').fadeIn();
        } else {
            $('.scroll').fadeOut();
        }
    });
    $('.scroll').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
    
    
    });