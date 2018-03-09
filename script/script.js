'use strict';

$(function(){
	
	//configuration
	var width = 1332;
	var animationSpeed = 1000;
	var pause = 6500;
	var currentSlide = 1;
	//Confusing stuff
	var $slider = $('#slider_row');
	var $slideContainer = $slider.find('#slider');
	var $slides = $slideContainer.find('.slide')

	setInterval(function(){
		$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
			currentSlide++;
			if(currentSlide === $slides.length){
				currentSlide = 1;
				$slideContainer.css('margin-left', 0);
			}

		});

	}, pause);

	$('span#m_h').click(function(){
		window.location.href="index.html";
	});
	$('span#m_workouts').click(function(){
		window.location.href="Workouts.html";
	});
	$('span#m_programs').click(function(){
		window.location.href="Programs.html";
	});
	$('span#m_mp').click(function(){
		window.location.href="Meal_plan.html";
	});
	$('span#m_contact').click(function(){
		window.location.href="Contact.html";
	});

	$('#bm_first').click(function(){
		window.location.href="Beginner.html";
	});
	$('#bm_second').click(function(){
		window.location.href="Muscle.html";
	});
	$('#bm_third').click(function(){
		window.location.href="Meal_plan.html";
	});
	$('#BeginnerTop').click(function(){
		window.location.href="Beginner.html"
	});
	
	

});
