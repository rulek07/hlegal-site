
//___________Header__buttons___________

    $(document).ready(function (){
        $('#button-1, #button1-1, #button-sm-1').on('click',function(){
            $('#button-1, #button1-1, #button-sm-1').addClass('active');
        })
        $('#button-1, #button1-1, #button-sm-1').on('click',function(){
            $('#button-2, #button-3, #button2-2, #button3-3, #button-sm-2, #button-sm-3').removeClass('active');
        })
    });

    $(document).ready(function (){
        $('#button-2, #button2-2, #button-sm-2').on('click',function(){
            $('#button-2, #button2-2, #button-sm-2').addClass('active');
        })
        $('#button-2, #button2-2, #button-sm-2').on('click',function(){
            $('#button-1, #button-3, #button1-1, #button3-3, #button-sm-1, #button-sm-3').removeClass('active');
        })
    });

    $(document).ready(function (){
        $('#button-3, #button3-3, #button-sm-3').on('click',function(){
            $('#button-3, #button3-3, #button-sm-3').addClass('active');
        })
        $('#button-3, #button3-3, #button-sm-3').on('click',function(){
            $('#button-1, #button-2, #button1-1, #button2-2, #button-sm-1, #button-sm-2').removeClass('active');
        })
    });

//__________Showed-content__________

    $(document).ready(function (){
        $('#showed-content-link-1, #showed-content-link-slick-1').on('click',function(){
            $('#showed-content-1').addClass('show');
            $('#showed-content-link-1, #showed-content-link-slick-1').addClass('color');
        })
        $('#showed-content-link-1, #showed-content-link-slick-1').on('click',function(){
            $('#showed-content-2, #showed-content-3, #showed-content-4').removeClass('show');
            $('#showed-content-link-2, #showed-content-link-3, #showed-content-link-4, #showed-content-link-slick-2, #showed-content-link-slick-3, #showed-content-link-slick-4').removeClass('color');
        })
    });

    $(document).ready(function (){
        $('#showed-content-link-2, #showed-content-link-slick-2').on('click',function(){
            $('#showed-content-2').addClass('show');
            $('#showed-content-link-2, #showed-content-link-slick-2').addClass('color');
        })
        $('#showed-content-link-2, #showed-content-link-slick-2').on('click',function(){
            $('#showed-content-1, #showed-content-3, #showed-content-4').removeClass('show');
            $('#showed-content-link-1, #showed-content-link-3, #showed-content-link-4, #showed-content-link-slick-1, #showed-content-link-slick-3, #showed-content-link-slick-4').removeClass('color');
        })
    });

    $(document).ready(function (){
        $('#showed-content-link-3, #showed-content-link-slick-3').on('click',function(){
            $('#showed-content-3').addClass('show');
            $('#showed-content-link-3, #showed-content-link-slick-3').addClass('color');
        })
        $('#showed-content-link-3, #showed-content-link-slick-3').on('click',function(){
            $('#showed-content-1, #showed-content-2, #showed-content-4').removeClass('show');
            $('#showed-content-link-1, #showed-content-link-2, #showed-content-link-4, #showed-content-link-slick-1, #showed-content-link-slick-2, #showed-content-link-slick-4').removeClass('color');
        })
    });

    $(document).ready(function (){
        $('#showed-content-link-4, #showed-content-link-slick-4').on('click',function(){
            $('#showed-content-4').addClass('show');
            $('#showed-content-link-4, #showed-content-link-slick-4').addClass('color');
        })
        $('#showed-content-link-4, #showed-content-link-slick-4').on('click',function(){
            $('#showed-content-1, #showed-content-2, #showed-content-3').removeClass('show');
            $('#showed-content-link-1, #showed-content-link-2, #showed-content-link-3, #showed-content-link-slick-1, #showed-content-link-slick-2, #showed-content-link-slick-3').removeClass('color');
        })
    });

    //__________Swyper__________

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            mousewheel: true,
            keyboard: true,
        },
    });

    var swiper = new Swiper(".achievements__swyper", {
        spaceBetween: 40,
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            mousewheel: true,
            keyboard: true,
        },
    });


    //___________Slick___________  

    $(document).ready(function(){
        $('.slider').slick({
            slidesToShow: 1,
            focusOnSelect: false,
            infinite: true,
            arrows: false,
        });
    });

    //___________Menu___________

    $(document).ready(function (){
        $('#menu').on('click',function(){
            $('#box__menu').addClass('open');
        })
        $('#close').on('click',function(){
            $('#box__menu').removeClass('open');

        })
    });

    // ___________Validator___________

    $(document).ready(function () {
        $("#phonenumber").inputmask("+38 (099) 999-99-99");
    });

    $(document).ready(function (){
        $('#consultation').on('click',function(){
            $('#popup').addClass('active');
        })
        $('#popup__close').on('click',function(){
            $('#popup').removeClass('active');
        })
    });

    // ___________Counter___________

    var time = 2,
        cc = 1;
    $(window).ready(function() {
    $('#counter').ready(function() {
        var
        topWindow = $(window).ready();
        if (topWindow) {
        if (cc < 2) {
            $(".intro__advantages-num").addClass("viz");
            $('div').each(function() {
            var
                i = 1,
                num = $(this).data('num'),
                step = 1000 * time / num,
                that = $(this),
                int = setInterval(function() {
                if (i <= num) {
                    that.html(i);
                } else {
                    cc = cc + 2;
                    clearInterval(int);
                }
                i++;
                }, step);
            });
        }
        }
    });
    });