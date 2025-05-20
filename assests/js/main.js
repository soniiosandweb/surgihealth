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

    // Related Product Slider
    $('.related_products_slider').slick({
        infinite: true,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 4,
        adaptiveHeight: false,
        autoplay: false,
        arrows: true,
        prevArrow: $(".related_back_arrow"),
        nextArrow: $(".related_next_arrow"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 578,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Poduct Variant select
    $('input[type=radio][name=variant]').on('change', function() {
        if ($(this).is(':checked')) {
            $('.btn-radio-select').removeClass('active');
            $(this).parent('.btn-radio-select').addClass('active');
        } else {
            $('.btn-radio-select').removeClass('active');
        }
        
    });

    // Product gallery slider
    if($('.product_slider_selection')){
        var thumbs = $('.product_slider_selection').find('img');

        thumbs.click(function(){
            var src = $(this).attr('src');
            var dp = $('.product-display-img');
            var img = $('.zoom');
            dp.attr('src', src);
            img.attr('src', src);
        });

        $(".product-thumbnail").click(function(){
            $('.product-thumbnail').removeClass('selected');
            $(this).addClass('selected');
        });

        var zoom = $('.product-large-image').find('img').attr('src');
        $('.product-large-image').append('<img class="zoom" src="'+zoom+'">');
        $('.product-large-image').mouseenter(function(){
            $(this).mousemove(function(event){
                var offset = $(this).offset();
                var left = event.pageX - offset.left;
                var top = event.pageY - offset.top;
                
                $(this).find('.zoom').css({
                    width: '200%',
                    opacity: 1,
                    left: -left,
                    top: -top,
                });
            });
        });

        $('.product-large-image').mouseleave(function(){
            $(this).find('.zoom').css({
                width: '100%',
                opacity: 0,
                left: 0,
                top: 0,
            });
        });
    }

    
});