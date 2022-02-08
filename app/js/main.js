$(function () {
  $('.banner').slick({
    prevArrow: '<button type="button" class="banner__btn banner__btn--prev"> <svg class="banner__svg"><use xlink:href="images/sprite.svg#slick-prev"></use></svg></button>',
    nextArrow: '<button type="button" class="banner__btn banner__btn--next"> <svg class="banner__svg"><use xlink:href="images/sprite.svg#slick-next"></use></svg></button>',
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.sponsors__list').slick({
    slidesToShow:5,
    focusOnSelect: true,
    centerMode: true,
    arrows: false,
  });

  $('.catalog-btn').on('click', function () {
    $('.catalog__list').toggleClass('active');
    $(this).toggleClass('active');
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