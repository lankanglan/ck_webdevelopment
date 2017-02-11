$(window).scroll(function(){
	if($('.navbar').offset().top >50){
		$('.navbar-fixed-top').addClass('top-nav-collapse');
	}else{
	   $('.navbar-fixed-top').removeClass('top-nav-collapse');
	}
});

$(function(){
	$('.page-scroll a').bind('click',function(){
		var $anchor = $(this);
		$('html,body').stop().animate({
			scrollTop:$($anchor.attr('href')).offset().top
		},1500,'easeInExpo');
		event.preventDefault();
	});
});

//responsive navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};


$('.circle').circleProgress({
    value: 0.75,
    size: 80,
    fill: {
      gradient: [["green", .1]]
     
    }
  });

