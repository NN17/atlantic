$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  	items:4,
  	loop:true,
    margin:35,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false,
            autoplay:true
        }
    }
  });

  	$(window).resize(function(){

       if ($(window).width() <= 400) {  

            $('.nav-wrapper div').removeClass('justify-content-center');

       }     

	});

});

