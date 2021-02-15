$(function() {

let slider = $("#reviewsSlider");


      slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:false,
        dots: true
    });







  /*Fixed heder*/
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.height();
  let scrollPos = $(window).scrollTop();


  $(window).on("scroll", function() {

     scrollPos = $(this).scrollTop();
      header.addClass("fixed");
     if (scrollPos > introH) {

     }else {
            header.removeClass("fixed");
     }





  });


  /*slow scroll*/
  $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let elemetId = $(this).data('scroll');
    let elemetOffset = $(elemetId).offset().top;


    $("html,body").animate({
           scrollTop: elemetOffset
    }, 1000);
  });


   /*Toggle*/
    let nav = $("#nav");
     let navToggle = $("#navToggle");


    $("#navToggle").on("click", function(event){
      event.preventDefault();

     nav.toggleClass("show");

    });



});



$(document).ready(function(){
	   $('.accordion-trigger').click(function(){
        $(this).next('.accordion-item__content').slideToggle(500);
	   });
});


$('.menu-btn').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('menu-btn_active');
	$('.menu-nav').toggleClass('menu-nav_active')
});



var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      loop:true
    });
