$(document).ready(function(){
    var $window = $(window);
    function checkWidth() {
        var windowsize = $window.width();
        var colorbox = $('#colorbox');
        var width = colorbox.width();

        if (windowsize >= 1010) {
            $(".inline").colorbox({rel:'inline', transition:"fade", inline:true, width:"800px"});
            $(".inline").colorbox.resize({width:"800px"});
            // console.log("over 1024px - desktop");
        }
        if (windowsize < 1010 && windowsize >= 754) {
            $(".inline").colorbox({rel:'inline', transition:"fade", inline:true, width:"610px"});
            $(".inline").colorbox.resize({width:"610px"});
            // console.log("over 768px - tablet");
        }
        if (windowsize < 754 && windowsize >= 466) {
            $(".inline").colorbox({rel:'inline', transition:"fade", inline:true, width:"400px"});
            $(".inline").colorbox.resize({width:"400px"});
            // console.log("over 480px - small tablet/big smartphone");
        }
        if (windowsize < 466) {
            $(".inline").colorbox({rel:'inline', transition:"fade", inline:true, width:"300px"});
            $(".inline").colorbox.resize({width:"300px"});
            // console.log("under 480px - smartphone");
        }
    }
// Execute on load
checkWidth();
// Bind event listener
$(window).resize(checkWidth);
});