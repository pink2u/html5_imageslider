$(document).ready(function(){

    var $items = $("#slider ul  .item");
    console.log($items);

    var currentIndex = 0;

    //setTimeout(function() {}, 1000) 시간지연함수

    setInterval(function(){ 
         if(currentIndex >2){
             currentIndex=0
         }
         $items.removeClass("active");
         $items.eq(currentIndex++).addClass("active")
         console.log(currentIndex);
    }, 2000);
});