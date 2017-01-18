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

var modal= document.getElementById('sendModal');
var btn = document.getElementById('send');
var span =document.getElementById('close');
btn.onclick =function(){
	modal.style.display ="block";
	
}
span.onclick = function(){
	modal.style.display ='none';
}
window.onclick = function(event){
	if(event.target ==modal){
		modal.style.display ='none';
	}
};
$('.circle').circleProgress({
    value: 0.75,
    size: 80,
    fill: {
      gradient: [["green", .1]]
     
    }
  });

