import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const UseChangeColor = (sectionPalette) => {
  const ref = useRef(null);
  useGSAP(
    () => {
      sectionPalette?.forEach((section) => {
        ScrollTrigger.create({
          trigger: section.target,
          start: "clamp(top bottom",
          end: "clamp(bottom top)",

          onEnter: () => {
            document.documentElement.style.setProperty("--body-bg", section.bg);
            document.documentElement.style.setProperty(
              "--body-text",
              section.text
            );
          },
          onEnterBack: () => {
            document.documentElement.style.setProperty("--body-bg", section.bg);
            document.documentElement.style.setProperty(
              "--body-text",
              section.text
            );
          },
        });
      });
    },
    { scope: ref }
  );
  return ref;
};

export default UseChangeColor;
