/* This function is for the mobile navigation expansion.
 * When you click on the expansion button, it toggles the mobile
 * navigation by alternately adding and removing an .active class.
 */

// DOM Ready      
/*$(function() {

   var clonedHeaderRow;

   $(".persist-area").each(function() {
       clonedHeaderRow = $(".persist-header", this);
       clonedHeaderRow
         .before(clonedHeaderRow.clone())
         .css("width", clonedHeaderRow.width())
         .addClass("floatingHeader");
         
   });
   
   $(window)
    .scroll(UpdateTableHeaders)
    .trigger("scroll");
   
});*/

function expandMobileNav() {
	
	var navExpansion = $(".nav-tray");
	var navigation = $("#navigation-mobile");
	var header = $("#header");

	$(navExpansion).click(function(event) {
		
		$(this).toggleClass("active");

		if ($(this).hasClass('active')) {
			$(navigation).show();
			$(navExpansion).animate({
        		left: '+=100%'
    		}, 500);
		}

		if (!$(this).hasClass('active')) {
			$(navigation).hide();
			$(header).animate({
        		height: '-=100%'
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

});

/*$(window).scroll(function() {
    if ($(this).scrollTop() < 200) {
        $("#persistent-header").hide();
    	console.log("haven't scrolled down yet");
    }
    else {
        $("#persistent-header").show();
    	console.log("just scrolled down");
    }
});*/

$(document).ready(function() {
 
    expandMobileNav();
 
});
