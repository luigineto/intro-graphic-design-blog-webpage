$(document).ready(function() {

	$(".img-col-1").click(function() {
		$(".img-hidden-col-1").toggle();
		$(".img-showing-col-1").toggle();
	});

	$(".img-col-2").click(function() {
		$(".img-hidden-col-2").toggle();
		$(".img-showing-col-2").toggle();
	});

	$(".img-col-3").click(function() {
		$(".img-hidden-col-3").toggle();
		$(".img-showing-col-3").toggle();
	});

	$(".btn-col-1").click(function() {
		$(".info-hidden-col-1").toggle();
		$(".info-showing-col-1").toggle();
	});

	$(".btn-col-2").click(function() {
		$(".info-hidden-col-2").toggle();
		$(".info-showing-col-2").toggle();
	});

	$(".btn-col-3").click(function() {
		$(".info-hidden-col-3").toggle();
		$(".info-showing-col-3").toggle();
	});
});