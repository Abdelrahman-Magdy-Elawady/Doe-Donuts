import { content } from "./constants";
import { CurveBottom } from "../../../Components/Index";
import { useCssVarSetter } from "../../../hooks";
//-------------------------------------------------

export default function TermsAndConditionsPage() {
  useCssVarSetter({
    "--body-bg": "var(--brillian-Rose)",
    "--body-text": "var(--md-white)",
  });

  return (
    <main className="relative bg-[--body-bg] text-[--body-text] transition-colors duration-500 ">
      <section className="min-h-screen pt-[calc(var(--md-nav-hight)+3rem)]   px-8 lg:px-16 text-xl text-justify">
        <h1 className="text-center font-extrabold uppercase text-5xl md:text-7xl">
          {content.title}
        </h1>
        <div className="space-y-16 py-16">
          {content.paragraph.map((p, index) => (
            <div key={index}>{p}</div>
          ))}
        </div>
      </section>
      <CurveBottom />
    </main>
  );
}
