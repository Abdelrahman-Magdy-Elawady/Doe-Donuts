import { content } from "./constants";
import { useRef } from "react";
import {
  useCssVarSetter,
  useChangeColor,
  useTextReveal,
  useTextRevealScrollTrigger,
} from "../../hooks";
import Marquee from "react-fast-marquee";
import { Button, CurveBottom, PalmTree } from "../../Components/Index";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  aboutUs_hero,
  aboutUs_donuts,
  aboutUs_girls,
  aboutUs_WhereToNext,
  viva,
  mindfood,
  saben,
  stuff,
  otv,
  businessDesk,
} from "../../assets/constants";
import { Link } from "react-router-dom";

const colorPalette = [
  {
    target: ".sec-1",
    style: {
      "--body-bg": "var(--green)",
      "--body-text": "white",
    },
  },
  {
    target: ".sec-2",
    style: {
      "--body-bg": "var(--green)",
      "--body-text": "white",
    },
  },
  {
    target: ".sec-3",
    style: {
      "--body-bg": "var(--blush-Blossom)",
      "--body-text": "white",
    },
  },
  {
    target: ".sec-4",
    style: {
      "--body-bg": "var(--blush-Blossom)",
      "--body-text": "white",
    },
  },
  {
    target: ".sec-5",
    style: {
      "--body-bg": "var(--blue)",
      "--body-text": "white",
    },
  },
];
//-------------------------------------------------
export default function AboutUsPage() {
  const ref = useRef(null);
  useCssVarSetter({
    "--body-bg": "var(--green)",
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

  //-------------------------------------------------
  return (
    <main
      className="relative overflow-x-clip bg-[--body-bg] text-[--body-text] transition-colors duration-500"
      ref={ref}
    >
      <section className="sec-1 pt-[calc(var(--md-nav-hight)+.25rem)] h-screen grid grid-rows-2 lg:[grid-template-rows:30%_70%]">
        <h1 className="text-center uppercase font-extrabold  sm:p-8 text-8xl sm:text-[10rem]  xl:text-[16rem] w-full self-end  lg:self-start flex sm:items-end items-center flex-col ">
          <span className=" hero overflow-hidden">about</span>
          <span className=" hero overflow-hidden"> us</span>
        </h1>
        <div className="relative  ml-[15%] md:ml-[7%] ">
          <div className="absolute inset-0">
            <img
              src={aboutUs_hero}
              role="presentation"
              fetchPriority="high"
              decoding="async"
              loading="lazy"
              className="size-full object-contain"
              style={{
                objectPosition: "bottom left",
              }}
            />
          </div>
        </div>
      </section>
      <section className="sec-2 max-w-[800px] mx-auto flex flex-col items-center justify-center gap-16 text-center py-32 px-8">
        <PalmTree />
        <div className="text-4xl sec2-txt">{content.section1}</div>
      </section>
      <section className="sec-3 relative isolate h-screen md:h-[150vh] flex flex-col ">
        <div className="flex-1">
          <h2 className="text-center uppercase font-extrabold  sm:px-16 text-8xl sm:text-[10rem] sticky top-[calc(var(--md-nav-hight)+1rem)]">
            {content.section2.title}
          </h2>
        </div>
        <div className="flex-1"></div>
        <div className="absolute inset-0 -z-10">
          <img
            src={aboutUs_donuts}
            role="presentation"
            decoding="async"
            loading="lazy"
            className="size-full object-contain"
            style={{ objectPosition: "bottom center" }}
          />
        </div>
      </section>
      <section className="sec-4">
        <div className="flex justify-center gap-16 flex-wrap py-24">
          {content.section2.p.map((paragraphs, i) => (
            <div key={i} className="w-[30rem] px-8 text-2xl space-y-8">
              {paragraphs.map((p, index) => (
                <div key={index}>{p}</div>
              ))}
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-[1024px] px-8">
          <img
            src={aboutUs_girls}
            className="size-full object-cover object-center"
            role="presentation"
            decoding="async"
            loading="lazy"
          />
        </div>
        <div className="text-2xl flex justify-center  py-24 flex-wrap space-y-8 gap-8 items-baseline">
          {content.section3.map((p, index) => (
            <div key={index} className="w-[30rem] px-8 ">
              {p}
            </div>
          ))}
        </div>
        <div
          className="text-5xl font-extrabold text-center -rotate-12 my-16"
          style={{
            fontFamily: `"stylishFont",sans-serif`,
          }}
        >
          Shenine and
          <br />
          Grace xx
        </div>
        <Marquee className="py-8 ">
          <div className="gap-8 px-4 flex justify-center items-center">
            {[viva, mindfood, saben, stuff, otv, businessDesk].map(
              (img, index) => (
                <div key={index} className=" h-20 flex-shrink-0">
                  <img
                    src={img}
                    role="presentation"
                    decoding="async"
                    loading="lazy"
                    className="size-full object-contain object-center"
                  />
                </div>
              )
            )}
          </div>
        </Marquee>
      </section>
      <section className="sec-5 pt-[calc(var(--md-nav-hight)+10rem)] h-[125vh]   flex flex-col relative isolate">
        <div className="flex-1">
          <h1 className="uppercase font-extrabold text-6xl leading-none   text-center   mx-auto px-16 lg:text-end flex flex-col  sticky top-[calc(var(--md-nav-hight)+1rem)]">
            where to
            <br />
            next?
          </h1>
        </div>

        <div className="relative flex-1 ">
          <Link to="/howItWorks">
            <Button className="mt-8 mx-auto block lg:mr-16 lg:mt-16">
              <div className="flex justify-center items-center gap-2">
                how it works <FaArrowRightLong />
              </div>
            </Button>
          </Link>
        </div>

        <div className="absolute inset-0 -z-10">
          <img
            src={aboutUs_WhereToNext}
            alt=""
            className="size-full object-contain "
            style={{
              objectPosition: "left bottom",
            }}
          />
        </div>
      </section>
      <CurveBottom />
    </main>
  );
}
