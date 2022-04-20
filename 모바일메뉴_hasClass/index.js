$(function(){
    
    let i=0;

    $('button').click(function(){
        if(i==0){
            $('#m_menubox').animate({
                left:'20%',
            });
            i++;
        }else if(i==1){
            $('#m_menubox').animate({
                left: '100%'
            });
            i--;
        }
    });
    // hasClass / classList.contains();
    //=> 특정 클래스값을 가지고 있는지 없는지

    $('.m_topmenu').click(function(){// .m_topmenu의 자식인 .m_submenu에게 on 클래스값을 가지고 있는지 확인
        if($(this).children('.m_submenu').hasClass('on')===true){
            //removeClass
            $(this).children('.m_submenu').removeClass('on');
        }else{
            $('.m_submenu').removeClass('on'); // 선택된 메뉴 말고는 사라지게
            $(this).children('.m_submenu').addClass('on');
        }
    });


















});//end