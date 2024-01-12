var tl=gsap.timeline()

tl.to("#one, #two, #three",{
    width:"100%",
    ease:Expo.easeInOut,
    duration:4,
    stagger:2,
    scrub:2,
    repeat:-1,
})
