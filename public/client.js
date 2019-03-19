// client-side js
// run by the browser each time your view template is loaded
/* global TimelineMax, Power0, Power2, Bounce, Back */


console.log('hello world :o');

// javaaascripttttt
  (function(){
    let tl1 = new TimelineMax();    
    
    tl1.to('#myAd', .4, { opacity: 1 })
      .from('#myAd_txt2', 1.3, { top: -100,  ease: Power2.easeOut  })
      .to('#myAd_txt1', 1.3, { top: 210, ease: Power2.easeOut  }, '-=.9')
      .from('#myAd_marker', 1.2, { top:-110, ease: Bounce.easeOut}, '-=.5')
      .from('#myAd_shadow', 1.2, { opacity: 0, ease: Bounce.easeOut }, '-=1.2')
      .from('#myAd_txt3', 1.2, { scale:.2, opacity: 0, ease: Power2.easeOut }, '-=.9')
      .from('#myAd_surfboard', 1.3, { top: 260, rotation: -130, left: 300, ease: Back.easeOut }, 'cta');
    
      // tl1.seek('cta');
    
    let tl2 = new TimelineMax({ repeat: -1 });
    
    tl2.to('#myAd_clouds', 50, { backgroundPositionX: 649, ease: Power0.easeOut });
      
  }());