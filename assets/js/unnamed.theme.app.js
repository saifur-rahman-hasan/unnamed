/*
	Project Name: Unnamed - group;
	Design & Developed By: Saifur Rahman Hasan;
	Published: 28th December, 2016;
	Tags: unnamed, unnamed group;

	Author: Saifur Rahman (Hasan);
	Author Email: saifur.dohs@gmail.com || me@coderpalace.com;
	Author Contact Number: +8801727213319;
 	Author Github Profile: https://github.com/saifur-rahman-hasan;
 */

$(function(){

	$('[data-toggle="tooltip"]').tooltip();    
 
	$('.unnamed-thumbnail-overlay').hover(
		function(){
			$(this).find('.caption').slideDown(250);
		},
		function(){
			$(this).find('.caption').slideUp(250);
		}
	);

	// Unnamed - [ Owl Carousel ] ~ For Portfolio section
	$('#unnamed-portfolio-carousel').owlCarousel({
		loop:true,
		margin:20,
		nav: true,
		navContainer: '#unnamed-portfolio-carousel-nav',
		navText: ['<i class="fa fa-lg fa-angle-left"></i>','<i class="fa fa-lg fa-angle-right"></i>'],
		responsive:{
			0:{ items:1 },
			600:{ items:2 },
			1000:{ items:3 }
		}
	});

	// Unnamed - BackToTop
	var _btn_back_to_top	=	$('#btn_back_to_top');

	_btn_back_to_top.click(function(event) {
		event.preventDefault();

		$('html, body').animate({scrollTop: 0}, 500);
	});

	$(window).scroll(function(event) {
		var $this 				=	$(this),
			window_height 		=	$this.height() - 150,
			window_scroll_top	=	$this.scrollTop();

		if(window_scroll_top > window_height){
			if(!_btn_back_to_top.is(':visible')){
				_btn_back_to_top.fadeIn(500);
			}
		}else{
			_btn_back_to_top.fadeOut(500);
		}
	});

	// Unnamed - GoTo
	$('a[data-toggle="GoTo"]').click(function(event){
		event.preventDefault();

		var $this 			=	$(this),
			willGo			=	$this.attr('href'),
			targetOffset	=	$(willGo).offset().top - 50;

		$('html, body').animate({scrollTop: targetOffset}, 500);

	});

	// Unnamed - Filter
	$('[data-toggle="unnamed_filter"]').click(function(event){ 
		event.preventDefault();

		var $this 			=	$(this),
			targetTag		=	$this.data('filter'),
			animation_class	=	'scale-animation',
			_filter_box		=	$('#_filter_box');

			_filter_box.fadeTo(100, 0.1);
			_filter_box.find('li').not('.'+ targetTag).fadeOut().removeClass(animation_class);

			setTimeout(function(){
				$('.'+ targetTag).fadeIn().addClass(animation_class);
				_filter_box.fadeTo(300, 1);
			}, 300);
	});

	// Initialize WOW JS Plugin
	new WOW().init();

	// Animation For Bootstrap Carousel
	function doAnimations(elems) {
		var animEndEv = 'webkitAnimationEnd animationend';

		elems.each(function () {
	    	var $this = $(this),
	        	$animationType = $this.data('animation');

			// Add animate.css classes to
			// the elements to be animated 
			// Remove animate.css classes
			// once the animation event has ended
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}

	// Select the elements to be animated
	// in the first slide on page load
	// Initialize carousel
	var $carouselHome = $('#carousel-home');
	$carouselHome.carousel();
	var $firstAnimatingElems = $carouselHome.find('.item:first').find('[data-animation ^= "animated"]');

	// Apply the animation using our function
	doAnimations($firstAnimatingElems);

	// Pause the carousel 
	$carouselHome.carousel('pause');

	// Attach our doAnimations() function to the
	// carousel's slide.bs.carousel event 
	$carouselHome.on('slide.bs.carousel', function (e) { 
		// Select the elements to be animated inside the active slide 
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});

	// Unnamed - Testimonials for palying it's delay slide
	$('#_unnamed_testimonial_carousel').carousel({ pause: true, interval: 10000 });

	// Unnamed - Textarea Limit
	var post 			=	$('.unnamed-form #_about_you');
	var post_feedback 	=	$('.unnamed-form #_typing_text');
	var post_max_length	=	post.attr('maxlength');

	post_feedback.html('<span class="text_wrote">0</span> / <span class="text_remaining">'+ post_max_length +'</span>');

	post.keyup(function(event) {
		
		var post_length 		=	$(this).val().length;
		var char_left			=	post_max_length - post_length;

		if(post_length < post_max_length){
			post_feedback.html('<span class="text_wrote">'+ post_length +'</span> / <span class="text_remaining">'+ char_left +'</span>');
		}else if(post_length >= post_max_length){
			post_feedback.html('<span class="text_wrote">'+ post_length +'</span> / <span class="text_remaining">'+ char_left +'</span>');
		}

	});

	// Unnamed - Join Form
	$( ".unnamed-form" ).validate({
		rules: {
			full_name: { required: true, minlength: 2, maxlength: 30 },
			email: { required: true, email: true },
			github_link: { required: true },
			about_you: { required: true }
		},
		messages:{
			full_name: { required: 'Write your full name' },
			email: { required: 'Please enter your email Id' },
			github_link: { required: 'Please enter github profile link' },
			about_you: { required: 'Lets us know about yourself' }
		}
	});

	$( "#_unnamed_join_form.unnamed-form" ).validate({
		rules: {
			full_name: { required: true, minlength: 2, maxlength: 30 },
			email: { required: true, email: true },
			github_link: { required: true },
			about_you: { required: true }
		},
		messages:{
			full_name: { required: 'Write your full name' },
			email: { required: 'Please enter your email Id' },
			github_link: { required: 'Please enter github profile link' },
			about_you: { required: 'Lets us know about yourself' }
		}
	});

});