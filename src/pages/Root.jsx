import { Outlet } from "react-router-dom";

import { ScrollRestoration } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <ScrollRestoration />

      {
        // fixed things
      }
      <Outlet />
    </div>
  );
}
