jQuery(document).ready(function($){

    // header toggle mobile menu
    $("#mobiletoggle").click(function(){
        $("#mainnavbar").addClass("show");
    });

    $("#mobiletoggle_close").click(function(){
        $("#mainnavbar").removeClass("show");
    });

    // Window resize close mobile toggle
    $(window).on('resize', function() {
        var windowWidth = $(window).width();

        if (windowWidth >= 992) {
            if($('#mainnavbar').hasClass('show')){
                $("#mainnavbar").removeClass("show");
            }
        }
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
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    dots: false,
                }
            }
        ]
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
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '60px',
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '20px',
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
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '60px',
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '60px',
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '30px',
                }
            }
        ]
    });

    $('.categories_right_tab .nav.nav-pills a[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
        $('.related_products_slider').slick('setPosition');
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

    // Video introduction
    if(document.getElementById("play_button") && document.getElementById("pause_button")) {
        let playButton = document.getElementById("play_button");
        let pauseButton = document.getElementById("pause_button");

        playButton.addEventListener("click", function() {
            video.play();
            playButton.classList.add('vplay');
            pauseButton.classList.remove('vpause');
            document.querySelector('html').classList.add('playvideo');
        });

        pauseButton.addEventListener("click", function() {
            video.pause();
            playButton.classList.remove('vplay');
            pauseButton.classList.add('vpause');
        });
        //Video Play Pause Control End

        //Video Sound on & off Ctrl Start
        let soundOff = document.getElementById("sound-off");
        let soundOn = document.getElementById("sound-on");
        let soundCtrl = document.querySelector(".sound-ctrl");

        soundOff.addEventListener("click", function() {
            video.muted = true;
            soundCtrl.classList.add('soundctrlshow');
        });

        soundOn.addEventListener("click", function() {
            video.muted = false;
            soundCtrl.classList.remove('soundctrlshow'); 
        });
        //Video Sound on & off Ctrl End
        video.onended = function() {
            document.querySelector('html').classList.remove('playvideo');
            playButton.classList.remove('vplay');
        };
    }

    // How to order page tabs
    if($('.ordering_tabs_block')) {
        $('.ordering_block_header .block_heading').click(function(e){
            var element = $(this).attr('data-id');

            $('.ordering_block_header .block_heading').removeClass('active');
            $('.ordering_contents_text').removeClass('active');

            $(this).addClass('active');
            $('.ordering_contents_text[data-id = '+element+']').addClass('active');
        });
    }

    // Cart Modal
    // $("#cartModal").modal({
    //     show: false,
    //     backdrop: 'static'
    // });

    // Cart quantity change
    $('.btn-minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.btn-plus').click(function () {
		var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) + 1;
		count = isNaN(count) ? 1 : count;
		$input.val(count);

		$input.change();
		return false;
	});

    // Number only in quantity
    $(document).on("input", ".product_qty", function() {
        this.value = this.value.replace(/\D/g,'');
    });

    // International Phone Number
    const input = document.querySelector("#contactno");
    if(input) {
        window.intlTelInput(input, {
            initialCountry: "in",
            countrySearch: false,
            loadUtils: () => import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.1/build/js/utils.js"),
        });
    }
    
    // Password toggle
    $(".toggle-password").click(function() {

        $(this).toggleClass("fi-rr-eye fi-rr-eye-crossed");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

});