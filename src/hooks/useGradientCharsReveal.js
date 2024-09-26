import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";

export default function useGradientCharsReveal(target, ref) {
  useGSAP(
    () => {
      const { chars } = new SplitType(target);
      gsap.from(chars, {
        stagger: {
          from: "edges",
          each: 0.25,
        },
        ease: "power1.inOut",
        autoAlpha: 0.3,
        scrollTrigger: {
          toggleActions: "play play reset reset",
          trigger: target,
          start: "top 55%",
          end: "bottom bottom",
          scrub: 2,
        },
      });
    },
    { scope: ref }
  );
}
