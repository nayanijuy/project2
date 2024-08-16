// 해더 배경 돌아가는거 : swiper
new Swiper(".header_bg_card", {
  effect: "fade",
  loop: true,
  speed: 800,
  autoplay: true,
});

// 스크롤시 상단 내비 바뀌는거 : jquery
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  console.log(scroll);
  if (scroll > 1) {
    $(".logo1").addClass("dn");
    $(".logo2").removeClass("dn");
    $("nav").addClass("change_back_font_color");
  }
  if (scroll < 1) {
    $(".logo1").removeClass("dn");
    $(".logo2").addClass("dn");
    $("nav").removeClass("change_back_font_color");
  }
});

// 팝업에서 닫기 눌렀을때 사라지는거, 스크롤방지 풀기 : jquery
$('.notice_close').on('click',()=>{
  $('#notice').addClass('dn');
  $('body').removeClass('hidden')
})
