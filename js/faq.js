$(document).ready(function() {
	$("#faq #accordion .card-header").click(function() {
	    $(this).find('img').toggleClass("rotate");
	});	
});