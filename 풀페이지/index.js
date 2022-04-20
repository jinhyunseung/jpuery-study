$(function(){
    let ww=$(window).width();
    let wh=$(window).height();

    let bg=['red','yellow','green','blue'];

    $('section').css({
        width: ww,
        height: wh,
        backgroundColor: function(index){
            return bg[index];
        },
        lineHeight: wh+'px',
    });

    // 바로바로 브라우저 크기값 반영 되도록!! 만들기~!
    // 함수사용해서 만들기
    




});//end