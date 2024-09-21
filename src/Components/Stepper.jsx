import { cn } from "../Utils/cn";
import { Fragment } from "react";
export default function Stepper({
  items = ["hello", "world", "abdo"],
  iterator = 1,
  direction = "horizontal",
}) {
  let iteratorAsci =
    typeof iterator === "number" ? iterator : iterator?.charCodeAt(0);

  const iterationHandler =
    typeof iterator === "number"
      ? () => iteratorAsci++
      : () => {
          const res = String.fromCharCode(iteratorAsci);
          iteratorAsci++;
          return res;
        };

  return (
    <div
      className={cn("grid w-full", {
        "grid-cols-2": direction === "vertical",
        "grid-rows-1": direction === "horizontal",
      })}
      style={{
        gridTemplateColumns: `repeat(${items.length},1fr)`,
      }}
    >
      {items.map((step, index) => (
        <div
          key={index}
          className="gap-4 flex flex-col items-center justify-center relative"
        >
          <div
            className={cn(
              "w-20 aspect-square rounded-full flex justify-center items-center",
              {
                "after:absolute after:left-1/2 after:w-full after:bg-slate-600 after:h-1 ":
                  index !== items.length - 1,
              }
            )}
          >
            {iterationHandler()}
          </div>
          <div>{step}</div>
        </div>
      ))}
    </div>
  );
}
