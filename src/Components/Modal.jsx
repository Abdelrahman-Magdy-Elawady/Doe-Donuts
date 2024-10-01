import { createPortal } from "react-dom";
import { usePreventBodyScroll, useClickOutside } from "../hooks";
import { cn } from "../Utils/cn";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RxCross2 } from "react-icons/rx";

export default function Modal({ children, className, close }) {
  usePreventBodyScroll();
  const ref = useRef(null);
  //-----------------------------------------------
  const { contextSafe } = useGSAP(
    () => {
      //----------------
      gsap.from(".modal", {
        scale: 0,
        autoAlpha: 0,
        duration: 0.75,
        ease: "power3.inOut",
      });
    },
    { scope: ref }
  );
  const closeHandler = contextSafe(() => {
    gsap.to(".modal", {
      scale: 0,
      autoAlpha: 0,
      duration: 0.75,
      ease: "power3.inOut",
      onComplete: () => close(),
    });
  });
  const modal = useClickOutside(closeHandler); //return ref
  //------------------------------------------------
  return createPortal(
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50  z-50 flex justify-center items-center text-sm sm:text-base "
      ref={ref}
    >
      <div
        className={cn(
          "bg-[--body-bg] text-[--body-text]  rounded-md    md:text-xl font-extrabold text-center md:text-start mx-8  lg:w-[1280px] lg:h-5/6 modal relative",
          className
        )}
        ref={modal}
      >
        <RxCross2
          className="p-1 text-3xl md:text-4xl support-hover:hover:scale-125  transition-transform cursor-pointer absolute right-0 top-0 -translate-x-1/4 translate-y-1/4"
          onClick={closeHandler}
        />
        {children}
      </div>
    </div>,
    document.querySelector("#Modal")
  );
}
