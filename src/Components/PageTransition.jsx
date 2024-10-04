import { useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function PageTransition() {
  const ref = useRef(null);
  const { key } = useLocation();
  const [currentPath, setCurrentPath] = useState(key);
  const mousePosition = useRef({ x: 0, y: 0 });

  useGSAP(
    () => {
      const mouseHandler = (e) => {
        mousePosition.current = {
          x: e.clientX,
          y: e.clientY,
        };
      };
      window.addEventListener("mousemove", mouseHandler);

      if (currentPath !== key) {
        gsap.fromTo(
          ".circle",
          {
            "--size": "0%",
            autoAlpha: 1,
          },
          {
            "--size": "2000%",
            autoAlpha: 0,
            duration: 1.5,
            ease: "power2.inOut",
            stagger: 0.07,
          }
        );
        setCurrentPath(key);
      }
      return () => window.removeEventListener("mousemove", mouseHandler);
    },
    { dependencies: [key], scope: ref }
  );

  return (
    <div
      className="z-40 fixed w-full h-screen pointer-events-none overflow-hidden"
      ref={ref}
    >
      <div
        className="absolute left-0 top-0 size-full bg-[--body-bg] circle"
        style={{
          "--size": 0,
          clipPath: `circle(var(--size) at ${mousePosition.current.x}px ${mousePosition.current.y}px)`,
        }}
      />
    </div>
  );
}
