/*global $*/
/*the way to call an element in jquery it write it like css with dot to the class and hach in id*/

$(document).ready(function () {          //(document).ready it is active this function when the file html load without waiting the photos
	/*nav bar*/
	$("header> nav> div.container> ul:last-of-type> li button").on("click", function () {
		if ($(this).parents("nav").css("height") <= "100px") {
			$("header> nav> div.container> ul:last-of-type> li button").parents("nav").css("height", "700px");
			$("header> nav>").css("background-color", "rgba(0, 0, 0, 0.9)");
		} else {
			$("header> nav> div.container> ul:last-of-type> li button").parents("nav").css("height", "100px");
			$("header> nav>").css("background-color", "transparent");
		}
	});

	$(window).on("resize", function () {
		$("header> nav").css("height", "100px");
		$("header> nav>").css("background-color", "transparent");
	});
	/*nav bar*/
	/*the scroll*/
		/*scroll search*/
	$("header main.scroll> .scroll-back> .container> div:first-of-type> ul li").on("click", function () {
		if ($(this).hasClass("one")) {
			$(this).parent("ul").siblings("div.two").css("display", "none");
			$(this).parent("ul").siblings("div.one").css("display", "block");
		} else {
			$(this).parent("ul").siblings("div.one").css("display", "none");
			$(this).parent("ul").siblings("div.two").css("display", "block");
		}
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});
	
		/*button scroll*/
	$("header main.scroll .container> div> span").on("click", function () {
		if ($(window).scrollTop() >= "500") {
			$("html").animate({"scrollTop": "0"}, 2000);
			$("header main.scroll> .scroll-back> .container> div:last-of-type i").css("transform", "rotate(0deg)");
		} else {
			$("html").animate({"scrollTop": "500"}, 2000);
			$("header main.scroll> .scroll-back> .container> div:last-of-type i").css("transform", "rotate(180deg)");
		}
	});
	$(window).on("scroll", function () {
		if ($(window).scrollTop() >= "500") {
			$("header main.scroll> .scroll-back> .container> div:last-of-type i").css("transform", "rotate(180deg)");
		} else {
			$("header main.scroll> .scroll-back> .container> div:last-of-type i").css("transform", "rotate(0deg)");
		}
	});
	/*the scroll*/
	/*the spere*/
	$(".seller .container span").on("click", function () {
		$(".seller .container> div> div.row").siblings("div").toggle();
		$(".seller .container> div> div.row").toggleClass("active")
	});
	/*the spere*/
});