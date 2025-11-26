function breakTextIntoSpans() {
    const h1 = document.querySelector('h1');
    const h1Text = h1.textContent;

    const splitText = h1Text.split("");
    let clutter = "";

    const mid = Math.floor(h1Text.length / 2);

    splitText.forEach(function(letter, idx) {
        if (letter === " ") {
            // Prevent weird spacing: use non-breaking space inside span
            clutter += `<span class="space">&nbsp;</span>`;
        } 
        else if (idx <= mid + 1) {
            clutter += `<span class='a'>${letter}</span>`;
        } 
        else {
            clutter += `<span class='b'>${letter}</span>`;
        }
    });

    h1.innerHTML = clutter;
}

breakTextIntoSpans();

gsap.from("h1 .a", {
    y: 100,
    duration: 1,
    opacity: 0,
    delay: 0.4,
    stagger: 0.15,
    ease: "bounce.out"
});

gsap.from("h1 .b", {
    y: 100,
    duration: 1,
    opacity: 0,
    delay: 0.4,
    stagger: -0.15,
    ease: "bounce.out"
});
