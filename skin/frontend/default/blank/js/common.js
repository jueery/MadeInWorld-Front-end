jQuery(document).ready(function() {
  var ScrolltoTop = jQuery("#toTop"); /* scroll top link {{{ */
  jQuery(window).scroll(function() {
    if (jQuery(window).scrollTop() == "0") {
      jQuery(ScrolltoTop).fadeOut("slow")
    } else {
      jQuery(ScrolltoTop).fadeIn("slow")
    }
  });
  jQuery(ScrolltoTop).click(function() {
    jQuery('html, body').animate({
      scrollTop: 0
    },
    700)
  }); /* }}} */
  jQuery.fn.toggleInputText = function() { /* toggle input {{{ */
    var v = jQuery(this).val(); 
    if(jQuery(this).val() == "")
      jQuery(this).val(v).css({'color':'#898888'});
    jQuery(this).focus(function(){
      jQuery(this).val('').select().css({'color':'#000'});
    }).blur(function(){
      if(jQuery(this).val()==""){
         jQuery(this).val(v).css({'color':'#898888'});
      }
    });
  };/* }}} */
  jQuery("#minicart").hover(function(){ /* minicart show {{{ */
    if(!jQuery("#minicartContent").is(":animated"))
      jQuery("#minicartContent").slideDown();//.show();
  },function(){
      jQuery("#minicartContent").slideUp();//.hide();
  });/* }}} */
  jQuery('.switch-tabs > li').mouseover(function() {/* tab 切换 {{{ */
    jQuery(this).addClass('current').siblings().removeClass('current');

    var idx = jQuery('.switch-tabs > li').index(this);
    jQuery('.switch-blocks > li:eq(' + idx + ')').addClass('current').siblings().removeClass('current');
    return false;
  });/* }}} */
  /* #nav hover {{{ */
  jQuery(this).children('.widget-static-block').css('display','block');
  jQuery('#nav li').hover(function(){
    jQuery(this).children('.widget-static-block').show();
  },function(){
    jQuery(this).children('.widget-static-block').hide();
  });/* }}} */
/*
  jQuery("img").not("glidecontent img").lazyload({
    placeholder : "skin/frontend/default/blank/images/load.gif",
    effect : "show"
  });
*/
});
