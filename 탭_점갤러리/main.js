$(function(){
    
    let tabBtn=$('.main_menu>li>a');
    let tabCon=$('section');

    tabBtn.click(function(e){
        //a태그 기본 링크 제거
        e.preventDefault();
        // on 클래스 제거 / 생성
        tabBtn.removeClass('on');
        $(this).addClass('on');
        // section 안보이고 보이게
        // hide(); / show();
        tabCon.hide();
        let target=$(this).attr('href');

        $(target).show();

    });
            
});//end