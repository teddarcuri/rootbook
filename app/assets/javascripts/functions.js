$(document).ready(function(){
	$("#toolbox-container").click(function(){
		$("#toolbox").fadeToggle();
	})
});

// Sticky footer

$(document).ready(function(){
	if ( $(window).height() > $("body").height() ) {
		$("footer").css({
			"position" : "absolute",
			"bottom" : "0"
		});
	}
});