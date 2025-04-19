$(
  ".chapter03-websigh-img, .chapter03-illustration-work-img, .chapter03-banner-img"
).slick({
  infinite: true,
  autoplaySpeed: 1800,
  autoplay: true,
  dots: false,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1, // 1スライドずつ移動（ズレ防止）
  centerMode: false,
  variableWidth: false // 画像の幅を固定する
});


AOS.init();

$(document).ready(function () {
  var $toc = $(".toc");
  var tocOffsetTop = $toc.offset().top; // 初期位置を取得
  var fixedTop = 100; // 固定する位置

  function updateTocPosition() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= tocOffsetTop - fixedTop) {
      $toc.addClass("fixed");
    } else {
      $toc.removeClass("fixed");
    }
  }

  $(window).on("scroll resize", updateTocPosition); // スクロール & リサイズ時に適用
  updateTocPosition(); // 初回適用
});
