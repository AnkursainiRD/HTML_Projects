const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var timeout;

function mousefollower(xsacle,yscale){
    window.addEventListener("mousemove", function (dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xsacle}, ${yscale})`;
    })
}

function pageoneAnimation(){
    var tl=gsap.timeline();
    tl.from(".nav",{
        y:'-12',
        duration:1,
        opacity:0,
        ease:Expo.easeInout,
        scrub:3
    })
    tl.to(".belem",{
        y:0,
        ease:Expo.easeInout,
        duration:1,
        stagger:0.2,
        scrub:3,
    })
    tl.from(".footer",{
        y:-10,
        opacity:0,
        duration:1,
        ease:Expo.easeInout,
        scrub:3
    })
}

function circleFlat(){
    var xsacle=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove", function(dets){
        this.clearTimeout(timeout);
      var xdiff=dets.clientX-xprev;
      var ydiff=dets.clientY-yprev;

      xsacle=gsap.utils.clamp(0.8,1.2, xdiff);
      yscale=gsap.utils.clamp(0.8,1.2, ydiff);

      xprev=dets.clientX;  
      yprev=dets.clientY;

      mousefollower(xsacle,yscale);
      timeout=setTimeout(function(){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1 ,1)`;
      },100)
    })
}

document.querySelectorAll(".elem").forEach(function (elem){

    var diffe=0;
    var rotate=0;


    elem.addEventListener("mouseleave", function(dets){

        var diffrence=dets.clientY - elem.getBoundingClientRect().top;
            
         gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration:0.5
         });
        });

    elem.addEventListener("mousemove", function(dets){

    var diffrence=dets.clientY - elem.getBoundingClientRect().top;
    diffe=dets.clientX-rotate;
    rotate=dets.clientX;
        
     gsap.to(elem.querySelector("img"),{
        opacity:1,
        ease:Power3,
        top:diffrence,
        left:dets.clientX,
        rotate:gsap.utils.clamp(-20,20,diffe)
     });
    });
});

circleFlat();
pageoneAnimation();
 mousefollower();
