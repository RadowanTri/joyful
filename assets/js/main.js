$(document).ready(function($){
    "use strict";

  //==============================
  // smooth scroll
  //==============================
// $('.count').each(function () {
//         $(this).prop('Counter',0).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 1000,
//             easing: 'swing',
//             step: function (now) {
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });

// Magnific popup
   $('#youtube-video').magnificPopup({
      type:'iframe',
      iframe: {
        patterns: {
          youtube: {
            index: 'youtube.com/', 

            id: 'v=', 
            src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
          }

        },
        srcAction: 'iframe_src',
      }
    });
}(jQuery));
