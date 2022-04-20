$(function(){
    let ww=$(window).width();


    layout();
    function layout(){
        if(ww>=1200){
            $('#box').css({
                width: 1000,
                height: 500,
                backgroundColor: 'red',
                margin: '0 auto',
                float: 'none' // margin 보다 우선순위가 높으므로 none처리를 해서 다시 키울때 margin값이 반영되도록 함
            });
        }else if(ww<1200 && ww>=960){
            $('#box').css({
                width: 800,
                height: 600,
                backgroundColor: 'yellow',
                float: 'right'
            });
        }else if(ww<960){
            $('#box').css({
                width: 600,
                height: 700,
                backgroundColor: 'blue',
                float: 'left'
            });
        }
    };
    //css속성이 수정은 되지만 자동추가, 삭제는 되지 않음

    
    // 연속적인 흐름으로 if작성 됨
    /*
    if(ww>=1200){
        $('#box').css({
            width: 1000,
            height: 500,
            backgroundColor: 'red',
            margin: '0 auto'
        });
    }else if(ww<1200 && ww>=960){
        $('#box').css({
            width: 800,
            height: 600,
            backgroundColor: 'yellow',
            margin: '0 auto'
        });
    }else if(ww<960){
        $('#box').css({
            width: 600,
            height: 700,
            backgroundColor: 'blue',
            margin: '0 auto'
        });
    }
    */

    //리사이즈
    //윈도우의 가로 세로 크기가 변경되면
    //자동으로 새로운 윈도우 크기를 읽어서 적용할 수 있는 이벤트
    // $(window).resize(function(){
    //     실행식
    // });
    $(window).resize(function(){
        layout();
        ww=$(window).width();// 전역변수 변환 
    });

});//end