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
          yPercent: -100,
          opacity: 0,
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
      className={cn("relative ", rest?.className)}
      onClick={() => setShowDetails(!showDetails)}
      ref={ref}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <div className={`${styles?.title}`}>{title}</div>
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
