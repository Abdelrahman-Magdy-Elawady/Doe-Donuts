import { useEffect, useState } from "react";

export default function useOnResize() {
  const [viewPort, setViewPort] = useState({
    isSm: null,
    isMd: null,
    isLg: null,
    isXl: null,
    is2xl: null,
  });
  useEffect(() => {
    const matchResize = () => {
      setViewPort({
        isSm: window.innerWidth >= 640,
        isMd: window.innerWidth >= 768,
        isLg: window.innerWidth >= 1024,
        isXl: window.innerWidth >= 1280,
        is2xl: window.innerWidth >= 1536,
      });
    };
    window.addEventListener("resize", matchResize);
    return () => window.removeEventListener("resize", matchResize);
  }, []);

  return viewPort;
}
