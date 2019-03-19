// client-side js
// run by the browser each time your view template is loaded
/* global TimelineMax, Power0, Power2, Bounce, Back */


console.log('hello world :o');

// javaaascripttttt
  (function(){
    let tl1 = new TimelineMax();    
    tl1.to('#myAd', .4, { opacity: 1 })
      .from('#myAd_txt2', 1.3, { top: -100,  ease: Power2.easeOut  })
      .to('#myAd_ltr01', 2, { top: 210, left: -70, rotation: -100, ease: Power2.easeOut }, 'myAd_ltr-=.9')
      .to('#myAd_ltr02', 2, { top: 210, left: -60, rotation: 45, ease: Power2.easeOut }, 'myAd_ltr-=.9')
      .to('#myAd_ltr03', 2, { top: 210, left: -50, rotation: -6, ease: Power2.easeOut }, 'myAd_ltr-=.9')
      .to('#myAd_ltr04', 2, { top: 210, left: -40, rotation: 13, ease: Power2.easeOut }, 'myAd_ltr-=.9')
      .to('#myAd_ltr05', 2, { top: 210, left: -30, rotation: -210, ease: Power2.easeOut }, 'myAd_ltr-=.9')
      .to('#myAd_ltr06', 2, { top: 210, left: -20, rotation: -111, ease: Power2.easeOut }, 'myAd_ltr-=.9')
      .to('#myAd_ltr07', 2, { top: 210, left: -10, rotation: -100, ease: Power2.easeOut }, 'myAd_ltr-=.9')
      .to('#myAd_ltr08', 2, { top: 210, left:  0, rotation: -200, ease: Power2.easeOut }, 'myAd_ltr-=.9')
      .to('#myAd_ltr09', 2, { top: 210, left: 10, rotation: -150, ease: Power2.easeOut }, 'myAd_ltr-=.9')
      .to('#myAd_ltr10', 2, { top: 210, left: 20, rotation: 300, ease: Power2.easeOut }, 'myAd_ltr-=.9')
      .to('#myAd_ltr11', 2, { top: 210, left: 30, rotation: 250, ease: Power2.easeOut }, 'myAd_ltr-=.9')
      .to('#myAd_ltr12', 2, { top: 210, left: 40, rotation: 40, ease: Power2.easeOut }, 'myAd_ltr-=.9')
      .to('#myAd_ltr13', 2, { top: 210, left: 50, rotation: -10, ease: Power2.easeOut }, 'myAd_ltr-=.9')
      .to('#myAd_ltr14', 2, { top: 210, left: 60, rotation: 190, ease: Power2.easeOut }, 'myAd_ltr-=.9')
      .to('#myAd_ltr15', 2, { top: 210, left: 70, rotation: -320, ease: Power2.easeOut }, 'myAd_ltr-=.9')
      .to('#myAd_ltr16', 2, { top: 210, left: 80, rotation: 230, ease: Power2.easeOut }, 'myAd_ltr-=.9')
      .from('#myAd_marker', 1.2, { top:-110, ease: Bounce.easeOut}, '-=.5')
      .from('#myAd_shadow', 1.2, { opacity: 0, ease: Bounce.easeOut }, '-=1.2')
      .from('#myAd_txt3', 1.2, { scale:.2, opacity: 0, ease: Power2.easeOut }, '-=.9')
      .from('#myAd_surfboard', 1.3, { top: 260, rotation: -130, left: 300, ease: Back.easeOut }, 'cta');
    
      // tl1.seek('cta');
    
    let tl2 = new TimelineMax({ repeat: -1 });
    tl2.to('#myAd_clouds', 50, { backgroundPositionX: 649, ease: Power0.easeOut });
      
  }());