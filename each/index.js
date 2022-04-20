$(function(){

    // .each()
    // => 선택한 요소가 여러개일 때
    // 각각에 대하여 함수를 반복하여 실행 가능

    $('.in_box').each(function(i){
        let topHeight=(i*40)+130+'px'
        let leftWidth= i*254+'px'
        $(this).css({
            top: topHeight,
            left: leftWidth
        });
    });

    $('.in_box').hover(function(){
        $(this).find('img:nth-child(2)').stop().animate({
            opacity: 1
        });
        $(this).find('img:nth-child(1)').stop().animate({
            opacity: 0
        });
    },function(){
        $(this).find('img:nth-child(2)').stop().animate({
            opacity: 0
        });
        $(this).find('img:nth-child(1)').stop().animate({
            opacity: 1
        });
    });

});