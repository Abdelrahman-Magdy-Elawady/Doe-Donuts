import { locations } from "./constants";
import { ourLocations_hero, ourLocations_WTN } from "../../assets/constants";
import { useRef } from "react";
import { useCssVarSetter, useChangeColor, useTextReveal } from "../../hooks";

import { Button, CurveBottom } from "../../Components/Index";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const colorPalette = [
  {
    target: ".sec-1",
    style: {
      "--body-bg": "var(--blue)",
      "--body-text": "white",
    },
  },
  {
    target: ".sec-2",
    style: {
      "--body-bg": "var(--blue)",
      "--body-text": "white",
    },
  },
  {
    target: ".sec-3",
    style: {
      "--body-bg": "var(--brillian-Rose)",
      "--body-text": "white",
    },
  },
];
//-------------------------------------------------
export default function OurLocationsPage() {
  const ref = useRef(null);
  useCssVarSetter({
    "--body-bg": "var(--blue)",
    "--body-text": "white",
  });
  useChangeColor(ref, colorPalette);
  useTextReveal(".hero", ref, "chars", {
    yPercent: 100,
    stagger: 0.07,
    ease: "power1.inOut",
    delay: getComputedStyle(document.documentElement).getPropertyValue(
      "--animation-delay"
    ),
  });

  return (
    <main
      className="relative bg-[--body-bg] text-[--body-text] transition-colors duration-500"
      ref={ref}
    >
      <section className="sec-1 h-screen pt-[calc(var(--md-nav-hight)+.25rem)]  grid grid-rows-2 text-center">
        <h1
          className="uppercase font-extrabold  p-2 md:p-4 text-6xl sm:text-8xl
         md:text-9xl lg:text-[10rem] self-end md:self-start"
        >
          <div className="hero overflow-hidden">our </div>
          <div className="hero overflow-hidden">locations</div>
        </h1>

        <div className="relative">
          <div className="absolute inset-0 lg:ml-40">
            <img
              src={ourLocations_hero}
              className="size-full object-contain object-left-bottom"
            />
          </div>
        </div>
      </section>

      <section className="space-y-16 my-40 sec-2">
        {locations.map((loc, index) => (
          <div
            key={index}
            className=" lg:grid lg:grid-cols-2 lg:grid-rows-none  text-3xl gap-16 text-center xl:text-start mx-8 lg:mx-auto lg:w-[55rem] xl:w-[75rem] space-y-16 lg:space-y-0"
          >
            <div className="h-[30rem] rounded-2xl overflow-hidden lg:justify-self-end w-full">
              {loc.map}
            </div>
            <div className="flex flex-col gap-8 w-full ">
              <div className="font-extrabold text-5xl uppercase">
                {loc?.location}
              </div>
              <div className="space-y-2">
                {loc?.branchs?.map((branch, i) => (
                  <div key={i}>{branch}</div>
                ))}
              </div>
              <div className="space-y-2">
                {loc?.openHours?.map((oH, i) => (
                  <div key={i}>{oH}</div>
                ))}
              </div>
              <div className="space-y-2">
                {loc?.links.map((link, index) => (
                  <div key={index} className="underline ">
                    {link}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="sec-3 pt-[calc(var(--md-nav-hight)+1rem)] h-screen lg:h-[150vh]  flex flex-col relative isolate ">
        <div className="flex-1">
          <h1 className="uppercase font-extrabold text-6xl leading-none   text-center   mx-auto px-16 lg:text-left flex flex-col lg:flex-row sticky top-[calc(var(--md-nav-hight)+1rem)]">
            <span> where to </span>
            <span>next?</span>
          </h1>
        </div>
        <div className="flex-1">
          <Link to="/contact">
            <Button className="mt-8 mx-auto block lg:ml-16 lg:mt-16 ">
              <div className="flex justify-center items-center gap-2">
                contact us
                <FaArrowRightLong />
              </div>
            </Button>
          </Link>
        </div>
        <div className="absolute inset-0 -z-10">
          <img
            src={ourLocations_WTN}
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
