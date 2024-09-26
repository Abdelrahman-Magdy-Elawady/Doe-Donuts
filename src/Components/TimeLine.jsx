import { cn } from "../Utils/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function TimeLine({ className, symbol, children }) {
  const ref = useRef(null);
  const steps = children.map((step, i) => (
    <div
      key={i}
      className={cn("ml-[30%] ", {
        "md:mr-[60%] md:ml-0": i % 2 === 0,
        "md:ml-[60%]": i % 2 !== 0,
      })}
    >
      {step}
    </div>
  ));
  //----------------------------------------------------
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top center",
        end: "bottom top",
        onUpdate: (self) => {
          document.querySelector("#symbol").style.top = `${
            self.progress.toFixed(2) * 120
          }%`;
          document.querySelector("#loaded").style.height = `${
            self.progress.toFixed(2) * 120
          }%`;
        },
      });
    },
    { scope: ref }
  );
  //----------------------------------------------------
  return (
    <div
      ref={ref}
      className={cn(
        className,
        "relative isolate py-20 flex flex-col gap-16 lg:mx-auto md:mx-8 mx-4 overflow-hidden"
      )}
    >
      {steps}
      <div className="absolute inset-y-0  w-3 left-[15%]  md:left-1/2 -translate-x-1/2 bg-current opacity-25 [border-radius:10px_10px_10px_10px]"></div>
      <div
        id="loaded"
        style={{
          height: "0%",
        }}
        className="absolute top-0 w-3 left-[15%] md:left-1/2 -translate-x-1/2 bg-current [border-radius:10px_10px_0_0]"
      />
      <div
        id="symbol"
        className="absolute   left-[15%] md:left-1/2 -translate-x-1/2 md:w-20 w-14"
        style={{
          top: 0,
        }}
      >
        <img src={symbol} className="size-full object-cover " />
      </div>
    </div>
  );
}
