import { timeLineContent } from "./constants";
import { useRef } from "react";
import {
  useCssVarSetter,
  useChangeColor,
  useGradientCharsReveal,
} from "../../hooks";

import { Button, CurveBottom, TimeLine } from "../../Components";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  howIW_hero,
  howIW_tLDonuts,
  howIW_WTNext,
} from "../../assets/constants";

const colorPalette = [
  {
    target: ".sec-1",
    style: {
      "--body-bg": "var(--brillian-Rose)",
      "--body-text": "white",
    },
  },
  {
    target: ".sec-2",
    style: {
      "--body-bg": "var(--blush-Blossom)",
      "--body-text": "white",
    },
  },
  {
    target: ".sec-3",
    style: {
      "--body-bg": "var(--green)",
      "--body-text": "white",
    },
  },
];
//-------------------------------------------------
export default function HowItWorksPage() {
  const ref = useRef(null);
  useCssVarSetter({
    "--body-bg": "var(--brillian-Rose)",
    "--body-text": "white",
  });
  useChangeColor(ref, colorPalette);
  useGradientCharsReveal(".sec2-txt", ref);

  return (
    <main
      className="relative bg-[--body-bg] text-[--body-text] transition-colors duration-500"
      ref={ref}
    >
      <section className="sec-1 h-screen pt-[calc(var(--md-nav-hight)+.25rem)]  grid grid-rows-2">
        <h1
          className="uppercase font-extrabold  p-2 text-7xl sm:text-8xl
         md:text-9xl lg:text-[10rem] self-end  "
        >
          <div className="text-start lg:text-center lg:mr-40">how it </div>
          <div className="text-end lg:text-center lg:ml-40"> works</div>
        </h1>

        <div className="relative">
          <div className="absolute inset-0">
            <img
              src={howIW_hero}
              className="size-full object-contain object-bottom"
            />
          </div>
        </div>
      </section>

      <section className="sec-2 w-full py-60">
        <TimeLine symbol={howIW_tLDonuts} className="max-w-[1024px]">
          {timeLineContent.map(({ title, p }, i) => (
            <div key={i} className="px-4 space-y-4">
              <h2 className="text-2xl md:text-4xl font-extrabold uppercase">
                {title}
              </h2>
              <div className="text-lg md:text-xl">{p}</div>
            </div>
          ))}
        </TimeLine>
      </section>
      <section className="sec-3 pt-[calc(var(--md-nav-hight)+1rem)] h-screen lg:h-[150vh]  flex flex-col relative isolate ">
        <div className="flex-1">
          <h1 className="uppercase font-extrabold text-6xl leading-none   text-center   mx-auto px-16 lg:text-left flex flex-col lg:flex-row sticky top-[calc(var(--md-nav-hight)+1rem)]">
            <span> where to </span>
            <span>next?</span>
          </h1>
        </div>
        <div className="flex-1">
          <Button className="mt-8 mx-auto block lg:ml-16 lg:mt-16 ">
            <div className="flex justify-center items-center gap-2">
              <span className="hidden md:inline">corporate + custom </span>
              orders <FaArrowRightLong />
            </div>
          </Button>
        </div>
        <div className="absolute inset-0 -z-10">
          <img
            src={howIW_WTNext}
            alt=""
            className="size-full object-contain "
            style={{
              objectPosition: "right bottom",
            }}
          />
        </div>
      </section>
      <CurveBottom />
    </main>
  );
}