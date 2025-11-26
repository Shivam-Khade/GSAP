gsap.from("#page1 #box", {
    scale: 0,
    duration: 2,
    delay: 1,
    rotate: 360
})

gsap.from("#page2 #box", {
    scale: 0,
    duration: 2,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page2 #box",
        start: "top 80%",
        end: "top 20%",
        scrub: 5,
        pin: true
    }
})