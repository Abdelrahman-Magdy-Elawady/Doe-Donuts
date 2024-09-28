import { DonutDetails } from ".";
import { useState } from "react";
export default function DonutCard({ donut }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="relative  isolate">
      <div
        key={donut.id}
        className="flex flex-col justify-around shadow-lg p-4 rounded-md h-[33rem] md:w-96 w-80 "
        style={{
          backdropFilter: "blur(70px)",
        }}
        onClick={() => setShowDetails(true)}
      >
        <div className="w-full  h-96 rounded-2xl  overflow-hidden relative isolate">
          <img
            src={donut.img}
            alt={donut.name}
            className="size-full object-cover object-center  hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="flex justify-between items-center font-extrabold ">
          <div className="text-xl  lg:text-2xl uppercase line-clamp-1">
            {donut.name}
          </div>
          <div className="text-xl text-nowrap">{donut.cost} $</div>
        </div>
      </div>

      <div className="absolute -inset-[.125rem]  -z-10 rounded-md flex justify-center items-center overflow-hidden">
        <div
          className="w-20 h-[150%] bg-[--md-pink] animate-spin"
          style={{
            animationDuration: "10s",
          }}
        ></div>
      </div>
      {showDetails && (
        <DonutDetails close={() => setShowDetails(false)}></DonutDetails>
      )}
    </div>
  );
}
