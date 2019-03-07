$(window).on('load', function(){
    setTimeout(removeLoader, 2000); 
    });
    setTimeout(() => {
        $(".introduction .title").css("line-height","120px")
    }, 4000)
    setTimeout(() => {
        $(".introduction .subtitle").css("display","block")
    }, 4000)
    function removeLoader(){
        $( "body").css("overflow-y", "auto");
        $(".loading-text").css("opacity", "0");
        $( "#loadingDiv" ).fadeOut(2000, function() {
            $( "#loadingDiv" ).remove();
    });  
}
  

$(document).ready(function(){
    var mouseX, mouseY;
    var ww = $( window ).width();
    var wh = $( window ).height();
    
    var traX, traY;
    $(document).mousemove(function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
      traX = ((4 * mouseX) / 570) + 50;
      traY = ((4 * mouseY) / 570) + 25;
      $(".title").css({"background-position": traX + "%" + traY + "%"});
    });

    $("#menu").click(function(e){
        $(this).toggleClass("active")
        $("#header").toggleClass("active")
    })

    $("#to_matcha").click(function(e) {
        e.preventDefault();
        $.scrollTo($("#matcha"), 1000);
    });

  });
  