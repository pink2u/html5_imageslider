$(document).ready(function(){
    //마우스 오버가 되면 Loop를 중단하는
    //이미지 슬라이더
    // (EVENT)

    // $("#slider ul li").eq(1).hide();
    // $("#slider ul li").eq(2).hide(); 
    $("#slider ul li").eq(1).hide().next().hide();

    var loop;

    //Element에 마우스가 떠났을 때
    function start(){
        loop = setInterval(function(){
            $("#slider ul li").eq(0).fadeOut(2000).next().fadeIn(1000)
            .end().appendTo($("#slider ul"));
            },3000);

    }
    //Element에 마우스가 들어왔을 때
    function stop(){
        clearInterval(loop);
    }

    start();

    //마우스 오버 이벤트
    $("#slider ul li").hover(function(){
        stop();
    },function(){
        start();
    });
 
});
