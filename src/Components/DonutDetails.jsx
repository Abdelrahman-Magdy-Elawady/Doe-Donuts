import { createPortal } from "react-dom";
import { usePreventBodyScroll } from "../hooks";
import { cn } from "../Utils/cn";

export default function Toaster({ children, className, close }) {
  usePreventBodyScroll();
  return createPortal(
    <div
      className={cn(
        className,
        "fixed inset-0 bg-gray-400 bg-opacity-25  z-50 flex justify-center items-center text-sm sm:text-base text-center"
      )}
    >
      <div className="bg-white p-4 rounded-md flex justify-center items-center gap-2 relative"></div>
    </div>,
    document.querySelector("#donut-details")
  );
}
