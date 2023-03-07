import AboutUsHeader from "@src/components/containers/AboutUs/Header";
import AboutUs from "@src/pages/About";
import Blogs from "@src/pages/Blogs";
import BlogsDetails from "@src/pages/BlogsDetails";

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
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogs/details",
    element: <BlogsDetails />,
  },
]);

export default appRouter;
