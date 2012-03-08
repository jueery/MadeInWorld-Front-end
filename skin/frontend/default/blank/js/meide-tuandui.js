jQuery(document).ready(function() {
    jQuery('#coin-slider').coinslider({ 
      width: 800, 
      height: 400,
      navigation: false,
      delay: 5000,
      navigation: true,
      sDelay: 30, // delay beetwen squares in ms
      titleSpeed: 500, // speed of title appereance in ms
      hoverPause: true // pause on hover
    });
});
