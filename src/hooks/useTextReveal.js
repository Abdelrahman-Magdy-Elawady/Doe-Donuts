import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
//------------------------------------------------------------
export default function useTextReveal(targets, ref, type, config) {
  useGSAP(
    () => {
      const targetsArr = gsap.utils.toArray(targets);
      targetsArr.forEach((target) => {
        const entity = new SplitType(target)[type];
        gsap.from(entity, {
          ...config,
        });
      });
    },
    { scope: ref }
  );
}
