//Changes color of scrollbar when scrolled below landing page

$(window).scroll(function () {
	$('nav').toggleClass('scrolled', $(this).scrollTop() > window.innerHeight);
});