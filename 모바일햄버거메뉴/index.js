$(function(){
    $('.ham_but').click(function(e){
        //a태그 기본 링크 이벤트 제거
        e.preventDefault();

        // toggleClass => 요소에 클래스값이 없으면 더해주고 있으면 빼줌
        $(this).toggleClass('active');
        $('.menubox').toggleClass('visible');
        



    });



});//end