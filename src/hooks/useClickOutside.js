import { useRef, useEffect } from "react";
export default function useClickOutside(doWhenClickOutside) {
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) {
        doWhenClickOutside();
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler);
  }, [doWhenClickOutside]);

  return ref;
}
