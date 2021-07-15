$(document).ready(function(){
  $('.slider').slick({
    slidesToShow:2,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    arrows:false,
    prevArrow: "<img src='img/Vector (1).svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/Vector.svg'' class='next' alt='2'>",
    WariableWidth:true,
    responsive:[
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:1,
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1
        }
      }
    ]
  });
});
