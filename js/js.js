/*Sticky Navbar*/
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
/*Slider*/
$(document).on('ready', function() {
  $(".TeamMemberSlider").slick({
  		centerMode: true,
  		centerPadding: '15px',
	    dots: false,
	    slidesToShow: 4,
			slidesToScroll: 1,
	  	autoplay: true,
	  	autoplaySpeed: 3000,
  	  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },  	  
    {
      breakpoint: 950,
      settings: {
      	arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 610,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
  });
  $(".ClientSlider").slick({
  		centerMode: true,
  		centerPadding: '-50px',  		
  		arrows:false,
	    dots: true,
	    slidesToShow: 1,
			slidesToScroll: 1,
	  	autoplay: true,
	  	autoplaySpeed: 2000,
  });     
});
/*LiveReload*/
document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')