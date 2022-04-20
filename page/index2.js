$(document).ready(function(){

    let ww=$(window).width();
    let wh=$(window).height();

    $('#wrap').css({
        width: ww*3,
        height: wh*3,
    });

    let bg=['teal','steelblue','thistle','rosybrown','khaki'];
    $('.page').css({
        width: ww,
        height: wh,
        backgroundColor: function(index){
            return bg[index];
        }
    });
    
    $('#L').css({
        width: ww*3,
        height: wh,
    });
    
    /////////이벤트영역//////////

    $('#but1').click(function(){
        $('#wrap').animate({
            top: -wh,
        }, 1000);
    });

    $('#but2').click(function(){
        $('#wrap').animate({
            top: -wh*2,
        }, 1000);
    });

    $('#but3').click(function(){
        $('#wrap').animate({
            left: -ww,
        }, 1000);
    });
    $('#but4').click(function(){
        $('#wrap').animate({
            left: -ww*2,
        }, 1000);
    });
    $('#but5').click(function(){
        $('#wrap').animate({
            top: 0,
            left: 0,
        }, 2000);
    });











});//end