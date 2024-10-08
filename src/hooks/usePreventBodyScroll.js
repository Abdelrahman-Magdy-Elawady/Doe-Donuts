import { useEffect } from "react";
export default function usePreventBodyScroll() {
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");
    return () => document.body.classList.remove("overflow-y-hidden");
  }, []);
}
