import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
//--------------------pages------------------------------
import Root from "./pages/Root";
import { HomePage, CorporatePage } from "./pages";

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
