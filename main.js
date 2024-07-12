$(function () {
  //ハンバーガーメニュー
  $("#drawer_toggle").click(function () {
    $(this).toggleClass("active");
    $(".header__nav").toggleClass("sp_open");
  });

  //ハンバーガーメニュー　同ページのアンカーに飛んでも表示消す
  $(".header__nav ul li a").click(function () {
    $("#drawer_toggle").removeClass("active");
    $(".header__nav").removeClass("active");
  });

  //TOPimgスライダー
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
        $(".remove-animation", this).removeClass("remove-animation add-animation");
      },
    });

  //TOPテキストスライダー
  $(".fv-text__slider").slick({
    autoplay: true,
    vertical: true,
    speed: 1700,
    autoplaySpeed: 3500,
    verticalSwiping: false,
    arrows: false,
    dots: false,
  });

  //Informationテキストフェードイン
  $(window).scroll(function () {
    $("#fadeIn").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass("active");
      }
    });
  });

  //インフォメーションreadmore
  $(document).ready(function () {
    if ($(window).width() <= 768) {
      $(".news__box li a.hide-text").hide();
    }
    $(".information-more").on("click", function () {
      $(this).toggleClass("on-click");
      $(".news__box li a.hide-text").toggle();
    });
  });
    $(window).scroll(function () {
      $("#fadeIn2, #fadeIn-text4, #fadeIn-text7").each(function () {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 150) {
          $(this).addClass("active");
        }
      });
    });

  $(window).scroll(function () {
    $("#fadeIn3, #fadeIn-text5, #fadeIn-text8").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).addClass("active");
      }
    });
  });

  $(window).scroll(function () {
    $("#fadeIn4, #fadeIn-text6, #fadeIn-text9").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 50) {
        $(this).addClass("active");
      }
    });
  });

  $(window).scroll(function () {
    $("#fadeIn5").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 30) {
        $(this).addClass("active");
      }
    });
  });

  $(window).scroll(function () {
    $("#fadeIn-text10, #fadeIn-text11, #fadeIn-text12, #fadeIn-text13, #fadeIn-text14, #fadeIn-text15, #fadeIn-text16, #fadeIn-text17").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 50) {
        $(this).addClass("active");
      }
    });
  });

  //TOPページ各サブタイトル・テキストフェードイン
  $(window).scroll(function () {
    $("#fadeIn-title, #fadeIn-title2, #fadeIn-title3, #fadeIn-title4, #fadeIn-title5, #fadeIn-title6, #fadeIn-title7, #fadeIn-title8, #fadeIn-title9, #fadeIn-title10, #fadeIn-title11, #fadeIn-title12, #fadeIn-title13, #fadeIn-title14, #fadeIn-title15").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 50) {
        $(this).addClass("active");
      }
    });
  });

  $(window).scroll(function () {
    $("#fadeIn-text, #fadeIn-text2, #fadeIn-text3").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).addClass("active");
      }
    });
  });

  //TOPページ各写真を可視範囲で拡大
  $(window).scroll(function () {
    $("#fadeIn-img, #fadeIn-img2, #fadeIn-img3, #fadeIn-img4, #fadeIn-img5, #fadeIn-img6, #fadeIn-img7, #fadeIn-img8, #fadeIn-img9, #fadeIn-img10, #fadeIn-img11, #fadeIn-img12, #fadeIn-img13, #fadeIn-img14, #fadeIn-img15, #fadeIn-img16, #fadeIn-img17, #fadeIn-img18, #fadeIn-img19, #fadeIn-img20, #fadeIn-img21, #fadeIn-img22, #fadeIn-img23, #fadeIn-img24, #fadeIn-img25").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 80) {
        $(this).addClass("active");
      }
    });
  });

  //message.html画像を可視範囲で拡大
  $(window).scroll(function () {
    $("#fadeIn-person-img, #fadeIn-person-img2, #fadeIn-person-img3, #fadeIn-person-img4, #fadeIn-person-img5, #fadeIn-person-img6, #fadeIn-person-img7, #fadeIn-person-img8, #fadeIn-person-img9,#fadeIn-person-img10,#fadeIn-person-img11,#fadeIn-person-img12,#fadeIn-person-img13").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).addClass("active");
      }
    });
  });
});
