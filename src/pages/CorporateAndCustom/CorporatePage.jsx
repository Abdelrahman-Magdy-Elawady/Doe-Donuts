import { content } from "./constants";
import {
  corporateHeroImg,
  corporate_product1,
  corporate_product2,
  corporate_product3,
  corporate_product4,
  corporate_product5,
  corporate_product6,
} from "../../assets/constants";
import { useChangeColor, useCssVarSetter, useMediaQuery } from "../../hooks";
import { useRef } from "react";
import { Carousel, Button, Stepper } from "../../Components";
import { Navigation } from "swiper/modules";
import { FaArrowDown } from "react-icons/fa";

//------------------------------------------------
const colorPalette = [
  {
    target: ".sec-1",
    style: {
      "--body-bg": "var(--yellow)",
      "--body-text": "white",
    },
  },
  // {
  //   target: ".sec-2",
  //   style: {
  //     "--body-bg": "var(--md-white)",
  //     "--body-text": "var(--lg-pink)",
  //   },
  // },
  // {
  //   target: ".sec-3",
  //   style: {
  //     "--body-bg": "var(--yellow)",
  //     "--body-text": "white",
  //   },
  // },
  // {
  //   target: ".sec-4",
  //   style: {
  //     "--body-bg": "var(--green)",
  //     "--body-text": "white",
  //   },
  // },
];
//-------------------------------------------------
const CorporatePage = () => {
  const ref = useRef(null);
  useCssVarSetter({
    "--body-bg": "var(--yellow)",
    "--body-text": "white",
  });
  useChangeColor(ref, colorPalette);
  const { isSm, isMd, isLg, isXl, is2Xl } = useMediaQuery();

  return (
    <main
      className=" bg-[--body-bg] text-[--body-text] transition-colors duration-500"
      ref={ref}
    >
      <section
        className="sec-1 pt-[calc(var(--md-nav-hight)+.25rem)] min-h-screen relative flex justify-center items-center sm:items-start
      sm:justify-end isolate"
      >
        <div className="text-center md:text-right uppercase font-extrabold text-5xl px-4 tracking-tighter py-8 sm:text-7xl lg:text-8xl xl:text-9xl">
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
      <section className="sec-2 pt-[calc(var(--md-nav-hight)+.25rem)]">
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
      <section className="pt-[calc(var(--md-nav-hight)+.25rem)] flex flex-col justify-center items-center gap-16">
        <h1 className="text-6xl font-extrabold uppercase text-center ">
          how it works
        </h1>
        <Button className="px-24">
          <a className="flex justify-center items-center gap-4" href="#">
            about us
            <FaArrowDown />
          </a>
        </Button>
        <Stepper />
      </section>
    </main>
  );
};

export default CorporatePage;
