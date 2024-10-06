import { useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { useMediaQuery } from "../hooks";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function PageTransition() {
  const { isMd } = useMediaQuery();
  const ref = useRef(null);
  const { key } = useLocation();
  const [isPlay, setIsplay] = useState(false);
  const count = 10;

  useGSAP(
    () => {
      const duration = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--pattern-animation-duration"
        )
      );

      if (!isPlay) {
        gsap.from(".slides", {
          stagger: {
            amount: duration,
            from: "end",
          },
          height: "100%",
          ease: "circ.inOut",
          onStart: () => setIsplay(true),
          onComplete: () => setIsplay(false),
        });
      }
    },
    { dependencies: [key], scope: ref }
  );
  return (
    <div
      className=" z-[100] fixed w-full h-screen flex pointer-events-none mt-[calc(var(--md-nav-hight)+1px)]"
      ref={ref}
    >
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className="absolute bottom-0 w-1/2 md:w-1/4 bg-[--body-bg] slides h-0 border-x-2 border-[--body-text]"
          style={{
            left: `${index * 25}%`,
          }}
        />
      ))}
    </div>
  );
}
