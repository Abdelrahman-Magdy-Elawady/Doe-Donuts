import { content } from "./constants";
import {
  corporateHeroImg,
  corporate_product1,
  corporate_product2,
  corporate_product3,
  corporate_product4,
  corporate_product5,
  corporate_product6,
  whereToNext,
} from "../../assets/constants";
import { useChangeColor, useCssVarSetter } from "../../hooks";
import { useRef } from "react";
import { Carousel, Button, Stepper, CurveBottom } from "../../Components";
import { Navigation } from "swiper/modules";
import { FaArrowDown } from "react-icons/fa";
import CorporateForm from "./CorporateForm";
import { FaArrowRightLong } from "react-icons/fa6";

//------------------------------------------------
const colorPalette = [
  {
    target: ".sec-1",
    style: {
      "--body-bg": "var(--yellow)",
      "--body-text": "white",
    },
  },
  {
    target: ".sec-3",
    style: {
      "--body-bg": "var(--yellow)",
      "--body-text": "white",
    },
  },
  {
    target: ".sec-4",
    style: {
      "--body-bg": "var(--green)",
      "--body-text": "white",
    },
  },
];
//-------------------------------------------------
const CorporatePage = () => {
  const ref = useRef(null);
  useCssVarSetter({
    "--body-bg": "var(--yellow)",
    "--body-text": "white",
  });
  useChangeColor(ref, colorPalette);

  return (
    <main
      className="relative bg-[--body-bg] text-[--body-text] transition-colors duration-500"
      ref={ref}
    >
      <section
        className="sec-1 pt-[calc(var(--md-nav-hight)+.25rem)] min-h-screen relative flex justify-center items-center sm:items-start
      sm:justify-end isolate"
      >
        <div className="text-center md:text-right uppercase font-extrabold  px-4 tracking-tighter py-8 text-5xl sm:text-7xl lg:text-8xl xl:text-9xl mb-[10vw]">
          {content.hero.title.map((paragraph, index) => (
            <div key={index}>{paragraph}</div>
          ))}
        </div>
        <div className="absolute inset-0 top-[calc(var(--md-nav-hight)+.25rem)]">
          <img
            src={corporateHeroImg}
            className="size-full object-contain"
            style={{
              objectPosition: "left bottom",
            }}
          />
        </div>
      </section>
      <section className=" pt-[calc(var(--md-nav-hight)+.25rem)]">
        <h1 className="uppercase font-extrabold text-6xl  text-center  px-6 max-w-[1024px] mx-auto">
          {content.section2.title}
        </h1>
        <div className="px-8 py-16 gap-8 flex flex-col items-center justify-center text-center text-2xl max-w-[1024px] mx-auto">
          {content.section2.paragraphs.map((p, index) => (
            <div key={index}>{p}</div>
          ))}
        </div>
        <Carousel
          config={{
            modules: [Navigation],
            speed: 500,
            slidesPerView: "auto",
            loop: true,
            centeredSlides: true,
          }}
          className="mx-4"
          buttons={true}
          styles={{
            slide:
              " [--gap:20px] mx-[--gap] w-full md:w-[calc(50%-var(--gap))] xl:w-[calc(30%-var(--gap))] py-1",
          }}
        >
          {[
            corporate_product1,
            corporate_product2,
            corporate_product3,
            corporate_product4,
            corporate_product5,
            corporate_product6,
          ].map((slide, index) => (
            <div key={index} className="h-[30rem] rounded-3xl overflow-hidden">
              <img
                src={slide}
                className="size-full object-cover object-bottom"
              />
            </div>
          ))}
        </Carousel>
      </section>
      <section className="sec-3 pt-[calc(var(--md-nav-hight)+.25rem)] flex flex-col justify-center items-center gap-16 pb-24">
        <h1 className="text-6xl font-extrabold uppercase text-center ">
          how it works
        </h1>
        <Button className="px-24">
          <a className="flex justify-center items-center gap-4" href="#">
            about us
            <FaArrowDown />
          </a>
        </Button>

        <Stepper
          className="px-4"
          config={{
            stepperStyle: "text-[--yellow]  bg-white font-extrabold text-3xl",
            stepperStyleAnimation: "rounded-xl text-4xl",
          }}
        >
          {content.section3.map((step, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center gap-4 py-6"
            >
              <div className="text-2xl font-semibold uppercase">
                {step.title}
              </div>
              <div className="text-md lg:text-lg">{step.paragraph}</div>
            </div>
          ))}
        </Stepper>
      </section>
      <section className="sec-4 pt-[calc(var(--md-nav-hight)+1rem)] ">
        <h1 className="uppercase font-extrabold text-[3.5rem] leading-none   text-center  max-w-[1024px] mx-auto px-2">
          corporate and custom order form
        </h1>
        <CorporateForm />
      </section>
      <section className="pt-[calc(var(--md-nav-hight)+1rem)] h-screen lg:h-[150vh]  flex flex-col">
        <div className="flex-1">
          <h1 className="uppercase font-extrabold text-6xl leading-none   text-center   mx-auto px-16 lg:text-left flex flex-col lg:flex-row sticky top-[calc(var(--md-nav-hight)+1rem)]">
            <span> where to </span>
            <span>next?</span>
          </h1>
        </div>
        <div className="relative flex-1 ">
          <div className="absolute inset-0">
            <img
              src={whereToNext}
              alt=""
              className="size-full object-contain "
              style={{
                objectPosition: "right bottom",
              }}
            />
          </div>
          <Button className="mt-8 mx-auto block lg:ml-16 lg:mt-16">
            <div className="flex justify-center items-center gap-2">
              our donuts <FaArrowRightLong />
            </div>
          </Button>
        </div>
      </section>
      <CurveBottom />
    </main>
  );
};

export default CorporatePage;
