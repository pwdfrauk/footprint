

document.addEventListener("DOMContentLoaded", function() {

/* 
plan page js 
on hove dispaly js */
var myhover = document.querySelectorAll('[data-hover]');
 	myhover.forEach(function(trigger){
	trigger.addEventListener('mouseover', function(event) {
		event.preventDefault();
		var hoverBody = document.getElementById(trigger.dataset.hover);
		hoverBody.classList.add('hover-show');
		myhover.forEach(function(exit) {
			exit.addEventListener('mouseout', function(event) {
				event.preventDefault();
				hoverBody.classList.remove('hover-show');
			})
		})

	})
})

});