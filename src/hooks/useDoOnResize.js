import { useEffect } from "react";
export default function useDoOnResize(doOnResize) {
  useEffect(() => {
    const matchResize = () => {
      doOnResize();
    };
    window.addEventListener("resize", matchResize);
    return () => window.removeEventListener("resize", matchResize);
  }, [doOnResize]);
}
