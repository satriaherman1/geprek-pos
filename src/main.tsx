import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "@src/definitions/theme";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRouter from "./app-router";
import "./styles/global.css";
import { ApolloProvider } from "@apollo/client/react";
import client from "./utils/hooks/useGraphQL";

let stockData = localStorage.getItem("chickenStock");
let salesData = localStorage.getItem("chickenSales");
let stockByDate = localStorage.getItem("stockByDate");

if (stockData == null) {
  const dummyData = [
    {
      id: 1,
      price: 35000,
      stock: 4,
      porsi: 10,
      sellingPrice: 8000,
    },
    {
      id: 2,
      price: 40000,
      stock: 5,
      porsi: 16,
      sellingPrice: 9000,
    },
    {
      id: 3,
      price: 45000,
      stock: 6,
      porsi: 30,
      sellingPrice: 10000,
    },
    {
      id: 4,
      price: 50000,
      stock: 4,
      porsi: 20,
      sellingPrice: 12000,
    },
  ];

  const data = JSON.stringify(dummyData);
  localStorage.setItem("chickenStock", data);
}

if (salesData == "null" || salesData == null) {
  const arrSales: any[] = [];

  const data = JSON.stringify(arrSales);
  localStorage.setItem("chickenSales", data);
}

// if (stockByDate == null) {
//   const dummyData = [
//     {
//       date: 1,
//       data: [
//         {
//           id: 1,
//           price: 35000,
//           stock: 4,
//           porsi: 10,
//           sellingPrice: 8000,
//         },
//       ],
//     },
//     {
//       date: 2,
//       data: [
//         {
//           id: 1,
//           price: 35000,
//           stock: 4,
//           porsi: 10,
//           sellingPrice: 8000,
//         },
//         {
//           id: 2,
//           price: 40000,
//           stock: 5,
//           porsi: 16,
//           sellingPrice: 9000,
//         },
//       ],
//     },
//     {
//       date: 3,
//       data: [
//         {
//           id: 1,
//           price: 35000,
//           stock: 4,
//           porsi: 10,
//           sellingPrice: 8000,
//         },
//         {
//           id: 2,
//           price: 40000,
//           stock: 5,
//           porsi: 16,
//           sellingPrice: 9000,
//         },
//         {
//           id: 3,
//           price: 45000,
//           stock: 6,
//           porsi: 30,
//           sellingPrice: 10000,
//         },
//       ],
//     },
//     {
//       date: 4,
//       data: [
//         {
//           id: 1,
//           price: 35000,
//           stock: 4,
//           porsi: 10,
//           sellingPrice: 8000,
//         },
//         {
//           id: 2,
//           price: 40000,
//           stock: 5,
//           porsi: 16,
//           sellingPrice: 9000,
//         },
//         {
//           id: 3,
//           price: 45000,
//           stock: 6,
//           porsi: 30,
//           sellingPrice: 10000,
//         },
//         {
//           id: 4,
//           price: 50000,
//           stock: 4,
//           porsi: 20,
//           sellingPrice: 12000,
//         },
//       ],
//     },
//   ];

//   const data = JSON.stringify(dummyData);
//   localStorage.setItem("stockByDate", data);
// }

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ApolloProvider client={client}>
      <RouterProvider router={appRouter} />
    </ApolloProvider>
  </ChakraProvider>
);
