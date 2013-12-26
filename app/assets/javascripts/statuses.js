
$(document).ready(function(){
	$(".notice").delay(5000).slideUp();
});

$(document).ready(function(){
	$(".status").hover(function(){
		$(this).toggleClass("hover")
	});
});