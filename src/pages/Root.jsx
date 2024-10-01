import { NavBar, Footer } from "../Components";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import { ScrollToTopButton } from "../Components";
export default function Root() {
  return (
    <div>
      <ScrollRestoration />
      <ScrollToTopButton />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
