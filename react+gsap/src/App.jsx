import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import img from "./assets/image.png";
import { useState } from "react";

const App = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [r, setR] = useState(0);

    const imgRef = useRef(null);

    useGSAP(() => {
        gsap.to(imgRef.current, {
            x: x,
            y: y,
            rotation: r,
            duration: 1.5,
            delay: 0.25,
            ease: "bounce.out",
        });
    }, [x, y, r]);

    function animate() {
        setX(gsap.utils.random(-600, 600, 20));
        setY(gsap.utils.random(-250, 250, 20));
        setR(gsap.utils.random(-360, 360, 30));
    }

	return (
		<main>
			{/* <button className="btn" onClick={animate}>Animate</button> */}
            <img ref={imgRef} src={img} alt="mosquitoe" onMouseEnter={animate} />
		</main>
	);
};

export default App;
