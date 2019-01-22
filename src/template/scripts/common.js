$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	var panel = $('.panel'),
			panelClass = 'panel_scroll';

	$(window).on('load scroll', function() {
		if ($(window).scrollTop() > 0) {
			panel.addClass(panelClass);
		} else{
			panel.removeClass(panelClass);
		}
	});


	var catalogNav = $('.catalog__nav'),
			catalogList = $('.catalog__list');

	catalogNav.slick({
		slidesToShow: 9,
		asNavFor: catalogList,
		focusOnSelect: true
	})

	catalogList.slick({
		arrows: false,
		asNavFor: catalogNav
	})

	$('.catalog__item').each(function(index, el) {
		var galleryList = $(this).find('.gallery__list'),
				galleryNav = $(this).find('.gallery__nav');


		galleryList.slick({
			asNavFor: galleryNav,
			arrows: false,
			fade: true
		});

		galleryNav.slick({
			asNavFor: galleryList,
			slidesToShow: 4,
			arrows: false,
			focusOnSelect: true,
			variableWidth: true
		});
	});

	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('checkbox');
	
	
});
