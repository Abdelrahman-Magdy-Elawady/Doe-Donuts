import { IoIosArrowDown } from "react-icons/io";
import { cn } from "../Utils/cn";
import { useState } from "react";
import { useClickOutside } from "../hooks";

export default function DropDown({ title, children, styles, ...rest }) {
  const [showDetails, setShowDetails] = useState(false);
  const ref = useClickOutside(() => setShowDetails(false));

  return (
    <div
      {...rest}
      className={cn("relative", rest?.className)}
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
            "flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 ",
            styles?.list
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
