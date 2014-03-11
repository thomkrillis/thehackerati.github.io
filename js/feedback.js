window.ATL_JQ_PAGE_PROPS = {
  "triggerFunction": function(showCollectorDialog) {
    //Requries that jQuery is available! 
    jQuery("#feedback").click(function(e){ 
      $('iframe, .atlwdg-loading').remove();
      e.preventDefault(); showCollectorDialog();  
      $('.atlwdg-popup').css({'left':'0px','top':'0px'});
      if ($(window).width() < 640) {
        if ($(window).width() < 350) {
          $('.group.ratings').css('padding','4px 0 4px 0px');
          $('form.aui legend>span').css({'padding':'5px 0 0 0','position':'relative'});
          $('form.aui .field-group>label').css({'margin-left':'0px','width':'auto'});
          $('form.aui .field-group, form.aui .group, form.aui .date-select').css('padding','0px 0 4px 0px');
          $('#atlwdg-container').css({'width':'250px','max-width':'250px','left':'0','position':'absolute','font-size':'.9em','margin-left':'0px','margin-top':'50px'});
          $('#atlwdg-blanket').css('display','none');
        }
        else {
          $('form.aui legend>span').css({'padding':'5px 0 0 0','position':'relative'});
          $('form.aui .field-group>label').css({'margin-left':'0px','width':'auto'});
          $('form.aui .field-group, form.aui .group, form.aui .date-select').css('padding','0px 0 4px 0px');
          $('#atlwdg-container').css({'width':'400px','max-width':'400px','left':'5%','position':'absolute','font-size':'.9em','margin-left':'0px','margin-top':'50px'});
          $('#atlwdg-blanket').css('display','none'); 
        }
      }
      else {  
        $('#atlwdg-container').css({'width':'75%','max-width':'75%','position':'fixed','left':'','margin-left':'12.5%','margin-top':'5%','top':'0px','left':'0px'}); 
      }
    }
  );
}};