import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";
export default function useTextRevealScrollTrigger(targets, ref, type, config) {
  useGSAP(
    () => {
      const targetsArr = gsap.utils.toArray(targets);
      targetsArr.forEach((target) => {
        const entity = new SplitType(target)[type];
        gsap.from(entity, {
          ...config,
          scrollTrigger: {
            toggleActions: "play play reset reset",
            trigger: target,
            ...config.scrollTrigger,
          },
        });
      });
    },
    { scope: ref }
  );
}
