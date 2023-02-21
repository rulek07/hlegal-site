
//___________Header__buttons___________

    $(document).ready(function (){
        $('#button-1').on('click',function(){
            $('#button-1').addClass('active');
        })
        $('#button-1').on('click',function(){
            $('#button-2').removeClass('active');
            $('#button-3').removeClass('active');
        })
    });

    $(document).ready(function (){
        $('#button-2').on('click',function(){
            $('#button-2').addClass('active');
        })
        $('#button-2').on('click',function(){
            $('#button-1').removeClass('active');
            $('#button-3').removeClass('active');
        })
    });

    $(document).ready(function (){
        $('#button-3').on('click',function(){
            $('#button-3').addClass('active');
        })
        $('#button-3').on('click',function(){
            $('#button-1').removeClass('active');
            $('#button-2').removeClass('active');
        })
    });

    $(document).ready(function (){
        $('#button1-1').on('click',function(){
            $('#button1-1').addClass('active');
        })
        $('#button1-1').on('click',function(){
            $('#button2-2').removeClass('active');
            $('#button3-3').removeClass('active');
        })
    });

    $(document).ready(function (){
        $('#button2-2').on('click',function(){
            $('#button2-2').addClass('active');
        })
        $('#button2-2').on('click',function(){
            $('#button1-1').removeClass('active');
            $('#button3-3').removeClass('active');
        })
    });

    $(document).ready(function (){
        $('#button3-3').on('click',function(){
            $('#button3-3').addClass('active');
        })
        $('#button3-3').on('click',function(){
            $('#button1-1').removeClass('active');
            $('#button3-2').removeClass('active');
        })
    });

    $(document).ready(function (){
        $('#button-sm-1').on('click',function(){
            $('#button-sm-1').addClass('active');
        })
        $('#button-sm-1').on('click',function(){
            $('#button-sm-2').removeClass('active');
            $('#button-sm-3').removeClass('active');
        })
    });

    $(document).ready(function (){
        $('#button-sm-2').on('click',function(){
            $('#button-sm-2').addClass('active');
        })
        $('#button-sm-2').on('click',function(){
            $('#button-sm-1').removeClass('active');
            $('#button-sm-3').removeClass('active');
        })
    });

    $(document).ready(function (){
        $('#button-sm-3').on('click',function(){
            $('#button-sm-3').addClass('active');
        })
        $('#button-sm-3').on('click',function(){
            $('#button-sm-1').removeClass('active');
            $('#button-sm-2').removeClass('active');
        })
    });

//__________Showed-content__________

    $(document).ready(function (){
        $('#showed-content-link-1').on('click',function(){
            $('#showed-content-1').addClass('show');
            $('#showed-content-link-1').addClass('color');
        })
        $('#showed-content-link-1').on('click',function(){
            $('#showed-content-2').removeClass('show');
            $('#showed-content-3').removeClass('show');
            $('#showed-content-4').removeClass('show');
            $('#showed-content-link-2').removeClass('color');
            $('#showed-content-link-3').removeClass('color');
            $('#showed-content-link-4').removeClass('color');
        })
    });

    $(document).ready(function (){
        $('#showed-content-link-2').on('click',function(){
            $('#showed-content-2').addClass('show');
            $('#showed-content-link-2').addClass('color');
        })
        $('#showed-content-link-2').on('click',function(){
            $('#showed-content-1').removeClass('show');
            $('#showed-content-3').removeClass('show');
            $('#showed-content-4').removeClass('show');
            $('#showed-content-link-1').removeClass('color');
            $('#showed-content-link-3').removeClass('color');
            $('#showed-content-link-4').removeClass('color');
        })
    });

    $(document).ready(function (){
        $('#showed-content-link-3').on('click',function(){
            $('#showed-content-3').addClass('show');
            $('#showed-content-link-3').addClass('color');
        })
        $('#showed-content-link-3').on('click',function(){
            $('#showed-content-1').removeClass('show');
            $('#showed-content-2').removeClass('show');
            $('#showed-content-4').removeClass('show');
            $('#showed-content-link-1').removeClass('color');
            $('#showed-content-link-2').removeClass('color');
            $('#showed-content-link-4').removeClass('color');
        })
    });

    $(document).ready(function (){
        $('#showed-content-link-4').on('click',function(){
            $('#showed-content-4').addClass('show');
            $('#showed-content-link-4').addClass('color');
        })
        $('#showed-content-link-4').on('click',function(){
            $('#showed-content-1').removeClass('show');
            $('#showed-content-2').removeClass('show');
            $('#showed-content-3').removeClass('show');
            $('#showed-content-link-1').removeClass('color');
            $('#showed-content-link-2').removeClass('color');
            $('#showed-content-link-3').removeClass('color');
        })
    });

    $(document).ready(function (){
        $('#showed-content-link-slick-1').on('click',function(){
            $('#showed-content-1').addClass('show');
            $('#showed-content-link-slick-1').addClass('color');
        })
        $('#showed-content-link-slick-1').on('click',function(){
            $('#showed-content-2').removeClass('show');
            $('#showed-content-3').removeClass('show');
            $('#showed-content-4').removeClass('show');
            $('#showed-content-link-slick-2').removeClass('color');
            $('#showed-content-link-slick-3').removeClass('color');
            $('#showed-content-link-slick-4').removeClass('color');
        })
    });

    $(document).ready(function (){
        $('#showed-content-link-slick-2').on('click',function(){
            $('#showed-content-2').addClass('show');
            $('#showed-content-link-slick-2').addClass('color');
        })
        $('#showed-content-link-slick-2').on('click',function(){
            $('#showed-content-1').removeClass('show');
            $('#showed-content-3').removeClass('show');
            $('#showed-content-4').removeClass('show');
            $('#showed-content-link-slick-1').removeClass('color');
            $('#showed-content-link-slick-3').removeClass('color');
            $('#showed-content-link-slick-4').removeClass('color');
        })
    });

    $(document).ready(function (){
        $('#showed-content-link-slick-3').on('click',function(){
            $('#showed-content-3').addClass('show');
            $('#showed-content-link-slick-3').addClass('color');
        })
        $('#showed-content-link-slick-3').on('click',function(){
            $('#showed-content-1').removeClass('show');
            $('#showed-content-2').removeClass('show');
            $('#showed-content-4').removeClass('show');
            $('#showed-content-link-slick-1').removeClass('color');
            $('#showed-content-link-slick-2').removeClass('color');
            $('#showed-content-link-slick-4').removeClass('color');
        })
    });

    $(document).ready(function (){
        $('#showed-content-link-slick-4').on('click',function(){
            $('#showed-content-4').addClass('show');
            $('#showed-content-link-slick-4').addClass('color');
        })
        $('#showed-content-link-slick-4').on('click',function(){
            $('#showed-content-1').removeClass('show');
            $('#showed-content-2').removeClass('show');
            $('#showed-content-3').removeClass('show');
            $('#showed-content-link-slick-1').removeClass('color');
            $('#showed-content-link-slick-2').removeClass('color');
            $('#showed-content-link-slick-3').removeClass('color');
        })
    });

    //__________Swyper__________

    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
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
           slidesToShow: 3,
           focusOnSelect: false,
           infinite: true,
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