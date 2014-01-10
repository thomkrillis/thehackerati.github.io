$(document).ready(function() {
    var windowHeight = $(document).height()
    var topHatHeight = $('.header-section').height()    
    var sectionOneHeight = windowHeight - topHatHeight

    $('.section').css('height',windowHeight+'px')
    $('.section1').css('height', sectionOneHeight + "px")

});
