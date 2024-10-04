import { useEffect, useState } from "react";

export default function useMediaQuery() {
  const [view, setView] = useState({
    isSm: window.innerWidth >= 640,
    isMd: window.innerWidth >= 768,
    isLg: window.innerWidth >= 1024,
    isXl: window.innerWidth >= 1280,
    is2Xl: window.innerWidth >= 1536,
  });
  useEffect(() => {
    const resizeHandler = () => {
      setView({
        isSm: window.innerWidth >= 640,
        isMd: window.innerWidth >= 768,
        isLg: window.innerWidth >= 1024,
        isXl: window.innerWidth >= 1280,
        is2Xl: window.innerWidth >= 1536,
      });
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return view;
}
