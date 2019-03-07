$(window).on('load', function(){
    setTimeout(removeLoader, 2000); 
    });
    setTimeout(() => {
        $(".introduction .title").toggleClass("show")
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
      traY = ((4 * mouseY) / 570) + 20;
      $(".title").css({"background-position": traX + "%" + traY + "%"});
    });

    $("#menu").click(function(e){
        $(this).toggleClass("active")
        $("#header").toggleClass("active")
    })

    $("#to_about_button").click(function(e) {
        e.preventDefault();
        $.scrollTo($("#about"), 1000);
    });
    


//----------- H E A D E R  L I N K -----------//
$(".header #to_home").click(function(e) {
    e.preventDefault();
    $("#menu").trigger( "click" );
    setTimeout(() => {$.scrollTo($("#home"), 1000)},500)
});
$(".header #to_about").click(function(e) {
    e.preventDefault();
    $("#menu").trigger( "click" );
    setTimeout(() => {$.scrollTo($("#about"), 1000)},500)
});
$(".header #to_projects").click(function(e) {
    e.preventDefault();
    $("#menu").trigger( "click" );
    setTimeout(() => {$.scrollTo($("#projects"), 1000)}, 500)
});
$(".header #to_media").click(function(e) {
    e.preventDefault();
    $("#menu").trigger( "click" );
    setTimeout(() => {$.scrollTo($("#media"), 1000)},1000)
});

  });
  