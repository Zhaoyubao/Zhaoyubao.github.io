$(document).ready(function() {
	$(window).load(function() {
		$(".preloader").fadeOut(800);
	});

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

	let w = $(window).width();
	$(window).resize(function() {
		w = $(window).width();
	})
	$("div.nav-bar").on("click", "li", function() {
		if(w < 768) $("button.navbar-toggle").trigger("click");
	})

	$(".scrollTop").click(function() {
		$("body").animate({scrollTop: $(".bg-image").position().top}, 1000);
	});

	$(document).scroll(function() {
		let s = $(document).scrollTop();
		let nav = $(window).height() * 0.025;
		let project = $(".white-space-container").position().top - 1;
		let about = $(".about-container").position().top - 1;
		let contact = $(".contact-container").position().top - 1;
		if(s < nav) {
			$(".navbar").css({
				"opacity": 0.5,
				"background-color": "black",
				"margin-top": "1.3vw"
			});
			$(".nav-bar li").css({"color": "white", "background-color": "black", "padding": "15px 1.8vw"}).addClass("hover");
			$(".nav-bar").on("mouseenter", ".hover", function() {
				$(this).css("color", "#ff5A00");
			});
			$(".nav-bar").on("mouseleave", ".hover", function() {
				$(this).css("color", "white");
			});
		}
		if(s >= nav) {
			if(w < 768)  $(".navbar").css("opacity", 1);
			else  $(".navbar").css("opacity", 0.7);
			$(".navbar").css({
				"background-color": "white",
				"margin-top": 0
		    });
			$(".nav-bar li").css({"color": "black", "background-color": "white", "padding": "20px 1.8vw"}).addClass("hover");
			$(".nav-bar").on("mouseenter", ".hover", function() {
				$(this).css({"color": "#ff5A00"});
			});
			$(".nav-bar").on("mouseleave", ".hover", function() {
				$(this).css({"color": "black"});
			});

			if(s > nav && s < project) {
				$(".navbar").css({"color": "black", "background-color": "white"});
				$(".nav-bar li").addClass("hover");
				$(".homeButton").css({"color": "white", "background-color": "#ff5A00"})
					.removeClass("hover");
			}
			if(s >= project && s < about) {
				$(".navbar").css({"color": "black", "background-color": "white"});
				$(".nav-bar li").addClass("hover");
				$(".projectsButton").css({"color": "white", "background-color": "#ff5A00"})
					.removeClass("hover");
			}
			if(s >= about && s < contact) {
				$(".navbar").css({"color": "black", "background-color": "white"});
				$(".nav-bar li").addClass("hover");
				$(".aboutButton").css({"color": "white", "background-color": "#ff5A00"})
					.removeClass("hover");
			}
			if(s >= contact) {
				$(".navbar").css({"color": "black", "background-color": "white"});
				$(".nav-bar li").addClass("hover");
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
			$(".bg-image2").css("background-position", `0px ${s*0.65}px`); 
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