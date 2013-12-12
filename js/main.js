/* This function is for the mobile navigation expansion.
 * When you click on the expansion button, it toggles the mobile
 * navigation by alternately adding and removing an .active class.

function expandMobileNav() {
	
	var navExpansion = $("#nav-expansion");
	var navigation = $("#navigation-mobile");
	var header = $("#header");

	$(navExpansion).click(function(event) {
		
		$(this).toggleClass("active");

		if ($(this).hasClass('active')) {
			$(navigation).show();
			$(header).animate({
        		height: '+=50px'
    		}, 500);
		}

		if (!$(this).hasClass('active')) {
			$(navigation).hide();
			$(header).animate({
        		height: '-=50px'
    		}, 500);
		}

	});

}

$(window).resize(function() {

	var navigation = $("#navigation-mobile");
	var navExpansion = $("#nav-expansion");
	var header = $("#header");

	if (($(window).width() > 744) && $(navExpansion).hasClass("active")) {
        $(navigation).hide();
		$(navExpansion).removeClass("active");
		$(header).animate({
        	height: '-=50px'
    	}, 500);
    }

});*/

$(document).ready(function() {
 
    /*expandMobileNav();*/
 
});