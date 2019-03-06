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
  });
  