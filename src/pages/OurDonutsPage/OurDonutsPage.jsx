import { section1, section2, section3, section4 } from "./constants";
import {
  ourDonuts_hero,
  ourDonuts_ingredient1,
  ourDonuts_ingredient2,
  ourDonuts_ingredient3,
  ourDonuts_where2Next,
  ourDonuts_hand,
} from "../../assets/constants";
import { useRef } from "react";
import {
  useCssVarSetter,
  useChangeColor,
  useTextReveal,
  useTextRevealScrollTrigger,
} from "../../hooks";

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
      "--body-bg": "var(--soft-Sage)",
      "--body-text": "white",
    },
  },
  {
    target: ".sec-4",
    style: {
      "--body-bg": "var(--soft-Sage)",
      "--body-text": "white",
    },
  },
  {
    target: ".sec-5",
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
  useTextRevealScrollTrigger(".sec2-txt", ref, "chars", {
    stagger: {
      from: "edges",
      each: 0.25,
    },
    ease: "power1.inOut",
    autoAlpha: 0.3,
    scrollTrigger: {
      start: "clamp(top center)",
      end: "clamp(bottom bottom)",
      scrub: 2,
    },
  });

  return (
    <main
      className="relative bg-[--body-bg] text-[--body-text] transition-colors duration-500"
      ref={ref}
    >
      <section className="sec-1 h-screen pt-[calc(var(--md-nav-hight)+.25rem)]  grid grid-rows-2 text-center">
        <h1
          className="uppercase font-extrabold  p-4 text-7xl sm:text-8xl
         md:text-9xl lg:text-[10rem] self-end md:self-start"
        >
          <div className="hero overflow-hidden">our </div>
          <div className="hero overflow-hidden">donuts</div>
        </h1>

        <div className="relative">
          <div className="absolute inset-0 lg:ml-40">
            <img
              src={ourDonuts_hero}
              role="presentation"
              fetchPriority="high"
              decoding="async"
              loading="lazy"
              className="size-full object-contain object-left-bottom"
            />
          </div>
        </div>
      </section>
      <section className="sec-2 flex flex-col items-center justify-center gap-24  h-screen max-w-[800px] text-4xl text-center px-8 mx-auto">
        <div className="w-40">
          <img
            src={ourDonuts_hand}
            role="presentation"
            decoding="async"
            loading="lazy"
            className="size-full object-cover object-center"
          />
        </div>
        <div className="sec2-txt">{section1}</div>
      </section>
      <section className="sec-3">
        <div className="relative isolate h-screen md:h-[125vh] flex flex-col">
          <div className="flex-1">
            <h2 className="text-center uppercase font-extrabold  text-5xl sm:text-6xl md:text-7xl lg:text-9xl sticky top-[calc(var(--md-nav-hight)+1rem)]">
              {section2.title}
            </h2>
          </div>
          <div className="flex-[0_1_20vw]"></div>
          <div className="absolute inset-0 -z-10">
            <img
              src={ourDonuts_ingredient1}
              role="presentation"
              decoding="async"
              loading="lazy"
              className="size-full object-contain"
              style={{ objectPosition: "bottom center" }}
            />
          </div>
        </div>
        <div className="max-w-[800px] flex flex-col md:flex-row  justify-center  text-3xl lg:mx-auto mx-16 my-16 gap-24">
          {section2.content.map((p, index) => (
            <div key={index}>{p}</div>
          ))}
        </div>
      </section>
      <section className="sec-4">
        <div className="flex justify-center  lg:flex-row flex-col mx-8 my-16">
          <h2 className=" uppercase font-extrabold  text-5xl sm:text-6xl md:text-7xl xl:text-9xl text-center self-center">
            {section3.title}
          </h2>
          <div>
            <img
              src={ourDonuts_ingredient2}
              role="presentation"
              decoding="async"
              loading="lazy"
              className="size-full object-contain object-right-bottom"
            />
          </div>
        </div>
        <div className="flex justify-center gap-16 text-2xl flex-wrap mx-8 my-16">
          {section3.content.map((paragraph, i) => (
            <div key={i} className="space-y-8 w-[30rem]">
              {paragraph.map((sub, index) => (
                <div key={index}>{sub}</div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="sec-5 md:grid md:grid-cols-2 min-h-[calc(100vh-var(--md-nav-hight))] pt-40">
        <div className="sticky top-[var(--md-nav-hight)] h-[calc(100vh-var(--md-nav-hight))] hidden md:block">
          <div className="absolute inset-0">
            <img
              src={ourDonuts_ingredient3}
              role="presentation"
              alt=""
              decoding="async"
              loading="lazy"
              className="size-full object-contain"
            />
          </div>
        </div>

        <div className="sm:mx-8 mx-4">
          <h2
            className="uppercase font-extrabold  text-4xl  lg:text-5xl  text-center p-4 sticky top-[var(--md-nav-hight)] border-b-2 [border-radius:0_0_10px_10px]"
            style={{
              backdropFilter: "blur(20px)",
            }}
          >
            {section4.title}
          </h2>

          <div className="flex justify-center gap-16 text-2xl flex-wrap mx-8 my-16">
            {section4.content.map((paragraph, i) => (
              <div key={i} className="space-y-8 w-[30rem]">
                {paragraph.map((sub, index) => (
                  <div key={index}>{sub}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" pt-[calc(var(--md-nav-hight)+1rem)] h-screen lg:h-[150vh]  flex flex-col relative isolate ">
        <div className="flex-1">
          <h1 className="uppercase font-extrabold text-6xl leading-none   text-center   mx-auto px-16 lg:text-left flex flex-col lg:flex-row sticky top-[calc(var(--md-nav-hight)+1rem)]">
            <span> where to </span>
            <span>next?</span>
          </h1>
        </div>
        <div className="flex-1">
          <Link to="/aboutUs">
            <Button className="mt-8 mx-auto block lg:ml-16 lg:mt-16 ">
              <div className="flex justify-center items-center gap-2">
                our story
                <FaArrowRightLong />
              </div>
            </Button>
          </Link>
        </div>
        <div className="absolute inset-0 -z-10">
          <img
            src={ourDonuts_where2Next}
            alt=""
            role="presentation"
            decoding="async"
            loading="lazy"
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
