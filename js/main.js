$(document).ready(function() {
	$(".homeButton").click(function() {
		$("body").animate({scrollTop: $(".bg-image").position().top}, 500);
	})

	$(".projectsButton").click(function() {
		$("body").animate({scrollTop: $(".white-space-container").position().top}, 800); 
	})

	$(".aboutButton").click(function() {
		$("body").animate({scrollTop: $(".about-container").position().top}, 1400);
	})

	$(".contactButton").click(function() {
		$("body").animate({scrollTop: $(".contact-container").position().top}, 1500);
	})

	$(document).scroll(function() {
		let s = $(document).scrollTop(); 
		$(".bg-image").css("background-position", `0px ${s*0.6}px`);
	})

	$(document).scroll(function() {
		let s = $(document).scrollTop();
		if (s > 1000) {	
			$(".bg-image2").css("background-position", `0px ${s*0.625}px`); 
		}
	})

	$('.wechat').mouseenter(function() {
        $('#wechat').fadeIn('slow');
    })

    $('.wechat').mouseleave(function() {
        $('#wechat').hide();
    })

	$('.wechat').mousemove(function(e) {
        let top = e.pageY - 420;
        let left = e.pageX - 150;
        $('#wechat').css({'top' : `${top}px`, 'left' : `${left}px`});
    })
})