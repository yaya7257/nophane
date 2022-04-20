$(document).ready(function () {
    $(".header .menushow").click(function (e) { 
        e.preventDefault();
        $("body").toggleClass("show-menu");
    });
    $(".qa h1").click(function (e) { 
        e.preventDefault();
        $(this).toggleClass("active");
        $(this).parent().siblings().find("h1").removeClass("active");
        $(this).parent().siblings().find("p").slideUp();
        $(this).parent().find("p").slideToggle();
    });
});