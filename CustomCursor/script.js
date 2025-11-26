let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let imgDiv = document.querySelector("#image")

main.addEventListener("mousemove", (e)=>{
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        ease: "back.out",
        duration: 1
    })
})

imgDiv.addEventListener("mouseenter", ()=>{
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 3,
        backgroundColor: "rgba(235, 231, 231, 0.59)",
    })
})

imgDiv.addEventListener("mouseleave", ()=>{
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white",
    })
})