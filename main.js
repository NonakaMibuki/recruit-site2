$(function () {
    $(".fv__slider")
      .on("init", function () {
        $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
      })
      .slick({
        autoplay: true, 
        fade: true, 
        arrows: false, 
        speed: 1700, 
        autoplaySpeed: 3500, 
        pauseOnFocus: false, 
        pauseOnHover: false, 
      })
      .on({
        beforeChange: function (event, slick, currentSlide, nextSlide) {
          $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
          $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
        },
        afterChange: function () {
          $(".remove-animation", this).removeClass(
            "remove-animation add-animation"
          );
        },
      });

    
      $(".fv-text__slider").slick({
        autoplay: true,
        vertical: true,
        speed: 1700, 
        autoplaySpeed: 3500, 
        verticalSwiping: false,
        arrows: false,
        dots: false,
    });

  });