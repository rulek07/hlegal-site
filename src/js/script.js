
//  header__buttons

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

// showed-content

    $(document).ready(function (){
        $('#showed-content-link-1').on('click',function(){
            $('#showed-content-1').addClass('show');
        })
        $('#showed-content-link-1').on('click',function(){
            $('#showed-content-2').removeClass('show');
            $('#showed-content-3').removeClass('show');
            $('#showed-content-4').removeClass('show');
        })
    });

    $(document).ready(function (){
        $('#showed-content-link-2').on('click',function(){
            $('#showed-content-2').addClass('show');
        })
        $('#showed-content-link-2').on('click',function(){
            $('#showed-content-1').removeClass('show');
            $('#showed-content-3').removeClass('show');
            $('#showed-content-4').removeClass('show');
        })
    });

    $(document).ready(function (){
        $('#showed-content-link-3').on('click',function(){
            $('#showed-content-3').addClass('show');
        })
        $('#showed-content-link-3').on('click',function(){
            $('#showed-content-1').removeClass('show');
            $('#showed-content-2').removeClass('show');
            $('#showed-content-4').removeClass('show');
        })
    });

    $(document).ready(function (){
        $('#showed-content-link-4').on('click',function(){
            $('#showed-content-4').addClass('show');
        })
        $('#showed-content-link-4').on('click',function(){
            $('#showed-content-1').removeClass('show');
            $('#showed-content-2').removeClass('show');
            $('#showed-content-3').removeClass('show');
        })
    });

    // swyper

    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        mousewheel: true,
        keyboard: true,
      },
    });

    $(document).ready(function() {
        $('#teammates').click(function () { 
          elementClick = $(this).attr("href");
          destination = $(elementClick).offset().top;
          if($.browser.safari){
            $('body').animate( { scrollTop: destination }, 100 );
          }else{
            $('html').animate( { scrollTop: destination }, 1100 );
          }
          return false;
        });
      });