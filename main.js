$(document).ready(function () {
	//click on a button
	//button turns bold
	//choices filter

	$(".filter").on("click", function (e) {
		e.preventDefault();

		var clicked = $(this);
		var chosenfilter = clicked.data("filter");

		clicked.toggleClass("selected");

		$(".item.active").removeClass("active");

		$(".filter.selected").each(function () {
			var this_filter = $(this);
			var filter = this_filter.data("filter");
			$("." + filter).addClass("active");
		});

		$("#reset").on("click", function (e) {
			e.preventDefault();
			$(".filter.selected").removeClass("selected");
		});

	});


});
