$(function(){

    $('#img1').hover(function(){
        $('#img1>span, #img1>strong').stop().animate({
            opacity: 1,
        }, 500);
    },function(){
        $('#img1>span, #img1>strong').stop().animate({
            opacity: 0,
        }, 500);
    });

    //  나 자신의 자식요소 중 span, strong 요소를 찾아서 지정
    $('#img2').hover(function(){
        $(this).find('span, strong').stop().animate({
            left: '0',
        }, 500);
    },function(){
        $(this).find('span, strong').stop().animate({
            left: '-100%',
        }, 500);
    });

    //img3 => 변수로 지정
    //500 => 변수로 지정
    //img3 나에게 있는 요소 중에서 span 과 strong을 찾아서 지정
    let img3=$('#img3');
    time=500;

    img3.hover(function(){
        $(this).find('strong, span').stop().animate({
            bottom: '0',
            opacity: 1,
        }, time);
        $(this).find('img').stop().animate({
            top: '-10px',
        }, time);
    },function(){
        $(this).find('strong, span').stop().animate({
            bottom: '-100px',
            opacity: 0,
        }, time);
        $(this).find('img').stop().animate({
            top: '0px',
        }, time);
    });
   










});