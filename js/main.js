$(document).ready(function() {
	$(window).load(function() {
		$(".preloader").fadeOut(800);
	});
 	// Page scrolling feature
	$(".nav li").click(function() {
		$("body").stop().animate({scrollTop: $('.'+$(this).attr('id')).offset().top}, 1250, 'easeInOutExpo');
	})
 	// Closes the Responsive Menu on Menu Item Click
	$(".navbar-collapse ul li").click(function() {
		$(".navbar-toggle:visible").click();
	})

	$(".scrollTop").click(function() {
		$("body").animate({scrollTop: $(".home").offset().top}, 1200, 'easeInOutExpo');
	});

	$(document).scroll(function() {
		let s = $(document).scrollTop();
		let nav = $(window).height() * 0.025;
		let project = $(".projects").offset().top - 1;
		let about = $(".about").offset().top - 1;
		let contact = $(".contact").offset().top - 1;
		if(s < nav) {
			$("nav.navbar").css({
				"opacity": 0.5,
				"background-color": "black",
				"margin-top": "1.3vw",
				"box-shadow": "none"
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
			$(".navbar").css({
				"opacity": 1,
				"box-shadow": "0 2px 4px #ddd",
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

			$(".navbar").css({"color": "black", "background-color": "white"});
			$(".nav-bar li").addClass("hover");

			if(s > nav && s < project) {
				$("#home").css({"color": "white", "background-color": "#ff5A00"})
					.removeClass("hover");
			}
			if(s >= project && s < about) {
				$("#projects").css({"color": "white", "background-color": "#ff5A00"})
					.removeClass("hover");
			}
			if(s >= about && s < contact) {
				$("#about").css({"color": "white", "background-color": "#ff5A00"})
					.removeClass("hover");
			}
			if(s >= contact) {
				$("#contact").css({"color": "white", "background-color": "#ff5A00"})
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
		if (s > 900) {	
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