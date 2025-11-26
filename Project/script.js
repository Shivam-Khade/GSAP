function section1Animation() {
    let tl = gsap.timeline();

    tl.from("nav h1, nav h4, nav button", {
        duration: 0.8,
        delay: 0.5,
        y: -40,
        opacity: 0,
        ease: "quad.out",
        stagger: 0.15
    })

    tl.from(".center-part1 h1", {
        x: -400,
        opacity: 0,
        duration: 0.6,
    })

    tl.from(".center-part1 p", {
        x: -200,
        opacity: 0,
        duration: 0.5,
    })

    tl.from(".center-part1 button", {
        y: 100,
        opacity: 0,
        duration: 0.7,
        ease: "bounce.out"
    })

    tl.from(".center-part2 img", {
        opacity: 0,
        x: 400,
        duration: 1,
        ease: "power4.out"
    }, "-=1.5");

    tl.from(".section1bottom img", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power4.out"
    })
}

section1Animation();

function section2Animation() {
    let t12 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            start: "top 50%",
            end: "top 0%",
            scrub: 2
        }
    });

    t12.from(".section2 .services", {
        y: 30,
        opacity: 0,
        duration: 0.5
    });

    t12.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "anim1");

    t12.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim1");

    t12.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "anim2");

    t12.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim2");
}

section2Animation();