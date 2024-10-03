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
  OrderNowPage,
  CartPage,
  ShippingPolicyPage,
  TermsAndConditionsPage,
  FaqsPage,
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
        path: "/orderNow",
        element: <OrderNowPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/policies",
        children: [
          {
            path: "/policies/shipping-policy",
            element: <ShippingPolicyPage />,
          },
          {
            path: "/policies/terms-and-conditions",
            element: <TermsAndConditionsPage />,
          },
          {
            path: "/policies/faqs",
            element: <FaqsPage />,
          },
        ],
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
