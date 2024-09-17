import { IoIosArrowDown } from "react-icons/io";
import { cn } from "../Utils/cn";
import { useState } from "react";
import { useClickOutside } from "../hooks";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Details = ({ title, children, styles, ...rest }) => {
  const [showDetails, setShowDetails] = useState(false);

  const ref = useClickOutside(() => setShowDetails(false));

  //-----------------------Animation--------------------------
  useGSAP(
    () => {
      //----------------
      if (showDetails) {
        gsap.from(".item-list", {
          xPercent: -100,
          stagger: 0.2,
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
      className={cn("relative", rest?.className)}
      onClick={() => setShowDetails(!showDetails)}
      ref={ref}
    >
      <div
        className={cn(styles?.title, {
          "border-b-2": showDetails,
        })}
      >
        <div>{title}</div>
        <IoIosArrowDown
          className={cn("text-xl transition-transform duration-300", {
            "rotate-180": showDetails,
          })}
        />
      </div>

      {showDetails && (
        <div className={cn("flex flex-col justify-center list", styles?.list)}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Details;
