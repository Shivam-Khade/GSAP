let tl = gsap.timeline()

tl.from("h2", {
    y: -20,
    opacity: 0,
    duration: 1
})

tl.from("h3", {
    y: -15,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3
})

tl.from("h1", {
    y: 20,
    opacity: 0,
    scale: 0.2,
    duration: 1,
    delay: 0.5,
})