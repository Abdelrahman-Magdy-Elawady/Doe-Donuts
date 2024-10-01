import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
export default function useScrollTo(ref) {
  const { contextSafe } = useGSAP(() => {}, { scope: ref });
  const scrollTo = contextSafe(
    (
      target = window,
      config = { duration: 2, scrollTo: 0, ease: "power2" }
    ) => {
      gsap.to(target, config);
    }
  );
  return scrollTo;
}
