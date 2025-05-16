jQuery(document).ready(function($){

    // header toggle mobile menu
    $("#mobiletoggle").click(function(){
        $("#mainnavbar").addClass("show");
    });

    $("#mobiletoggle_close").click(function(){
        $("#mainnavbar").removeClass("show");
    });

    // fixed header
    $(window). scroll(function() {
        var scroll = $(window). scrollTop();
        if (scroll >= 60) {
            $('.header_main'). addClass("fixed");
        } else {
            $('.header_main'). removeClass("fixed");
        }
    });

    // Banner slick slider
    $('.banner_slick_slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: false,
        arrows: false,
    });

    // News slick slider
    $('.latest_news_slider').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplay: false,
        arrows: true,
        prevArrow: $(".back_arrow"),
        nextArrow: $(".next_arrow"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});