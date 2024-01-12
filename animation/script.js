
var tl=gsap.timeline();
tl.from("#logo ,.nav-2,.nav-3",{
    y:-200,
    delay:0.5,
    duration:0.9,
    opacity:0,
    stagger:0.2
})

tl.from(".main h1",{
    y:100,
    stagger:0.2,
    opacity:0,
})
tl.from(".photo",{
    opacity:0,
    opacity:0,
})
tl.from(".right h3",{
    y:100,
    stagger:0.2,
    opacity:0,
})

tl.from(".middle",{
    y:100,
    opacity:0
})
tl.to(".bottom h3",{
    y:30,
    repeat:-1,
    yoyo:true
})