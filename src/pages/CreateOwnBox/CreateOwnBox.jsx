import { useRef } from "react";
import { useCssVarSetter, useChangeColor } from "../../hooks";
import { CurveBottom, DonutCard } from "../../Components";
import { useFetchDonutsQuery } from "../../store";

const colorPalette = [
  {
    target: ".sec-1",
    style: {
      "--body-bg": "var(--md-white)",
      "--body-text": "var(--lg-pink)",
    },
  },
  //   {
  //     target: ".sec-2",
  //     style: {
  //       "--body-bg": "var(--blue)",
  //       "--body-text": "white",
  //     },
  //   },
  //   {
  //     target: ".sec-3",
  //     style: {
  //       "--body-bg": "var(--brillian-Rose)",
  //       "--body-text": "white",
  //     },
  //   },
];
//-------------------------------------------------

export default function CreateOwnBox() {
  const ref = useRef(null);
  useCssVarSetter({
    "--body-bg": "var(--md-white)",
    "--body-text": "var(--lg-pink)",
  });
  useChangeColor(ref, colorPalette);

  const { data, error, isFetching } = useFetchDonutsQuery();

  let allDonuts = null;
  if (isFetching) {
    allDonuts = (
      <div className="text-center text-3xl font-bold">is fetching ......</div>
    );
  } else if (error) {
    allDonuts = (
      <div className="text-center text-3xl font-bold">
        Error in loading Food .....
      </div>
    );
  } else {
    allDonuts = data.map((donut) => <DonutCard donut={donut} key={donut.id} />);
  }

  return (
    <main
      className="relative bg-[--body-bg] text-[--body-text] transition-colors duration-500"
      ref={ref}
    >
      <section className="sec-1 pt-[calc(var(--md-nav-hight)+1rem)]  mx-4 lg:mx-16 min-h-screen flex flex-col justify-center items-center gap-16">
        {!isFetching && !error && (
          <div className="w-full space-y-24 pt-12">
            <h1 className="text-center uppercase font-extrabold text-5xl md:text-8xl max-w-[1024px] mx-auto">
              Create your own box
            </h1>
            <div className="flex justify-between items-center text-center flex-col lg:flex-row lg:text-start gap-16">
              <div className="space-y-8">
                <h2 className="font-extrabold text-2xl md:text-4xl uppercase">
                  Select from the singles below
                </h2>
                <div className="text-xl md:text-2xl">
                  We’ll lovingly add your assortment to a curated box ready for
                  pick up or delivery!
                </div>
              </div>
              <div>filter</div>
            </div>
          </div>
        )}
        <div className=" flex flex-wrap justify-center items-center gap-16">
          {allDonuts}
        </div>
      </section>
      <div className="h-40 ">{/* divider */}</div>
      <CurveBottom />
    </main>
  );
}
