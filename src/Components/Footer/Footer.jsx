import { content, copyRights } from "./constants";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer
      className="relative h-[600px] bg-[--body-bg] text-[--body-text]"
      style={{ clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)" }}
    >
      <div className="fixed h-[600px] bottom-0 w-full">
        <div className="absolute bottom-0 w-full text-sm sm:text-base text-center">
          <div className="py-8 flex justify-center gap-[7vw]  sm:gap-28 w-full items-baseline">
            {content.map((sec, index) => (
              <div key={index} className="flex flex-col items-center gap-4 ">
                {sec.logo}
                <div className="font-bold uppercase">{sec.label}</div>
                {sec.links.map((li, i) => (
                  <Link
                    key={i}
                    to={li.path}
                    className="capitalize block support-hover:hover:cursor-pointer support-hover:hover:underline "
                    {...li?.config}
                  >
                    {li.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-between items-center py-8  mx-0 sm:mx-24 border-t-2 border-[--body-text]">
            {copyRights}
          </div>
        </div>
      </div>
    </footer>
  );
}
