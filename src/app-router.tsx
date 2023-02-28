import AboutUsHeader from "@src/components/containers/AboutUs/Header";
import AboutUs from "@src/pages/About";

import Home from "@src/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    caseSensitive: true,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
]);

export default appRouter;
