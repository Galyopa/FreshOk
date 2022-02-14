$(function () {
  $('.banner').slick({
    prevArrow: '<button type="button" class="banner__btn banner__btn--prev"> <span class="sr-only">Предыдущий слайд</span> <svg class="banner__svg"><use xlink:href="images/sprite.svg#slick-prev"></use></svg></button>',
    nextArrow: '<button type="button" class="banner__btn banner__btn--next"> <span class="sr-only">Следующий слайд</span> <svg class="banner__svg"><use xlink:href="images/sprite.svg#slick-next"></use></svg></button>',
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.sponsors__list').slick({
    slidesToShow: 5,
    focusOnSelect: true,
    centerMode: true,
    arrows: false,
  });

  $('.catalog__btn').on('click', function () {
    $('.catalog__list').toggleClass('active');
    $(this).toggleClass('active');
  });

  $('.user-nav__btn--cart').on('click', function () {
    $('.cart').addClass('active');
  });

  $('.cart__btn-close').on('click', function () {
    $('.cart').removeClass('active');
  });

  $('.quantity__btn--minus').on('click', function () {
    this.nextElementSibling.stepDown();
  });

  $('.quantity__btn--plus').on('click', function () {
    this.previousElementSibling.stepUp();
  });

  $(".rate__star").rateYo({
    numStars: 1,
    maxValue: 5,
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    starSvg: "<svg class='rate__icon'><use xlink:href='images/sprite.svg#star'></use></svg>",
    starWidth: "16px",
    readOnly: true,
  });

var TopProducts = document.querySelector('[data-ref="top-products"]');
var PromoProducts = document.querySelector('[data-ref="promo-products"]');

var config = {
  controls: {
    scope: 'local'
  }
};

var mixer1 = mixitup(TopProducts, config);
var mixer2 = mixitup(PromoProducts, config);

});