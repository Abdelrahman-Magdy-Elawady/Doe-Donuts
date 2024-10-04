import {
  NavBar,
  Footer,
  ScrollToTopButton,
  PageTransition,
} from "../Components";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import { useGsapRefresh } from "../hooks";
import ReactLenis from "lenis/react";

export default function Root() {
  useGsapRefresh();
  return (
    <div>
      <ReactLenis root>
        <ScrollRestoration />
        <ScrollToTopButton />
        <PageTransition></PageTransition>
        <NavBar />
        <Outlet />
        <Footer />
      </ReactLenis>
    </div>
  );
}
