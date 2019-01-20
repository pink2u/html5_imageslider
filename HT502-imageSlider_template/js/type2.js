$(document).ready(function(){
    $("#slider ul li").eq(1).hide();
    $("#slider ul li").eq(2).hide();

    // $("#slider ul li:nth-child(2)").hide();  //가상 선택 child
    // $("#slider ul li:nth-child(3)").hide();

    setInterval(function(){
        $("#slider ul li:first-of-type")
        .fadeOut(2000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo($("#slider ul"));

        // 좀 더 짧게 코딩한다.
        // $("#slider ul li:first-of-type").fadeOut();
        // $("#slider ul li:nth-child(2)").fadeIn();
        // $("#slider ul").append($("#slider ul li:first-of-type"));
    }, 3000);
});
