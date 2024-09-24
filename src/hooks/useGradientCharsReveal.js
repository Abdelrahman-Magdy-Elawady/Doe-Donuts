import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";

export default function useGradientCharsReveal(target, ref) {
  useGSAP(
    () => {
      const { lines } = new SplitType(target);
      lines.forEach((line) => {
        gsap.from(line, {
          stagger: 0.02,
          autoAlpha: 0.3,
          scrollTrigger: {
            toggleActions: "play play reset reset",
            trigger: line,
            start: "top 55%",
            end: "bottom bottom",
            scrub: true,
          },
        });
      });
    },
    { scope: ref }
  );
}
