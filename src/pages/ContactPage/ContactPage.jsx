import { contactInfo } from "./constants";
import {
  contactHero,
  contactHeroSm,
  choco,
  creamyDonut,
} from "../../assets/constants";
import { useRef } from "react";
import {
  useCssVarSetter,
  useChangeColor,
  useTextReveal,
  useScrollTo,
} from "../../hooks";
import { Input, TextArea, Button, CurveBottom } from "../../Components/Index";
import { FaArrowRightLong } from "react-icons/fa6";
import { useForm } from "react-hook-form";

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
      "--body-bg": "var(--megneta-pink)",
      "--body-text": "white",
    },
  },
];
//-------------------------------------------------
export default function ContactPage() {
  const ref = useRef(null);
  const scrollTo = useScrollTo(ref);
  useCssVarSetter({
    "--body-bg": "var(--brillian-Rose)",
    "--body-text": "white",
  });
  useChangeColor(ref, colorPalette);
  const formProperties = useForm();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = formProperties;
  //--------------------------------------------------------
  const submitHandler = async (data) => {
    //send data to backend ,but i don't have backend now
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };
  useTextReveal(".hero", ref, "chars", {
    yPercent: 200,
    stagger: 0.07,
    ease: "power1.inOut",
    delay: getComputedStyle(document.documentElement).getPropertyValue(
      "--animation-delay"
    ),
  });

  return (
    <main
      className="relative overflow-x-clip bg-[--body-bg] text-[--body-text] transition-colors duration-500"
      ref={ref}
    >
      <section className="sec-1 pt-[calc(var(--md-nav-hight)+.25rem)] h-screen grid grid-rows-2 lg:[grid-template-rows:30%_70%]">
        <h1 className="text-center uppercase font-extrabold  mx-auto py-8 text-6xl sm:text-8xl  xl:text-9xl self-center lg:self-start hero overflow-hidden">
          contact
        </h1>

        <picture className="ml-[15%] md:ml-[7%] ">
          <source
            media="(max-width:768px)"
            srcSet={contactHeroSm}
            type="image/png"
          />
          <source
            media="(min-width:769px)"
            srcSet={contactHero}
            type="image/webp"
          />
          <img
            src={contactHeroSm}
            alt="donuts"
            role="presentation"
            fetchPriority="high"
            decoding="async"
            loading="lazy"
            className="size-full  object-contain object-bottom"
          />
        </picture>
      </section>
      <section className="sec-2 pt-[calc(var(--md-nav-hight)+8rem)] min-h-screen relative isolate pb-32">
        <h2 className="uppercase font-extrabold text-[3.5rem] leading-none   text-center  max-w-[1024px] mx-auto px-8 mb-8">
          we&apos;d love to hear from you!
        </h2>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="max-w-[48rem] mx-auto px-4 flex flex-col items-center gap-16  py-16"
        >
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-16  w-full">
            <Input
              formProperties={formProperties}
              type="text"
              name="firstName"
              placeholder="first Name"
              required
              validate={{ pattern: /^[a-zA-Z]+$/, msg: "invalid name" }}
            />
            <Input
              formProperties={formProperties}
              type="text"
              name="lastName"
              placeholder="last Name"
              required
              validate={{ pattern: /^[a-zA-Z]+$/, msg: "invalid name" }}
            />
            <Input
              formProperties={formProperties}
              type="mail"
              name="email"
              placeholder="email"
              required
              validate={{
                pattern: /\w+@[a-z]+\.[a-zA-Z]{2,}/,
                msg: "invalid mail",
              }}
            />
            <Input
              formProperties={formProperties}
              type="text"
              name="phone"
              placeholder="phone number"
              required
              validate={{
                pattern: /^(010|011|012)\d{8}$/,
                msg: "must start with 010 ,011 or 012 followed by 8 numbers ",
              }}
            />
          </div>
          <TextArea
            formProperties={formProperties}
            name="message"
            label=""
            placeholder="MESSAGE"
            required="your message is required"
            styles={{ input: "min-h-24 placeholder:font-bold" }}
          />
          <Button>
            {isSubmitting ? (
              "submitting...."
            ) : (
              <div className="flex justify-center items-center gap-2">
                submit <FaArrowRightLong />
              </div>
            )}
          </Button>
        </form>
        <div className="hidden absolute inset-0  lg:grid grid-rows-2 grid-cols-2  -z-10">
          <div />
          <div>
            <img
              src={creamyDonut}
              alt="donuts"
              role="presentation"
              decoding="async"
              loading="lazy"
              className="size-full  object-contain"
              style={{
                objectPosition: "bottom right",
                transform: "translate(35%,0)",
              }}
            />
          </div>

          <div>
            <img
              src={choco}
              alt="donuts"
              role="presentation"
              fetchPriority="high"
              decoding="async"
              loading="lazy"
              className="size-full  object-contain "
              style={{
                objectPosition: "bottom left",
                transform: "translate(-15%,0)",
              }}
            />
          </div>
          <div />
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-center items-center  gap-16 md:gap-20 lg:gap-40 text-lg min-h-[50vh] py-8">
        {contactInfo.map((sec, index) => (
          <div key={index} className=" text-center">
            <h2 className="text-xl font-extrabold uppercase">{sec.title}</h2>
            <div>
              {sec.content.map((p, i) => (
                <div
                  key={i}
                  className="my-4 flex justify-center items-center gap-2"
                >
                  {p?.label && <p className="capitalize">{p.label} :</p>}
                  {p.link}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <CurveBottom />
    </main>
  );
}
