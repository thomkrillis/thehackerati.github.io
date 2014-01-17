$(document).ready(function(){
    $(".perks-cell1").mouseover(function(){
        $(this).css('width','700px')
        $('.perks-cell3').css('width','0px');
    }).mouseout(function(){
        $(this).css('width','300')
        $('.perks-cell3').css('width','300px');
    })

    $(".perks-cell2").mouseover(function(){
        $(this).css('width','700px')
    }).mouseout(function(){
        $(this).css('width','300')
    })
    
    $(".perks-cell3").mouseover(function(){
        $(this).css('width','700px')
    }).mouseout(function(){
        $(this).css('width','300')
    })

    $(".perks-cell4").mouseover(function(){
        $(this).css('width','700px')
    }).mouseout(function(){
        $(this).css('width','300')
    })
    
    $(".perks-cell5").mouseover(function(){
        $(this).css('width','700px')
    }).mouseout(function(){
        $(this).css('width','300')
    })

    $(".perks-cell6").mouseover(function(){
        $(this).css('width','700px')
    }).mouseout(function(){
        $(this).css('width','300')
    })

})
