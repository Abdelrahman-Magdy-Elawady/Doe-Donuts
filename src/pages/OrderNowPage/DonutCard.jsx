import DonutCardDetails from "./DonutCardDetails";
import { cn } from "../../Utils/cn";
import { useState } from "react";
import styles from "./styles.module.css";

//------------------------------------------
export default function DonutCard({ donut }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <div
        key={donut.id}
        className={cn(
          "support-hover:hover:cursor-pointer flex flex-col justify-around  p-4 rounded-md h-[33rem] md:w-96 w-80 border-2",
          styles.card
        )}
        onClick={() => setShowDetails(true)}
      >
        <div className="w-full  h-96 rounded-2xl  overflow-hidden ">
          <img
            src={donut.img}
            alt={donut.name}
            className="size-full object-cover object-center  hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="support-hover:hover:mix-blend-exclusion flex justify-between items-center font-extrabold ">
          <div className="text-xl  lg:text-2xl uppercase line-clamp-1">
            {donut.name}
          </div>
          <div className="text-xl text-nowrap">{donut.cost} $</div>
        </div>
      </div>
      {showDetails && (
        <DonutCardDetails close={() => setShowDetails(false)} donut={donut} />
      )}
    </>
  );
}
