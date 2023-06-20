import {
  Box,
  Table,
  TableCaption,
  Tbody,
  Th,
  Thead,
  Td,
  Tr,
  Heading,
  Text,
  Flex,
  Skeleton,
} from "@chakra-ui/react";

import FormatService from "@src/utils/services/format.service";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import dayjs from "dayjs";

import "react-day-picker/dist/style.css";
import { useMutation, gql } from "@apollo/client";

export default function Stock() {
  let stockData: any = localStorage.getItem("stockByDate") || "";
  let allStockData: any = localStorage.getItem("chickenStock") || "";
  allStockData = JSON.parse(allStockData);
  stockData = JSON.parse(stockData);

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [allPrice, setAllPrice] = useState<any[]>();
  const [chickenStocks, setChickenStocks] = useState<any[]>(stockData);
  const format = new FormatService();

  const [calculatePrice, { data, loading, error }] = useMutation(gql`
    mutation CalculatePrice($price: [Float]!) {
      calculatePrice(price: $price) {
        currentPrice
      }
    }
  `);

  useEffect(() => {
    setTimeout(() => {
      const chickenStock = localStorage.getItem("stockByDate") || "";
      const stocks: any[] = JSON.parse(chickenStock);
      const date = dayjs(selectedDate).date();
      let currentStock;
      const filteredStock = stocks.filter((s) => s.date === date);

      if (filteredStock.length === 0) {
        currentStock = allStockData.map((asd) => {
          if (asd.id <= date) {
            return asd;
          }
        });
      } else {
        currentStock = stocks.filter((s) => s.date === date)[0].data;
      }

      let batchPrice: any[] = currentStock.map(
        (cs) => cs !== undefined && cs.sellingPrice
      );

      batchPrice = batchPrice.filter((bp) => bp !== false);
      console.log(batchPrice);

      setAllPrice(batchPrice);
      setChickenStocks(currentStock);

      calculatePrice({ variables: { price: batchPrice } });
    }, 200);
  }, [selectedDate]);

  return (
    <>
      <br />
      <br />
      <Heading as="h2" textAlign="center">
        Stock Ayam
      </Heading>
      <Flex justifyContent="center" gap="20px">
        <Box bg="white" mt="50px" borderRadius="12px">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </Box>

        <Box
          bg="white"
          width="fit-content"
          p="20px"
          borderRadius="12px"
          mt="50px"
        >
          <Table>
            <TableCaption>Table Penjualan Bulan ini</TableCaption>
            <Thead>
              <Tr>
                <Th>Tanggal</Th>
                <Th>Harga Per Kilo</Th>
                <Th>Jumlah Stok</Th>
                <Th>Jumlah Stok (Porsi)</Th>
              </Tr>
            </Thead>
            <Tbody textAlign="center">
              {chickenStocks?.map(
                (stock, index) =>
                  stock !== undefined && (
                    <Tr>
                      <Td>{++index}</Td>
                      <Td>{format.currency(stock?.price)}</Td>
                      <Td>{stock?.stock}</Td>
                      <Td>{stock?.porsi}</Td>
                    </Tr>
                  )
              )}
            </Tbody>
          </Table>

          <Text textAlign="center">Harga Jual : </Text>
          {loading ? (
            <Skeleton>
              <Heading as="h2">hi</Heading>
            </Skeleton>
          ) : (
            <Heading as="h2" textAlign="center">
              {format.currency(data?.calculatePrice?.currentPrice)}
            </Heading>
          )}
        </Box>
      </Flex>
    </>
  );
}
