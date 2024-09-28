import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
//--------------------pages------------------------------
import Root from "./pages/Root";
import {
  HomePage,
  CorporatePage,
  ContactPage,
  AboutUsPage,
  HowItWorksPage,
  OurDonutsPage,
  OurLocationsPage,
  CreateOwnBox,
} from "./pages";

//--------------------------------------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <>Page is Not found</>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/corporate",
        element: <CorporatePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/aboutUs",
        element: <AboutUsPage />,
      },
      {
        path: "/howItWorks",
        element: <HowItWorksPage />,
      },
      {
        path: "/ourDonuts",
        element: <OurDonutsPage />,
      },
      {
        path: "/ourLocations",
        element: <OurLocationsPage />,
      },
      {
        path: "/create-own-box",
        element: <CreateOwnBox />,
      },
      // {
      //   path: "/category/:name",
      //   element: <CategoryPage />,
      // },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
