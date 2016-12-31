$(document).ready(function() {
	$(".homeButton").click(function() {
		$("body").animate({scrollTop: $(".bg-image").position().top}, 1000);
	})

	$(".projectsButton").click(function() {
		$("body").animate({scrollTop: $(".white-space-container").position().top}, 800); 
	})

	$(".aboutButton").click(function() {
		$("body").animate({scrollTop: $(".about-container").position().top}, 1200);
	})

	$(".contactButton").click(function() {
		$("body").animate({scrollTop: $(".contact-container").position().top}, 1400);
	})

	$(document).scroll(function() {
		let s = $(document).scrollTop();
		let project = $(".white-space-container").position().top;
		let about = $(".about-container").position().top;
		let contact = $(".contact-container").position().top;
		if(s < 20) {
			$(".nav-bar-container").css({
				"position": "relative",
				"opacity": 0.5,				
				"padding-top": "20px"
			});
			$(".nav-bar").css("background-color", "black");
			$(".nav-bar li span").css({"color": "white", "background-color": "black"}).addClass("hover");
			$(".nav-bar").on("mouseenter", ".hover", function() {
				$(this).css("color", "#ff5A00");
			});
			$(".nav-bar").on("mouseleave", ".hover", function() {
				$(this).css("color", "white");
			});
		}
		if(s >= 20) {
			$(".nav-bar-container").css({
				"width": "100%",
				"opacity": 0.65,
				"position": "fixed",
				"z-index": 100,
				"padding-top": 0
		    });
			$(".nav-bar").css("background-color", "white");
			$(".nav-bar li span").css({"color": "black", "background-color": "white"}).addClass("hover");
			$(".nav-bar").on("mouseenter", ".hover", function() {
				$(this).css({"color": "#ff5A00", "font-weight": "bold"});
			});
			$(".nav-bar").on("mouseleave", ".hover", function() {
				$(this).css({"color": "black", "font-weight": "normal"});
			});

			if(s >= project && s < about) {
				$(".nav-bar li span").css({"color": "black", "background-color": "white"}).addClass("hover");
				$(".projectsButton").css({"color": "white", "background-color": "#ff5A00"})
					.removeClass("hover");
			}
			if(s >= about && s < contact) {
				$(".nav-bar li span").css({"color": "black", "background-color": "white"}).addClass("hover");
				$(".aboutButton").css({"color": "white", "background-color": "#ff5A00"})
					.removeClass("hover");
			}
			if(s >= contact) {
				$(".nav-bar li span").css({"color": "black", "background-color": "white"}).addClass("hover");
				$(".contactButton").css({"color": "white", "background-color": "#ff5A00"})
					.removeClass("hover");
			}
		}
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