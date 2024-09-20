import { NavBar, Footer } from "../Components";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <ScrollRestoration />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
