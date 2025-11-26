let initialPath = `M 10 100 Q 250 100 490 100`;
let str = document.querySelector('#string');

str.addEventListener('mousemove', (e) => {
    let rect = str.getBoundingClientRect();

    // Mouse inside element
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;

    // Center of element
    let centerX = rect.width / 2;
    let centerY = rect.height / 2;

    // Offset from center (smooth + symmetrical)
    let offsetX = mouseX - centerX;
    let offsetY = mouseY - centerY;

    // Apply offset to control point
    let controlX = 250 + offsetX * 0.4; // 0.4 reduces intensity
    let controlY = 100 + offsetY * 0.4;

    // Optional limit (100% - 10px inside SVG)
    controlX = Math.min(490 - 10, Math.max(10 + 10, controlX));

    let path = `M 10 100 Q ${controlX} ${controlY} 490 100`;

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.1,
        ease: "none"
    });
});

str.addEventListener('mouseleave', () => {
    gsap.to("svg path", {
        attr: { d: initialPath },
        duration: 0.8,
        ease: "elastic.out(1, 0.3)"
    });
});