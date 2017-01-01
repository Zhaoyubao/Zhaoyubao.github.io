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
		let nav = $(window).height() * 0.025;
		let project = $(".white-space-container").position().top;
		let about = $(".about-container").position().top;
		let contact = $(".contact-container").position().top;
		if(s < nav) {
			$(".nav-bar-container").css({
				"position": "relative",
				"opacity": 0.5,				
				"padding-top": "2.5vh"
			});
			$(".nav-bar").css("background-color", "black");
			$(".nav-bar li").css({"color": "white", "background-color": "black", "padding": "1.6vh 1.6vw"}).addClass("hover");
			$(".nav-bar").on("mouseenter", ".hover", function() {
				$(this).css("color", "#ff5A00");
			});
			$(".nav-bar").on("mouseleave", ".hover", function() {
				$(this).css("color", "white");
			});
		}
		if(s >= nav) {
			$(".nav-bar-container").css({
				"width": "100%",
				"opacity": 0.65,
				"position": "fixed",
				"z-index": 100,
				"padding-top": 0
		    });
			$(".nav-bar").css("background-color", "white");
			$(".nav-bar li").css({"color": "black", "background-color": "white", "padding": "2.4vh 1.6vw"}).addClass("hover");
			$(".nav-bar").on("mouseenter", ".hover", function() {
				$(this).css({"color": "#ff5A00", "font-weight": "bold"});
			});
			$(".nav-bar").on("mouseleave", ".hover", function() {
				$(this).css({"color": "black", "font-weight": "normal"});
			});

			if(s >= project-5 && s < about) {
				$(".nav-bar li").css({"color": "black", "background-color": "white"}).addClass("hover");
				$(".projectsButton").css({"color": "white", "background-color": "#ff5A00"})
					.removeClass("hover");
			}
			if(s >= about-5 && s < contact) {
				$(".nav-bar li").css({"color": "black", "background-color": "white"}).addClass("hover");
				$(".aboutButton").css({"color": "white", "background-color": "#ff5A00"})
					.removeClass("hover");
			}
			if(s >= contact-5) {
				$(".nav-bar li").css({"color": "black", "background-color": "white"}).addClass("hover");
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
		let w = $("#wechat").width();
		let h = $("#wechat").height();
        let top = e.pageY - h * 1.05;
        let left = e.pageX - w * 0.5;
        $('#wechat').css({'top' : `${top}px`, 'left' : `${left}px`});
    })
})