import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";

export default function useGsapRefresh() {
  useEffect(() => {
    const resizeHandler = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.addEventListener("resize", resizeHandler);
  }, []);
}
