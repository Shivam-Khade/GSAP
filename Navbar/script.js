const t = gsap.timeline({paused: true});
document.querySelector("#nav i").addEventListener("click", () => {
    t.play();
});

document.querySelector("#full i").addEventListener("click", () => {
    t.reverse();
});

t.to("#full", {
    right: 0,
    duration: 0.4
})

t.from("#full h4", {
    x: 150,
    duration: 0.6,
    stagger: 0.2,
    opacity: 0
})

t.from("#full i", {
    scale: 0,
    duration: 0.4,
    opacity: 0
})