$(function(){

    let ww=$(window).width();
    let wh=$(window).height();

    $('#wrap').css({
        width: ww*3,
        height: wh*3
    });
    $('.page').css({
        width: ww,
        height: wh
    });
    $('#width_aligin').css({
        width: ww*3,
        height: wh
    });
    $('#top_page, #bot_page').css({
        left: ww,
    });

    /////////// event /////////////

    $('#main_to_left').click(function(){
        $('#wrap').animate({
            left: 0,
        });
    });
    $('#left_to_main').click(function(){
        $('#wrap').animate({
            left: -ww,
        });
    });

    $('#main_to_top').click(function(){
        $('#wrap').animate({
            top: 0,
        });
    });
    $('#top_to_main').click(function(){
        $('#wrap').animate({
            top: -wh,
        });
    });

    $('#main_to_right').click(function(){
        $('#wrap').animate({
           left: -ww*2,
        });
    });
    $('#right_to_main').click(function(){
        $('#wrap').animate({
            left: -ww,
        });
    });


    $('#main_to_bot').click(function(){
        $('#wrap').animate({
           top: -wh*2,
        });
    });
    $('#bot_to_main').click(function(){
        $('#wrap').animate({
            top: -wh,
        });
    });


});//end