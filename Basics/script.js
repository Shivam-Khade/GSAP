gsap.to("#box1", {
    x: 1000,
    rotate: 360,
    duration: 2,
    delay: 1,
    backgroundColor: "blue",
    borderRadius: "50%",
    repeat: 1,
    yoyo: true
})

gsap.from("#box2", {
    x: 1000,
    rotate: 360,
    duration: 2,
    delay: 1,
    backgroundColor: "red",
    borderRadius: "50%",
    repeat: 1,
    yoyo: true
})

gsap.from("h1", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1,
    stagger: 1 // one at a time | each 1 sec
})