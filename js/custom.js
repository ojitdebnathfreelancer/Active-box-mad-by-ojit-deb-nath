$(document).ready(function(){
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 300){
            $('.back-top').fadeIn();
        }
        else{
            $(".back-top").fadeOut();
        }

        if(scrolling > 100){
            $("nav").addClass("navfixed");
        }

        if(scrolling > 700){
            $("nav").addClass("nacColor");
        }

        else{
            $("nav").removeClass("nacColor");
        }
    });

    $(".back-top").click(function(){
        $("html,body").animate({
            scrollTop:"0px",
        },1000);
    });
});
