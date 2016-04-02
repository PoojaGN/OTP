//setInterval
//animate margin-left
//if it's last slide,go to position 1(0px)
//listen to mouseenter and pause
//resume on mouseleave
$(function(){
	var $slider=$('#slider');
	var $slideContainer=$slider.find('.slides');
	var $slides=$slideContainer.find('.slide');
	var currentSlide=1;
	var interval;
	var width=720;
	var animateSpeed=1000;
	var pause=3000;
	
	function startslider(){
		interval=setInterval(function(){
			$slidercontainer.animate({ 'margin-left':'-='+width},
			animateSpeed,function(){
								currentSlide++;
								if(currentSlide===$slider.length){
									currentSlide=1;
									$slideContainer.css('margin-left',0);
								}
						})
		},pause)
	}

	function stopslider(){
		clearInterval(interval);
	}
	$slider.on("mouseenter",stopSlider).on('mouseleave',startSlider);
	startSlider();
