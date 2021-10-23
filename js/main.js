/* main.js */

var $devWidth;
var $limitsize = 768;

$(document).ready(function(){
    $devWidth = $("body").width();
    console.log($devWidth);

    $(window).resize(function(){
        $devWidth = $("body").width();
        console.log($devWidth);
    });
    
    $("html, body").stop().animate({scrollTop:0},500,"linear");

    // 햄버거 버튼 클릭
    $("div.mobBtn").click(function(){
        $("div.mob").addClass("on");
        $("div.mobBtn_close").addClass("on");
        $("body").addClass("on");
        $("div.bg").addClass("on");
        $(this).hide();
    });

    // 모바일 닫기버튼클릭
    $("div.mobBtn_close").click(function(){
        $("div.mob").removeClass("on");
        $("div.mobBtn_close").removeClass("on");
        $("body").removeClass("on");
        $("div.bg").removeClass("on");
        $("div.mobBtn").show();
    });

    /* 모바일 고객센터 */
    $("dl.mob_topMenu dd").eq(4).click(function(){
        $(this).toggleClass("on");

        if($(this).hasClass("on")){
            $(this).children("a").attr("title","고객센터 닫기");
        }else{   
            $(this).children("a").attr("title","고객센터 열기");
        }
    });

    /* 모바일 주메뉴 2단 */
    $(".mob_gnb > ul > li").click(function(){
        $(this).siblings().removeClass("on");
        $(this).toggleClass("on");
    });

    /* 고객센터 */
    $("dl.topMenu > dd").eq(4).click(function(){
        $(this).toggleClass("on");
    });

    /* 주메뉴 */
    $(".gnb>ul>li>a").bind("mouseover focus",function(){
        if($devWidth < $limitsize) return (false);//함수 실행 정지
        if($("form.srch").is(":visible")){//hasClass와 비교
            $("form.srch").removeClass("on");
            $(".srch_open").removeClass("on");
        }

        if($("dl.topMenu > dd").eq(4).hasClass("on")){//:visible과 비교
            $("dl.topMenu > dd").eq(4).removeClass("on")
        }

        $(".header_wrap").animate({"height":"445px"},300,"linear",function(){
            $(".gnb>ul>li>ul").css("display","block");
        });
    });

    $(".gnb").bind("mouseleave blur",function(){
        if($devWidth < $limitsize) return (false);//함수 실행 정지
        $(".header_wrap").animate({"height":"120px"},300,"linear",function(){
            $(".gnb>ul>li>ul").css({"display":"none"});
        });
    });

    /* 검색열기 */
    $("span.srch_open").click(function(){
        $(this).toggleClass("on");
        $("form.srch").toggleClass("on");
    });

    /* 로그인 이미지 */
    var appear = "";
    for(var i = 0; i < 57; i++){
        if(i<10){
            appear += "<img src='images/appear/appear_0000" + i + ".png' alt'로그인버튼" + i + "' />";
        }else{
            appear += "<img src='images/appear/appear_000" + i + ".png' alt'로그인버튼" + i + "' />";
        }
    }
    $("a.appear").html(appear);

    var loop = "";
    for(i = 0; i < 82; i++){
        if(i < 10){
            loop += "<img src='images/loop/loop_0000" + i + ".png' alt='로그인버튼" + i +"'>";
        }else{
            loop += "<img src='images/loop/loop_000" + i + ".png' alt='로그인버튼" + i +"'>";
        }
    }
$("a.loop").html(loop);

    /* 로그인 애니메이션 */
    for(var k = 0; k < 57; k++){
        $(".appear>img").eq(k).css({"animation":"ani 2.85s linear " + 0.05 * k + "s 1 normal"});
    }

    for(var j = 0; j < 82; j++){
        $(".loop>img").eq(j).css({"animation":"ani 4.1s linear " + (2.85 + 0.05 * j) + "s infinite normal"});
    }

    /* 배너 */
    var $bnnNum = 0;
    var $lastNum = $(".banner_frame>section").size() - 1;
    var $banner_w = $("body>section").width();

    //리사이즈
    $(window).resize(function(){
        $banner_w = $("body>section").width();
    });

    //다음
    $(".next").click(function(){
        $bnnNum++;
        if($bnnNum > $lastNum) $bnnNum = 0;
        $(".banner_frame").stop().animate({"left":-$bnnNum * $banner_w},600,"linear",function(){

            if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
                // ".arrow a" ".rolling a"에 .btn따로 지정해줘도 됨(가독성 높아짐, css도 수정해야함)
                $(this).siblings().find("a").addClass("wbtn");
            }else{
                // ".arrow a" ".rolling a"에 .btn따로 지정해줘도 됨(가독성 높아짐, css도 수정해야함)
                $(this).siblings().find("a").removeClass("wbtn");
            }
            
            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    });

    //이전
    $(".prev").click(function(){
        $bnnNum--;
        if($bnnNum < 0) $bnnNum = $lastNum;
        $(".banner_frame").stop().animate({"left":-$bnnNum * $banner_w},600,"linear",function(){
            
            if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
                // ".arrow a" ".rolling a"에 .btn따로 지정해줘도 됨(가독성 높아짐, css도 수정해야함)
                $(this).siblings().find("a").addClass("wbtn");
            }else{
                // ".arrow a" ".rolling a"에 .btn따로 지정해줘도 됨(가독성 높아짐, css도 수정해야함)
                $(this).siblings().find("a").removeClass("wbtn");
            }
            
            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    });

        /* 오토배너 */
        function autoBanner(){
            //next버튼 눌렀을때
            $bnnNum++;
            if($bnnNum > $lastNum) $bnnNum = 0;
            $(".banner_frame").stop().animate({"left":-$bnnNum * $banner_w},600,"linear",function(){
    
                if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
                    // ".arrow a" ".rolling a"에 .btn따로 지정해줘도 됨(가독성 높아짐, css도 수정해야함)
                    $(this).siblings().find("a").addClass("wbtn");
                }else{
                    // ".arrow a" ".rolling a"에 .btn따로 지정해줘도 됨(가독성 높아짐, css도 수정해야함)
                    $(this).siblings().find("a").removeClass("wbtn");
                }
                
                $(".banner_roll a").removeClass("on");
                $(".banner_roll a").eq($bnnNum).addClass("on");
            });
        }

        //일정한 시간동안 계속반복
        var $autoBnn = setInterval(autoBanner,5000);

        /* 재생멈춤 */
        var flag = true;
        $("a.play").click(function(){
            if(flag){
                //멈춰라
                clearInterval($autoBnn);
                $(this).addClass("pause");
                flag = false;
            }else{
                //재생
                $autoBnn = setInterval(autoBanner,5000);
                $(this).removeClass("pause");
                flag = true;
            }
        });

        /* 롤링클릭 */
        var $banner = $(".banner_roll a").click(function(){
            $bnnNum = $banner.index(this);

            $(".banner_frame").stop().animate({"left":-$bnnNum * $banner_w},600,"linear",function(){
    
                if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
                    // ".arrow a" ".rolling a"에 .btn따로 지정해줘도 됨(가독성 높아짐, css도 수정해야함)
                    $(this).siblings().find("a").addClass("wbtn");
                }else{
                    // ".arrow a" ".rolling a"에 .btn따로 지정해줘도 됨(가독성 높아짐, css도 수정해야함)
                    $(this).siblings().find("a").removeClass("wbtn");
                }
                
                $(".banner_roll a").removeClass("on");
                $(".banner_roll a").eq($bnnNum).addClass("on");
            });


        //모바일 기기의 방향을 전환(가로/세로)할 때 화면의 너비가 달라지는 것에 대비해서 항상 바른 위치에 있도록 애니메이션 적용
        $("body>section").bind("orientationchange",function(){
            $banner_w = $("body>section").width();
            $(".banner_frame").animate({"left":-$bnnNum * $banner_w},600,"linear");
        });

        //모바일에서
        $("body>section").bind("swipeleft",function(){
            $(".next").trigger("click");
        });
        $("body>section").bind("swiperight",function(){
            $(".prev").trigger("click");
        });
    });//괄호처리 잘못됨 디버깅하기
    /* 퀵메뉴 이미지 */
    var quick1 = "";
    for(var i = 0;i < 20; i++){
        if(i < 10){
            quick1 += "<img src='images/quick01/quick01_0000" + i + ".png' alt='포인트적립처" + i +"'>";
        }else{
            quick1 += "<img src='images/quick01/quick01_000" + i + ".png' alt='포인트적립처" + i +"'>";
        }
    }
    $(".quick1").html(quick1);

    var quick2 = "";
    for(var i = 0;i < 20; i++){
        if(i < 10){
            quick2 += "<img src='images/quick02/quick02_0000" + i + ".png' alt='포인트적립처" + i +"'>";
        }else{
            quick2 += "<img src='images/quick02/quick02_000" + i + ".png' alt='포인트적립처" + i +"'>";
        }
    }        
    $(".quick2").html(quick2);

    var quick3 = "";
    for(var i = 0;i < 20; i++){
        if(i < 10){
            quick3 += "<img src='images/quick03/quick03_0000" + i + ".png' alt='포인트적립처" + i +"'>";
        }else{
            quick3 += "<img src='images/quick03/quick03_000" + i + ".png' alt='포인트적립처" + i +"'>";
        }
    }
    $(".quick3").html(quick3);

    var quick4 = "";
    for(var i = 0;i < 20; i++){
        if(i < 10){
            quick4 += "<img src='images/quick04/quick04_0000" + i + ".png' alt='포인트적립처" + i +"'>";
        }else{
            quick4 += "<img src='images/quick04/quick04_000" + i + ".png' alt='포인트적립처" + i +"'>";
        }
    }
    $(".quick4").html(quick4);

    //마우스를 올렸을때
    $(".content1 a").hover(function(){
        //마우스를 올렸을때
        for(var k = 0; k < 20; k++){
            $(this).find("span").children().eq(k).css({"animation":"ani 1s linear " + 0.05 * k + "s 1 normal"});
        }
    },function(){
        //마우스를 땟을때
        $(this).find("span").children().css({"animation":"none"});
    });



    // content3
    // 마우스 올렸을때
    $(".content3_inner > div > ul > li").hover(function(){
        $(this).addClass("on");
    },function(){
        $(this).removeClass("on");
    });

    // 대분류
    $(".content3_inner > ul > li > a").bind("click focus",function(e){
        e.preventDefault();
        $(".content3_inner > ul > li").removeClass("on");
        $(this).parent().addClass("on");

        var idx = $(this).parent().index();

        $(".content3_inner > div > ul > li").hide();

        switch(idx){
            case 0:
                $(".content3_inner > div > ul > li").show();
                break;
            case 1:
                $(".content3_inner > div > ul").find(".ent").show();
                break;
            case 2:
                $(".content3_inner > div > ul").find(".shop").show();
                break;
            case 3:
                $(".content3_inner > div > ul").find(".dinner").show();
                break;
            case 4:
                $(".content3_inner > div > ul").find(".box").show();
                break;
        }


    });

    // 패밀리 사이트
    $(".family_site").click(function(e){
        e.preventDefault();
        $(this).toggleClass("on");

        if($(this).hasClass("on")){
            $(this).children("a").attr("title","닫기");
        }else{
            $(this).children("a").attr("title","열기");
        }
    });


    /* 스크롤 이벤트 */
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        //console.log(scroll);
        //top
        if(scroll < 200){
            $("div.top").removeClass("on ab");
        }

        if(scroll >= 200 && scroll < 2800){
            $("div.top").removeClass("ab");
            $("div.top").addClass("on");
        }

        if(scroll >= 2800){
            $("div.top").addClass("ab");
        }

        // 도넛
        $(".doughnut_Left_L").css({"top":71+scroll*0.5});//휙휙 안바뀌게 스크롤값의 배수로
        $(".doughnut_Left_s").css({"top":796+scroll*1.1});
        $(".combine_Left").css({"top":1726-scroll*0.1});

        $(".doughnut_Center_M").css({"top":722+scroll*0.1});
        $(".doughnut_Center_s").css({"top":991+scroll*1.1});

        $(".doughnut_right_M").css({"top":365+scroll*0.5});
        $(".doughnut_right_s").css({"top":947+scroll*0.1});
        $(".combine_right").css({"top":-300+scroll*0.7});
    });



});