import {
  NavBar,
  Footer,
  ScrollToTopButton,
  PageTransition,
} from "../components";
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
        <PageTransition />
        <NavBar />
        <Outlet />
        <Footer />
      </ReactLenis>
    </div>
  );
}
