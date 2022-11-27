$(document).ready(function () {
	// preload
	setTimeout(function () {
		$('.pagewrapper').addClass('loaded');
	}, 3200);

	function notMobile() {
		return $(window).width() >= 992;
	}


	// change theme
	$('.header__switch').on('click', function () {
		$(this).toggleClass('active');
		$('.heromarquee').toggleClass('active');
		$('.pagewrapper').toggleClass('dark-theme');
	});

	// mobile menu
	$('.header__menu-mobile').find('.header__menu-item').on('click', function () {
		$('.header__menu-mobile').find('.header__menu-item').not($(this)).removeClass('active');
		$(this).toggleClass('active');
	});


	// infinite carousel
	$('.slide-list').each(function() {
		$slides = $(this);
		$slides.bind("contentchanged", function () {
			animateLeft($slides);
		});
		animateLeft($slides);
		function animateLeft($slides) {
			var slidesLength = $slides.find("li").length;
			if (slidesLength > 0) {
				$slides.find("li:nth-last-child(-n+4)").clone().prependTo($slides);
				$slides.addClass("animate-left");
				$slides.css("animation-duration", slidesLength * 3 + "s");
			}
		}
	});




	// slide frame animation
	$('.heromarquee__sequence').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		fade: true,
		autoplaySpeed: 400,
		speed: 0,
		pauseOnHover: false,
		pauseOnFocus: false,
		swipe: false,
	});


	// change with click btn on slider
	$('.heromarquee__btn').on('click', function () {
		$('.heromarquee').toggleClass('active');
		$('.header__switch').toggleClass('active');
		$('.pagewrapper').toggleClass('dark-theme');
	});


	// GSAP motions
	function motions() {
		gsap.registerPlugin(ScrollTrigger);

		// topmarquee
		gsap.to(".topmarquee", {
			scale: 3,
			transformOrigin: "50% 100%",
			scrollTrigger: {
				trigger: ".header",
				start: "top 0px",
				end: "top -3000px",
				scrub: 0.8,
			}
		});

		// bottommarquee
		gsap.fromTo(".bottommarquee", {
			scale: 2,
			transformOrigin: "100% 100%"
		},
			{
				scale: 1,
				transformOrigin: "50% 100%",
				scrollTrigger: {
					trigger: ".bottomtriger",
					start: "top 100%",
					end: "top 0",
					scrub: 0.8,
					markers: false,
				}
			});
	}


	if (notMobile()) {
		motions();
	}

	// services

	const tl = gsap.timeline();
	
	tl.fromTo('.services__item-second', { x: '-100%', y: '85%', ease : "easyInOut" }, { y: '5%' });
	tl.fromTo('.services__item-third', { x: '-200%', y: '90%', ease : "easyInOut" }, { y: '10%'});
	tl.fromTo('.services__item-fourth', { x: '-300%', y: '95%', ease : "easyInOut" }, { y: '15%'});
	
	ScrollTrigger.create({
		animation: tl,
		trigger: '.services',
		start: 'top top',
		end: '3000px',
		scrub: 1,
		pin: true,
	});
	
	// const tl1 = gsap.timeline();
	// tl1.fromTo('.s1', { scale: 1}, { x: 0, y: 0, scale: 0.4 });
	// tl1.fromTo('.s2', { scale: 1}, { x: 0, y: 0, scale: 0.4 });
	// tl1.fromTo('.s3', { scale: 1}, { x: 0, y: 0, scale: 0.4 });
	// tl1.fromTo('.s4', { scale: 1}, { x: 0, y: 0, scale: 0.4 });

	// ScrollTrigger.create({
	// 	animation: tl1,
	// 	trigger: '.services__item',
	// 	start: 'top top',
	// 	end: '1000px',
	// 	scrub: 1,
	// 	pin: true,
	// });


	// clock
	function reset() {
		let timeList = document.querySelectorAll(".P");
		timeList.forEach(P => {
			if (P.childElementCount <= 0) {
				P.appendChild(document.querySelector("#zone_temp").firstElementChild.cloneNode(true));
				P.appendChild(document.querySelector("#zone_temp").lastElementChild.cloneNode(true));
			}
			P.querySelector(".name").innerText = P.id;
			let time_zone = P.getAttribute("time-zone");
			let localTime = getTime(time_zone);
			P.querySelector(".time").innerText = localTime.time;
		});
	}
	setInterval(reset, 1000);
	function getTime(timeZone) {
		let now = new Date(Date.now());
		let time = now.toLocaleTimeString('en-US', { timeZone, hour12: false });
		return { time };
	}

	// styleselect
	$("input, select").styler();

	// scroll to anchor
	document.querySelectorAll('.header__btn a[href^="#"').forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			let href = this.getAttribute('href').substring(1);
			const scrollTarget = document.getElementById(href);
			const topOffset = document.querySelector('.header').offsetHeight;
			const elementPosition = scrollTarget.getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;

			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			});
		});
	});

	// custom Smooth Scroll for GSAP
	// smoothScroll(".scrollContent");
	// function smoothScroll(content, viewport, smoothness) {
	// 	content = gsap.utils.toArray(content)[0];
	// 	smoothness = smoothness || 1;

	// 	gsap.set(viewport || content.parentNode, { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 });
	// 	gsap.set(content, { overflow: "visible", width: "100%" });

	// 	let getProp = gsap.getProperty(content),
	// 		setProp = gsap.quickSetter(content, "y", "px"),
	// 		setScroll = ScrollTrigger.getScrollFunc(window),
	// 		removeScroll = () => content.style.overflow = "visible",
	// 		killScrub = trigger => {
	// 			let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
	// 			scrub && scrub.pause();
	// 			trigger.animation.progress(trigger.progress);
	// 		},
	// 		height, isProxyScrolling;

	// 	function refreshHeight() {
	// 		height = content.clientHeight;
	// 		content.style.overflow = "visible"
	// 		document.body.style.height = height + "px";
	// 		return height - document.documentElement.clientHeight;
	// 	}

	// 	ScrollTrigger.addEventListener("refresh", () => {
	// 		removeScroll();
	// 		requestAnimationFrame(removeScroll);
	// 	})
	// 	ScrollTrigger.defaults({ scroller: content });
	// 	ScrollTrigger.prototype.update = p => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

	// 	ScrollTrigger.scrollerProxy(content, {
	// 		scrollTop(value) {
	// 			if (arguments.length) {
	// 				isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
	// 				setProp(-value);
	// 				setScroll(value);
	// 				return;
	// 			}
	// 			return -getProp("y");
	// 		},
	// 		scrollHeight: () => document.body.scrollHeight,
	// 		getBoundingClientRect() {
	// 			return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
	// 		}
	// 	});

	// 	return ScrollTrigger.create({
	// 		animation: gsap.fromTo(content, { y: 0 }, {
	// 			y: () => document.documentElement.clientHeight - height,
	// 			ease: "none",
	// 			onUpdate: ScrollTrigger.update
	// 		}),
	// 		scroller: window,
	// 		invalidateOnRefresh: true,
	// 		start: 0,
	// 		end: refreshHeight,
	// 		refreshPriority: -999,
	// 		scrub: smoothness,
	// 		onUpdate: self => {
	// 			if (isProxyScrolling) {
	// 				killScrub(self);
	// 				isProxyScrolling = false;
	// 			}
	// 		},
	// 		onRefresh: killScrub // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
	// 	});
	// }








});