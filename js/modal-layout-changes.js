$(document).ready(function(){
    var $window = $(window);
    function checkWidthModal() {
        var windowsize = $window.width();
        if (windowsize >= 1010) {
            $(".inline").colorbox({rel:'inline', transition:"fade", inline:true, width:"800px"});
            /*var colorbox = $('#colorbox');
            var width = colorbox.width();
            if (width == 800){}
                $(".team-desktop").show();
                $(".team-tablet").hide();
            }*/
            // console.log("over 1024px - desktop");
        }
        else if (windowsize < 1010 && windowsize >= 754) {
            $(".inline").colorbox({rel:'inline', transition:"fade", inline:true, width:"600px"});
            /*var section = $('.section');
            var width = section.width();
            if (width == 800){}
                $(".team-desktop").hide();
                $(".team-tablet").show();
            }*/
            // console.log("over 768px - tablet");
        }
        else if (windowsize < 754 && windowsize >= 466) {
            $(".inline").colorbox({rel:'inline', transition:"fade", inline:true, width:"400px"});
            /*var section = $('.section');
            var width = section.width();
            if (width == 800){}
                $(".team-desktop").hide();
                $(".team-tablet").hide();
            }*/
            // console.log("over 480px - small tablet/big smartphone");
        }
        else if (windowsize < 466) {
            $(".inline").colorbox({rel:'inline', transition:"fade", inline:true, width:"300px"});
            /*var section = $('.section');
            var width = section.width();
            if (width == 800){}
                $(".team-desktop").hide();
                $(".team-tablet").hide();
            }*/
            // console.log("under 480px - smartphone");
        }
    }
    // Execute on load
    checkWidthModal();
    // Bind event listener
    $(window).resize(checkWidthModal);
});