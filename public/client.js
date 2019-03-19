// client-side js
// run by the browser each time your view template is loaded
/* global TimelineMax, Power2 */


console.log('hello world :o');

// javaaascripttttt
  (function(){

    let tl1 = new TimelineMax();
    
    
    tl1.from('#myAd_txt2', 1.3, { top: -100,  ease: Power2.easeOut, y: -500  })
      .to();
    
  }());