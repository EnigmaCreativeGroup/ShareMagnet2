$(function() {
	var mobileNav = false;	
	$("#hamburger").on("click", function() {
		$(this).toggleClass('open');
		$('.mobile-menu').toggleClass('open');
	});
});