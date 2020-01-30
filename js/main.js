//Слайдер первого окна
$(function () {
  $('.slider__inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="9" height="28" viewBox="0 0 9 28"><title>angle-right</title><path d="M9.297 15c0 0.125-0.063 0.266-0.156 0.359l-7.281 7.281c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-0.781-0.781c-0.094-0.094-0.156-0.219-0.156-0.359 0-0.125 0.063-0.266 0.156-0.359l6.141-6.141-6.141-6.141c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l0.781-0.781c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l7.281 7.281c0.094 0.094 0.156 0.234 0.156 0.359z"></path></svg></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="28" viewBox="0 0 11 28"><title>angle-left</title><path d="M9.797 8.5c0 0.125-0.063 0.266-0.156 0.359l-6.141 6.141 6.141 6.141c0.094 0.094 0.156 0.234 0.156 0.359s-0.063 0.266-0.156 0.359l-0.781 0.781c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-7.281-7.281c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l7.281-7.281c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l0.781 0.781c0.094 0.094 0.156 0.219 0.156 0.359z"></path></svg></button>',
    infinite: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
      }
    }]
  });
  $('select').styler();

  //Слайдер Нововсти компании 
  $('.slider_news').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="9" height="28" viewBox="0 0 9 28"><title>angle-right</title><path d="M9.297 15c0 0.125-0.063 0.266-0.156 0.359l-7.281 7.281c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-0.781-0.781c-0.094-0.094-0.156-0.219-0.156-0.359 0-0.125 0.063-0.266 0.156-0.359l6.141-6.141-6.141-6.141c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l0.781-0.781c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l7.281 7.281c0.094 0.094 0.156 0.234 0.156 0.359z"></path></svg></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="28" viewBox="0 0 11 28"><title>angle-left</title><path d="M9.797 8.5c0 0.125-0.063 0.266-0.156 0.359l-6.141 6.141 6.141 6.141c0.094 0.094 0.156 0.234 0.156 0.359s-0.063 0.266-0.156 0.359l-0.781 0.781c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-7.281-7.281c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l7.281-7.281c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l0.781 0.781c0.094 0.094 0.156 0.219 0.156 0.359z"></path></svg></button>',
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 0.0000001,
    infinite: true,
    responsive: [{
        breakpoint: 768,
        settings: {
          centerMode: true,
          arrows: false,
          dots: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // Кнопка показать все услуги
  $(document).ready(function () {
    $('.trigger').on('click', function () {
      $('.service__inner-second').toggle(400);
    });
  });
  // Плавное прокручивание экрана при нажатии на кнопку все услуги

  $(function () {
    $('.trigger').click(function (event) {
      event.preventDefault()
      var el = $('.trigger');
      $('body,html').animate({
        scrollTop: $(el).offset().top
      }, 800);
    });
  });

  // Прилипающее меню
  $(document).ready(function () {
    var navPos, winPos, navHeight;
    function refreshVar() {
      navPos = $('.header__content').offset().top;
      navHeight = $('.header__content').outerHeight(true);
    }
    refreshVar();
    $(window).resize(refreshVar);
    $('<div class="clone-nav"></div>').insertBefore('.header__content').css('height', navHeight).hide();
    $(window).scroll(function () {
      winPos = $(window).scrollTop();
      if (winPos >= navPos) {
        $('.header__content').addClass('fixed shadow');
        $('.clone-nav').show();
      } else {
        $('.header__content').removeClass('fixed shadow');
        $('.clone-nav').hide();
      }
    });
  });

  // Добавление класса для плавного уменьшения падинга у прилипающего меню
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 120) {
        $('.header__content').addClass('slow_padding');
      } else {
        $('.header__content').removeClass('slow_padding');
      }
    });
  });

  // Перемещаем эллемент при при ширине экрана меньше 992px
  $(window).resize(function () {
    if ($(window).width() <= 998) {
      $('.service__item-del').appendTo('.service__item-dow');
      $('.service__inner').css('justify-content', 'space-around');
    };
  });

  $(window).resize(function () {
    if ($(window).width() <= 480) {
      $('.input__e-mail').attr('placeholder', 'E-mail');
      $('.input__telephone').attr('placeholder', 'Контактный телефон');
      $('.input__fio').attr('placeholder', 'ФИО');
      $('.input__sms').attr('placeholder', 'Сообщение');
    };
  });

  // Кнопка меню
  $('.header__icon_bars').on('click', function () {
    $('.header__menu ul').toggle(400);
  });

// Smooth transition on links
$(document).ready(function(){
  $(".header__btn__menu, ul, li").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    // Подстраиваем высату как нам нужно 
      plus = $(window).innerHeight() - 1000;
    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({scrollTop: top + plus}, 800);
  });
  });

});




