import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";

const App = () => {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);

  // Mosquito state
  const [mosquito, setMosquito] = useState({ x: 0, y: 0, r: 0 });

  // Bat state
  const [bat, setBat] = useState({ x: 0, y: 0 });

  // Animate mosquito on state change
  useGSAP(() => {
    if (!imgRef1.current) return;
    gsap.to(imgRef1.current, {
      x: mosquito.x,
      y: mosquito.y,
      rotation: mosquito.r,
      duration: 1.5,
      delay: 0.1,
      ease: "bounce.out",
    });
  }, [mosquito]);

  // Animate bat on state change
  useGSAP(() => {
    if (!imgRef2.current) return;
    gsap.to(imgRef2.current, {
      x: bat.x,
      y: bat.y,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [bat]);

  // Mosquito random movement + rotation
  const animateMosquito = () => {
    setMosquito({
      x: gsap.utils.random(-600, 600, 20),
      y: gsap.utils.random(-250, 250, 20),
      r: gsap.utils.random(-360, 360, 30),
    });
  };

  // Bat follows mouse
  const animateBat = (e) => {
    setBat({ x: e.clientX, y: e.clientY });
  };

  return (
    <main
      style={{ height: "100vh", width: "100vw", position: "relative" }}
      onMouseMove={animateBat} // bat follows mouse
    >
      <img
        ref={imgRef1}
        src={img1}
        alt="mosquito"
        onMouseEnter={animateMosquito} // mosquito moves & rotates}
      />
      <img
        ref={imgRef2}
        src={img2}
        alt="bat"
        style={{ position: "absolute", left: 0, top: 0, pointerEvents: "none" }}
      />
    </main>
  );
};

export default App;