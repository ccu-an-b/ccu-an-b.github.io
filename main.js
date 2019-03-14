const section = ['home', 'about', 'projects', 'media']
let index = 0;
let isUser = false;
let project = 1;

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
        $.scrollTo($("#home"), 0);
        // $( "body").css("overflow-y", "auto");
        $(".loading-text").css("opacity", "0");
        $( "#loadingDiv" ).fadeOut(2000, function() {
        $( "#loadingDiv" ).remove();
        isUser=true;
    });  
}

$(window).bind('mousewheel', function (e) {

    e.preventDefault();

    if ($(window).width() > 800 && $(window).height() >= 666){
        if (e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0){
            if (index === 2 && project !== 4 && isUser)
            {
                isUser = false
                project +=1;
                $(`.pagination-container div:nth-child(${project}) .project-page`).trigger( "click" )
                setTimeout(() => {isUser=true;},500)
            }
            else if (index !== 3 && isUser)
            {
                isUser = false
                index +=1;
                $.scrollTo($(`#${section[index]}`), 1000);
                setTimeout(() => {isUser=true;},1200)
            }
        }
        else {
            if (index === 2 && project !== 1 && isUser)
            {
                isUser = false
                project -=1;
                $(`.pagination-container div:nth-child(${project}) .project-page`).trigger( "click" )
                setTimeout(() => {isUser=true;},500)
            }
            else if (index !== 0 && isUser)
            {
                isUser = false
                index -=1;
                $.scrollTo($(`#${section[index]}`), 1000);
                setTimeout(() => {isUser=true;},1200)
            }
        }
    }
    return false;

})

$(document).ready(function(){
    resize()
    
    var mouseX, mouseY;
    var traX, traY;

    $(document).mousemove(function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
      traX = ((4 * mouseX) / 570) + 50;
      traY = ((4 * mouseY) / 570) + 15;
      $(".title").css({"background-position": traX + "%" + traY + "%"});
    });

    $("#menu").click(function(e){
        $(this).toggleClass("active")
        $("#header").toggleClass("active")
    })

    $("#to_about_button").click(function(e) {
        e.preventDefault();
        isUser = false
        $.scrollTo($("#about"), 1000);
        setTimeout(() => {isUser=true;},1200)
    });
    $("#to_project_button").click(function(e) {
        e.preventDefault();
        isUser = false
        $.scrollTo($("#projects"), 1000);
        setTimeout(() => {isUser=true;},1200)
    });
    


//----------- H E A D E R  L I N K -----------//
$(".header #to_home").click(function(e) {
    e.preventDefault();
    isUser = false
    $("#menu").trigger( "click" );
    setTimeout(() => {$.scrollTo($("#home"), 1000)},500);
    setTimeout(() => {isUser=true;},2500);
    index = 0;
});
$(".header #to_about").click(function(e) {
    e.preventDefault();
    isUser = false
    $("#menu").trigger( "click" );
    setTimeout(() => {$.scrollTo($("#about"), 1000)},500)
    setTimeout(() => {isUser=true;},2500)
    index = 1;
});
$(".header #to_projects").click(function(e) {
    e.preventDefault();
    isUser = false
    $("#menu").trigger( "click" );
    setTimeout(() => {$.scrollTo($("#projects"), 1000)}, 500);
    setTimeout(() => {isUser=true;},2500);
    index = 2;
});
$(".header #to_media").click(function(e) {
    e.preventDefault();
    isUser = false
    $("#menu").trigger( "click" );
    setTimeout(() => {$.scrollTo($("#media"), 1000)},1000);
    setTimeout(() => {isUser=true;},2500);
    index = 3;
});


//----------- O N  R E S I Z E -----------//
window.addEventListener('resize', function(){
    resize()
}, true);

function resize(){
    const ratio = $(window).width()/$(window).height()
    if($(window).width() > 800 && $(window).height() < 980 && $(window).height() >= 666)
        $('.media').addClass('height'); 
    else {
        $('.media').removeClass('height'); 
    }

    if($(window).width() < 800 || $(window).height() < 666)
        $( "body").css("overflow-y", "auto");

    if($(window).width() > 800 && $(window).height() >= 666)
        $( "body").css("overflow-y", "hidden");
    

    if (ratio > 1.8 && $(window).width() > 800){
        $('.screenshots').addClass('height'); 
    }
    else {
        $('.screenshots').removeClass('height'); 
    }
} 
  
//----------- C H A N G E  P R O J E C T -----------//
    $('.project-page').click(function(e) {
        if ($(this).attr('class').search("active") === -1){
            $('.project-page').removeClass('active')
            $('.one-project').removeClass('active')
            $(`#${$(this).attr('id')}.project-page`).addClass('active')
            $(`#${$(this).attr('id')}.one-project`).addClass('active')
        }
    })
});
  