(function ($) {
	$(document).ready(function () {

		jQuery('.scrolltotop').click(function () {
			jQuery('html').animate({ 'scrollTop': '0px' }, 400);
			return false;
		});

		jQuery(window).scroll(function () {
			var upto = jQuery(window).scrollTop();
			if (upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		// code for menu
		$(".header-two .tigger").click(function () {
			$(this).next(".header-two ul.tigg").slideToggle();
			return false;
		});

	
		var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };
		var hamburgers = document.querySelectorAll(".hamburger");
		if (hamburgers.length > 0) {
			forEach(hamburgers, function (hamburger) {
				hamburger.addEventListener("click", function () {
					this.classList.toggle("is-active");
				}, false);
			});
		}

	});
})(jQuery);


$("#declaration-form").on("submit", function (event) {
	event.preventDefault();
	var checkBox = $("input[type='checkbox'].checkbox_input");
	if (checkBox.length == checkBox.filter(":checked").length) {
	  setCookie("accept_conditions", 'true', 7);
	  $('#declaration-form-alert').hide();
	} else {
	  $('#declaration-form-alert').show();
	}
  });

  function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	$('.overlay').fadeOut();
	$('body').removeClass('overlay-open');
  }
  
  function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }
  
  function checkCookie() {
	var myCookie = getCookie("accept_conditions");
	if (myCookie == null || myCookie == '') {
	  $('.overlay').fadeIn();
	  $('body').addClass('overlay-open');
	}
	else {
	  $('.overlay').fadeOut();
	  $('body').removeClass('overlay-open');
	}
  }
  