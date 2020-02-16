$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > window.innerHeight);
});