import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@src/definitions/theme";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRouter from "./app-router";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={appRouter} />
    </ChakraProvider>
  </React.StrictMode>,
);
