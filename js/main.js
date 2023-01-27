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
	$('.slide-list').each(function () {
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
				$slides.css("animation-duration", slidesLength * 4 + "s");
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

	// services

	const tl = gsap.timeline();

	tl.fromTo('.services__item-second', { x: '-100%', y: '80%', ease: "easyInOut" }, { y: '5%', delay: 0.1, ease: "easyInOut" });
	tl.fromTo('.services__item-third', { x: '-200%', y: '85%', ease: "easyInOut" }, { y: '10%', ease: "easyInOut" });
	tl.fromTo('.services__item-fourth', { x: '-300%', y: '90%', ease: "easyInOut" }, { y: '15%', ease: "easyInOut" });
	tl.fromTo('.services__item-five', { x: '-400%', y: '95%', ease: "easyInOut" }, { y: '20%', delay: 0.1, ease: "easyInOut" });

	ScrollTrigger.create({
		animation: tl,
		trigger: '.services__desc',
		start: 'top top',
		end: '5500px',
		scrub: 0.4,
		pin: true,
	});


	function motions() {
		gsap.registerPlugin(ScrollTrigger);

		// topmarquee
		gsap.to(".topmarquee", {
			scale: 2,
			transformOrigin: "50% 100%",
			scrollTrigger: {
				trigger: ".header",
				start: "top 0px",
				end: "top -3000px",
				scrub: 0.5,
			}
		});

		// bottommarquee
		gsap.fromTo(".bottommarquee", {
			scale: 1.8,
			transformOrigin: "100% 100%"
		},
			{
				scale: 1,
				transformOrigin: "50% 100%",
				scrollTrigger: {
					trigger: ".bottomtriger",
					start: "top 120%",
					end: "top 0",
					scrub: 0.5,
					markers: false,
				}
			});
	}


	if (notMobile()) {
		motions();
	}




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


  // ------------ checkbox form -------------------- //
  $('.jq-checkbox').on('change', function(){
    if($(this).hasClass('checked')) {
      console.log('disable')
      $('.formsect__btn').attr('disabled', false);
    }
    else {
      $('.formsect__btn').attr('disabled', true);
    }
  });
	
		//thank page 	
	document.addEventListener('wpcf7mailsent', function (event) {
		if ('296' == event.detail.contactFormId) {
			location = 'http://softkit/en/thank-you-page/';
		} else if ('295' == event.detail.contactFormId) {
			location = 'http://softkit/thank-you-page/';
		}
	}, false);






});