import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorLayout from "../layouts/ErrorLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Dashbaord from "../pages/Dashbaord";
import Accordion from "../components/Accordion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashbaord />,
      },
      {
        path: "/accordion",
        element: <Accordion />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
