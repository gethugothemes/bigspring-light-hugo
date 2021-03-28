$(document).on('turbolinks:load', function () {
	'use strict';
	
	// prelaoder
	$('.preloader').delay(100).fadeOut(10);

	// re initialize bootstrap dropdown for turbolinks
	$('.dropdown-toggle').dropdown()

	//slider
	$('.slider').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		arrows: false
	});

})(jQuery);