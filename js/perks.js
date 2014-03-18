$(document).ready(function() {
  var $window = $(window);

  function checkWidth() {
    var windowsize = $window.width();

    if (windowsize >= 1010) {

	    $('.perks-icon1').css('opacity','1');
	    $('#perks-copy1').css('opacity','0');

	    $('.perks-icon2').css('opacity','1');
	    $('#perks-copy2').css('opacity','0');

	    $('.perks-icon3').css('opacity','1');
	    $('#perks-copy3').css('opacity','0');

	    $('.perks-icon4').css('opacity','1');
	    $('#perks-copy4').css('opacity','0');

	    $('.perks-icon5').css('opacity','1');
	    $('#perks-copy5').css('opacity','0');

	    $('.perks-icon6').css('opacity','1');
	    $('#perks-copy6').css('opacity','0');

	    $('.perks-icon1').mouseover(function(){
	        $(this).css('opacity','0');
	        $('#perks-copy1').css('opacity','1');
	    }).mouseout(function() {
	        $(this).css('opacity','1');
	        $('#perks-copy1').css('opacity','0');
	    });

	    $('.perks-icon2').mouseover(function(){
	        $(this).css('opacity','0');
	        $('#perks-copy2').css('opacity','1');
	    }).mouseout(function() {
	        $(this).css('opacity','1');
	        $('#perks-copy2').css('opacity','0');
	    });

	    $('.perks-icon3').mouseover(function(){
	        $(this).css('opacity','0');
	        $('#perks-copy3').css('opacity','1');
	    }).mouseout(function() {
	        $(this).css('opacity','1');
	        $('#perks-copy3').css('opacity','0');
	    });

	    $('.perks-icon4').mouseover(function(){
	        $(this).css('opacity','0');
	        $('#perks-copy4').css('opacity','1');
	    }).mouseout(function() {
	        $(this).css('opacity','1');
	        $('#perks-copy4').css('opacity','0');
	    });

	    $('.perks-icon5').mouseover(function(){
	        $(this).css('opacity','0');
	        $('#perks-copy5').css('opacity','1');
	    }).mouseout(function() {
	        $(this).css('opacity','1');
	        $('#perks-copy5').css('opacity','0');
	    });
	  
	    $('.perks-icon6').mouseover(function(){
	        $(this).css('opacity','0');
	        $('#perks-copy6').css('opacity','1');
	    }).mouseout(function() {
	        $(this).css('opacity','1');
	        $('#perks-copy6').css('opacity','0');
	    });

    }

    else if(windowsize < 1010) {

      $('.perks-icon1').css('opacity','1');
      $('#perks-copy1').css('opacity','1');

      $('.perks-icon2').css('opacity','1');
      $('#perks-copy2').css('opacity','1');

      $('.perks-icon3').css('opacity','1');
      $('#perks-copy3').css('opacity','1');

      $('.perks-icon4').css('opacity','1');
      $('#perks-copy4').css('opacity','1');

      $('.perks-icon5').css('opacity','1');
      $('#perks-copy5').css('opacity','1');

      $('.perks-icon6').css('opacity','1');
      $('#perks-copy6').css('opacity','1');

	    $('.perks-icon1').mouseover(function(){
	        $(this).css('opacity','1');
	        $('#perks-copy1').css('opacity','1');
	    }).mouseout(function() {
	        $(this).css('opacity','1');
	        $('#perks-copy1').css('opacity','1');
	    });

	    $('.perks-icon2').mouseover(function(){
	        $(this).css('opacity','1');
	        $('#perks-copy2').css('opacity','1');
	    }).mouseout(function() {
	        $(this).css('opacity','1');
	        $('#perks-copy2').css('opacity','1');
	    });

	    $('.perks-icon3').mouseover(function(){
	        $(this).css('opacity','1');
	        $('#perks-copy3').css('opacity','1');
	    }).mouseout(function() {
	        $(this).css('opacity','1');
	        $('#perks-copy3').css('opacity','1');
	    });

	    $('.perks-icon4').mouseover(function(){
	        $(this).css('opacity','1');
	        $('#perks-copy4').css('opacity','1');
	    }).mouseout(function() {
	        $(this).css('opacity','1');
	        $('#perks-copy4').css('opacity','1');
	    });

	    $('.perks-icon5').mouseover(function(){
	        $(this).css('opacity','1');
	        $('#perks-copy5').css('opacity','1');
	    }).mouseout(function() {
	        $(this).css('opacity','1');
	        $('#perks-copy5').css('opacity','1');
	    });
	  
	    $('.perks-icon6').mouseover(function(){
	        $(this).css('opacity','1');
	        $('#perks-copy6').css('opacity','1');
	    }).mouseout(function() {
	        $(this).css('opacity','1');
	        $('#perks-copy6').css('opacity','1');
	    });
    }

  }

  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);

});
