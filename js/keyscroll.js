$(document).ready(function() {
    var currentSection = 1;
    var nextSection = currentSection + 1;
    var previousSection = currentSection - 1;
    var ctrlDown = false;

    // Listen for ctrl key
    $(window).keydown(function(event) {
        if (event.keyCode === 17) ctrlDown = true;
    }).keyup(function(event) {
        if (event.keyCode === 17) ctrlDown = false;
    }); 

    $(window).keydown(function(event){
        
        switch(event.keyCode) {
            case 74:            // If the j key is pressed
                window.scrollBy(0,50);
                break;
            case 75:            // If the k key is pressed
                window.scrollBy(0,-50);
                break;
        }
        
        // Page up
        if(ctrlDown && event.keyCode === 66) {
            console.log("page up");
        }
    
        // Page down
        if(ctrlDown && event.keyCode === 70) {
            console.log("page down");
        }    
    })
})
