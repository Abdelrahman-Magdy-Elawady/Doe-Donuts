import { FaArrowUp } from "react-icons/fa";
import { cn } from "../Utils/cn";
import { useRef, useState, useEffect } from "react";
import { useScrollTo } from "../hooks";

export default function ScrollToTopButton({ className, ...rest }) {
  const buttonRef = useRef(null);
  const scrollTo = useScrollTo(buttonRef);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPer = parseInt((scrollTop / (docHeight - winHeight)) * 100);
      setScrollPercentage(scrollPer);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={cn(
        "outline-0 fixed z-20 bottom-5 right-5 text-[--body-bg] text-2xl rounded-full p-2 support-hover:hover:cursor-pointer duration-500  support-hover:hover:scale-75 [box-shadow:0_0_10px_5px_var(--body-text)] disabled:opacity-0",
        {
          "rotate-180": !isVisible,
        },
        className
      )}
      disabled={!isVisible}
      ref={buttonRef}
      onClick={() => scrollTo()}
      {...rest}
      style={{
        background: `radial-gradient(closest-side, var(--body-text) 85%, transparent 86% 100%),
    conic-gradient(var(--body-bg) ${scrollPercentage}%,var(--body-text) 0)`,
        transitionProperty: `colors transform`,
      }}
    >
      <FaArrowUp />
    </button>
  );
}
