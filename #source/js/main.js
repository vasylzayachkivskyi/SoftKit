
$(document).ready(function () {
	function isMobile() {
		return $(window).width() < 992;
	}

	// change theme
	$('.header__switch').on('click', function () {
		$(this).toggleClass('active');
		$('.pagewrapper').toggleClass('dark-theme');
	});

	// mobile menu
	function clickMenu() {
		if (isMobile()) {
			$('.header__menu-item').on('click', function () {
				$('.header__menu-item').not(this).removeClass('active');
				$(this).toggleClass('active');
			});
		} else {
			$(window).resize(function () {
				if (isMobile()) {
					$('.header__menu-item').on('click', function () {
						$('.header__menu-item').not(this).removeClass('active');
						$(this).toggleClass('active');
					});
				}
			});
		}
	}
	clickMenu();


	// infinite carousel top
	$slides = $(".top__slide-list");
	$slides.bind("contentchanged", function () {
		animateLeft($slides);
	});
	animateLeft($slides);
	function animateLeft($slides) {
		var slidesLength = $slides.find("li").length;
		if (slidesLength > 3) {
			$slides.find("li:nth-last-child(-n+3)").clone().prependTo($slides);
			$slides.addClass("animate-left");
			$slides.css("animation-duration", slidesLength * 3 + "s");
		}
	}


	// infinite carousel bottom
	$slides = $(".bottom__slide-list");
	$slides.bind("contentchanged", function () {
		animateLeft($slides);
	});
	animateLeft($slides);
	function animateLeft($slides) {
		var slidesLength = $slides.find("li").length;
		if (slidesLength > 3) {
			$slides.find("li:nth-last-child(-n+3)").clone().prependTo($slides);
			$slides.addClass("animate-left");
			$slides.css("animation-duration", slidesLength * 2 + "s");
		}
	}


	// change with click btn on slider
	$('.heroslider__btn').on('click', function () {
		$('.heroslider').toggleClass('active');
	});



	// GSAP motions
	gsap.registerPlugin(ScrollTrigger);


	// topslider
	gsap.to(".topslider", {
		scale: 3,
		transformOrigin: "50% 100%",
		scrollTrigger: {
			trigger: ".header",
			endTrigger: ".footer",
			start: "top 0px",
			end: "top -300px",
			scrub: 1,
			markers: false,
		}
	});

	// bottomslider
	gsap.from(".bottomslider", {
		scale: 2,
		transformOrigin: "100% 100%",
	});
	gsap.to(".bottomslider", {
		scale: 1,
		transformOrigin: "50% 100%",
		scrollTrigger: {
			trigger: ".bottomtriger",
			start: "top 100%",
			end: "top 0",
			scrub: 1,
			markers: false,
		}
	});

	// services
	gsap.from(".services__item-img", {
		scale: 0,
		transformOrigin: "100% 100%",
	});
	gsap.to(".services__item-img", {
		scale: 1,
		transformOrigin: "100% 0%",
		scrollTrigger: {
			trigger: ".services__item",
			start: "top 90%",
			end: "top center",
			scrub: 1,
			markers: false,
		},
	});
	gsap.from(".services__item-img", {
		scale: 1,
		transformOrigin: "0% 0%",
	});
	gsap.to(".services__item-img", {
		scale: 0,
		transformOrigin: "0% 0%",
		scrollTrigger: {
			trigger: ".services__item",
			start: "top center",
			end: "top 0",
			scrub: 1,
			markers: false,
		},
	});

	// custom Smooth Scroll for GSAP
	/* 
	Setup: wrap your content <div> in another <div> that will serve as the viewport.
	Call this function FIRST (before you create your ScrollTriggers); it sets the 
	default "scroller" for you (otherwise it'd be the window/body, but it should be 
	the content <div>) 
	*/
	smoothScroll("#scrollContent");
	// this is the helper function that sets it all up. Pass in the content <div> and then the wrapping viewport <div> (can be the elements or selector text). It also sets the default "scroller" to the content so you don't have to do that on all your ScrollTriggers.
	function smoothScroll(content, viewport, smoothness) {
		content = gsap.utils.toArray(content)[0];
		smoothness = smoothness || 1;

		gsap.set(viewport || content.parentNode, { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 });
		gsap.set(content, { overflow: "visible", width: "100%" });

		let getProp = gsap.getProperty(content),
			setProp = gsap.quickSetter(content, "y", "px"),
			setScroll = ScrollTrigger.getScrollFunc(window),
			removeScroll = () => content.style.overflow = "visible",
			killScrub = trigger => {
				let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
				scrub && scrub.pause();
				trigger.animation.progress(trigger.progress);
			},
			height, isProxyScrolling;

		function refreshHeight() {
			height = content.clientHeight;
			content.style.overflow = "visible"
			document.body.style.height = height + "px";
			return height - document.documentElement.clientHeight;
		}

		ScrollTrigger.addEventListener("refresh", () => {
			removeScroll();
			requestAnimationFrame(removeScroll);
		})
		ScrollTrigger.defaults({ scroller: content });
		ScrollTrigger.prototype.update = p => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

		ScrollTrigger.scrollerProxy(content, {
			scrollTop(value) {
				if (arguments.length) {
					isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
					setProp(-value);
					setScroll(value);
					return;
				}
				return -getProp("y");
			},
			scrollHeight: () => document.body.scrollHeight,
			getBoundingClientRect() {
				return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
			}
		});

		return ScrollTrigger.create({
			animation: gsap.fromTo(content, { y: 0 }, {
				y: () => document.documentElement.clientHeight - height,
				ease: "none",
				onUpdate: ScrollTrigger.update
			}),
			scroller: window,
			invalidateOnRefresh: true,
			start: 0,
			end: refreshHeight,
			refreshPriority: -999,
			scrub: smoothness,
			onUpdate: self => {
				if (isProxyScrolling) {
					killScrub(self);
					isProxyScrolling = false;
				}
			},
			onRefresh: killScrub // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
		});
	}

	// slide frame animation
	if ($('.frame-image').length) {
		var slides = $('.frame-image');
		var currentSlide = 0;
		var slideInterval = setInterval(nextSlide, 400);

		function nextSlide() {
			slides[currentSlide].className = 'frame-image';
			currentSlide = (currentSlide + 1) % slides.length;
			slides[currentSlide].className = 'frame-image active';
		}
	}



		// styleselect
		$("input, select").styler();





















});

