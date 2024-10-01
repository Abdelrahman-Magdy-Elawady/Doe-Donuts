import { IoIosArrowDown } from "react-icons/io";
import { cn } from "../Utils/cn";
import { useState } from "react";
import { useClickOutside } from "../hooks";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function DropDown({ title, children, styles, ...rest }) {
  const [showDetails, setShowDetails] = useState(false);
  const ref = useClickOutside(() => setShowDetails(false));
  //-----------------------Animation--------------------------
  useGSAP(
    () => {
      //----------------
      if (showDetails) {
        gsap.from(".menu", {
          height: 0,
          autoAlpha: 0,
          duration: 0.75,
          ease: "power3.inOut",
        });
      }
    },
    { dependencies: [showDetails], scope: ref }
  );
  //----------------------------------------------------------
  return (
    <div
      {...rest}
      className={cn(
        "relative support-hover:hover:cursor-pointer",
        rest?.className
      )}
      ref={ref}
    >
      <div
        className={cn(
          "flex flex-row items-center justify-center gap-2",
          styles?.title
        )}
        onClick={() => setShowDetails(!showDetails)}
      >
        <div>{title}</div>
        <IoIosArrowDown
          className={cn("text-xl transition-transform duration-300", {
            "rotate-180": showDetails,
          })}
        />
      </div>

      {showDetails && (
        <div
          className={cn(
            "flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 menu ",
            styles?.list
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
