
$(document).ready(function(){
    
    function scrollToElement( target ) {
    var topoffset = 48;
    var speed = 800;
    var destination = jQuery( target ).offset().top - topoffset;
    jQuery( 'html:not(:animated),body:not(:animated)' ).animate( { scrollTop: destination}, speed, function() {
        window.location.hash = target;
    });
    return false;
}
    $('.nav>li:nth-child(1) a').click(function(){
        scrollToElement('#rotk-six-poems');
    });
    $('.nav>li:nth-child(2) a').click(function(){
        scrollToElement('#rotk-about-us');
    });
    $('.nav>li:nth-child(3) a').click(function(){
        scrollToElement('#rotk-taster');
    });
    $('.nav>li:nth-child(4) a').click(function(){
        scrollToElement('#rotk-participents');
    });


     var fixmeTop = $('.navbar').offset().top;
     $(window).scroll(function() {
     var currentScroll = $(window).scrollTop();
     if (currentScroll >= fixmeTop) {
     
        $('.navbar').addClass('rotk-fixed-navbar');
        $('#reference').addClass('rotk-pushdown');
     } else {
        $('.navbar').removeClass('rotk-fixed-navbar');
        $('#reference').removeClass('rotk-pushdown');
        $('.navbar').css({
            position: 'static'
        });
    }
    
    
    
    $(window).scroll(function() {
    var height = $(window).scrollTop();
    
    var heightRow1=$('.rotk-head').outerHeight();
    var heightRow2=$('.rotk-six-poem').outerHeight()+heightRow1;
    var heightRow3=$('.rotk-about-us').outerHeight()+ heightRow2 +$('.rotk-six-poem-bottom').outerHeight();
    var heightRow4=$('.rotk-about-us-bottom').outerHeight()+$('#rotk-taster').outerHeight()+ heightRow3;
    var heightRow5=$('.rotk-taster-bottom').outerHeight()+ heightRow4+ $('.rotk-participents').outerHeight();
    
    //console.log($('.rotk-about-us-bottom').outerHeight()+","+$('.rotk-taster').outerHeight()+","+heightRow3);
    
    if(height > heightRow1 && height < heightRow2) {
        $('.nav>li:nth-child(1) a').addClass('rotk-scroll-detection');
    }else{
        $('.nav>li:nth-child(1) a').removeClass('rotk-scroll-detection');
    }
    
    if(height > heightRow2 && height < heightRow3) {
        $('.nav>li:nth-child(2) a').addClass('rotk-scroll-detection');
    }else{
        $('.nav>li:nth-child(2) a').removeClass('rotk-scroll-detection');
    }
    
    if(height > heightRow3 && height < heightRow4) {
        $('.nav>li:nth-child(3) a').addClass('rotk-scroll-detection');
    }else{
        $('.nav>li:nth-child(3) a').removeClass('rotk-scroll-detection');
    }
    
    if(height > heightRow4 && height < heightRow5) {
        $('.nav>li:nth-child(4) a').addClass('rotk-scroll-detection');
        
    }else{
        $('.nav>li:nth-child(4) a').removeClass('rotk-scroll-detection');
    }
    
    if(height > 0 && height < heightRow1) {
        $('.nav>li:nth-child(5) a').addClass('rotk-scroll-detection');
    }else{
        $('.nav>li:nth-child(5) a').removeClass('rotk-scroll-detection');
    }
    
    });
});
    

});
