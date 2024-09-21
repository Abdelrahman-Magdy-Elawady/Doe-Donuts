import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const UseChangeColor = (ref, palette) => {
  useGSAP(
    () => {
      palette?.forEach((section) => {
        ScrollTrigger.create({
          trigger: section?.target,
          start: "clamp(top bottom",
          end: "clamp(bottom top)",

          onEnter: () => {
            Object.entries(section?.style).forEach(([key, value]) => {
              document.documentElement.style.setProperty(key, value);
            });
          },
          onEnterBack: () => {
            Object.entries(section?.style).forEach(([key, value]) => {
              document.documentElement.style.setProperty(key, value);
            });
          },
        });
      });
    },
    { scope: ref }
  );
};

export default UseChangeColor;
