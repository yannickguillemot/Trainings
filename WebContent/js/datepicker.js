$(function() {
	$( "#date-text" ).datepicker({
		showButtonPanel: true,
		altFormat: "dd/mm/yyyy",
		autoSize: true
	});
});

$(".btn-toggle")
	.click(function() {
		window.alert("toggle !");
		$(this).css("background-color:red");
	    $(this).siblings('.sessions-menu').toggle();
});