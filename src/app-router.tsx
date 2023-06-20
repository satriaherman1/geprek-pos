import Home from "@src/pages/Home";

import { createBrowserRouter } from "react-router-dom";
import Sales from "@src/pages/Sales";
import Stock from "@src/pages/Stock";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    caseSensitive: true,
  },
  {
    path: "/sales",
    element: <Sales />,
  },
  {
    path: "/stock",
    element: <Stock />,
  },
]);

export default appRouter;
