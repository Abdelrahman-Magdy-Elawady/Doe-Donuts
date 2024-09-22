import { cn } from "../Utils/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";

export default function Stepper({
  children: items = ["", "", ""],
  iterator = 1,
  className,
  config = {
    stepperStyle: "bg-white text-black",
    stepperStyleAnimation: "bg-black text-white",
  },
}) {
  const ref = useRef(null);
  //------------------------------------------------------
  let iteratorAsci =
    typeof iterator === "number" ? iterator : iterator?.charCodeAt(0);

  const iterationHandler =
    typeof iterator === "number"
      ? () => iteratorAsci++
      : () => {
          const res = String.fromCharCode(iteratorAsci);
          iteratorAsci++;
          return res;
        };
  //-----------------------Animation--------------------------------

  useGSAP(
    () => {
      const steps = gsap.utils.toArray(".step");
      steps.forEach((step) => {
        gsap.to(step, {
          scrollTrigger: {
            trigger: step,
            start: "clamp(top center)",
            end: "clamp(center center)",
            scrub: 2,
            onEnter: () => {
              step.classList.add(
                ...(config?.stepperStyleAnimation.split(" ") || [])
              );
            },
            onEnterBack: () => {
              step.classList.remove(
                ...(config?.stepperStyleAnimation.split(" ") || [])
              );
            },
          },
        });
      });
    },
    {
      scope: ref,
    }
  );
  //----------------------------------------------------
  return (
    <div
      className={cn("w-full flex lg:flex-col gap-4 justify-center", className)}
      ref={ref}
    >
      <div
        className={cn(
          "isolate flex flex-col lg:flex-row justify-center items-center "
        )}
      >
        {items.map((step, index) => (
          <div
            key={index}
            className="p-4 flex-1  flex flex-row lg:flex-col items-center justify-between relative"
          >
            <div
              className={cn(
                "w-20 aspect-square rounded-full flex justify-center items-center shadow-md step ",
                {
                  "after:absolute after:top-1/2 after:w-1 after:bg-inherit after:h-full lg:after:left-1/2 lg:after:w-full  lg:after:h-1 after:-z-10 after:opacity-inherit":
                    index !== items.length - 1,
                },
                config?.stepperStyle
              )}
            >
              <span>{iterationHandler()}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        {items.map((content, index) => (
          <div key={index} className="flex-1 p-2">
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}
