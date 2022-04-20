$(document).ready(function(){

    // 1. 윈도우 가로크기 설정
    let ww=$(window).width();
    
    // 2. 윈도우 세로크기 설정
    let wh=$(window).height();

    // 3. 전체영역 여백값 초기화
    $('*').css({
        margin: 0,
        padding: 0,
    });

    // 4. wrap 스타일
    $('#wrap').css({
        width: ww,
        height: wh*4,
    });

    // 5. page 스타일
    let bg=['red','blue','yello','green','gray','wheat'];
    
    $('.page').css({
        width: ww,
        height: wh,
        backgroundColor: function(index){
            return bg[index];
        }   
    });

    // 6. in_page 스타일
    $('.in_page').css({
        width: ww*0.8,
        height: wh*0.8,
    });


    //////////////////// 이벤트 영역//////////////////////

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
            top: -wh*3,
        }, 1000);
    });

    $('#but4').click(function(){
        $('#wrap').animate({
             top: 0,
        }, 1000);
    });















});//end