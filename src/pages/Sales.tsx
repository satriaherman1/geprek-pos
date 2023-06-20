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
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Text,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import dayjs from "dayjs";
import SalesPrice from "@src/components/fragments/SalesPrice";
import FormatService from "@src/utils/services/format.service";

export default function Sales() {
  let soldData: any = localStorage.getItem("chickenSales");
  soldData = JSON.parse(soldData) || [];
  let stockByDate: any = localStorage.getItem("stockByDate");
  stockByDate = JSON.parse(stockByDate) || [];
  let stockData: any = localStorage.getItem("chickenStock") || "";
  stockData = JSON.parse(stockData);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDate, setSelectedDate] = useState<string>();
  const [sales, setSales] = useState<string>("");
  const [sold, setSold] = useState<any>(soldData);

  const format = new FormatService();

  const handleSubmit = () => {
    const date = dayjs(selectedDate, "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (z)");
    const day = date.date();

    const newSold = {
      date: day,
      sold: parseInt(sales),
      stockId: handleStock(sales, day),
    };

    const stringOfNewSold = JSON.stringify([...sold, newSold]);
    localStorage.setItem("chickenSales", stringOfNewSold);
    setSold([...sold, newSold]);
    onClose();
  };

  const handleStock = (sold, date) => {
    let stockId: number[] = [];
    let currentSold = sold;
    const filteredStock = stockData.filter((s) => s.id <= date);
    const newStock = filteredStock.map((ns) => {
      if (ns.porsi - currentSold <= 0) {
        currentSold -= ns.porsi;
        ns.porsi = 0;
        stockId = [...stockId, ns.id];
      } else {
        console.log("not overload", ns.porsi, currentSold);
        if (Array.isArray(stockId)) {
          stockId = [...stockId, ns.id];
        } else {
          stockId = ns.id;
        }
        if (currentSold === 0) {
          return ns;
        } else {
          ns.porsi -= currentSold;
          currentSold = 0;
        }
      }

      return ns;
    });

    const currentDate = dayjs(selectedDate).date();
    const currentNewStock = newStock.filter((ns) => ns.id)[0];
    const filterStockByDate = stockByDate.map((s) => {
      if (s.date === currentDate) {
        s.porsi -= currentNewStock.porsi;
      }

      return s;
    });

    const stockByDateUnion = [
      ...filterStockByDate,
      ...[{ date: date, data: newStock }],
    ];
    const stringOfStockByDate = JSON.stringify(stockByDateUnion);

    // localStorage.setItem("chickenStock", stringOfNs);
    localStorage.setItem("stockByDate", stringOfStockByDate);

    return stockId;
  };

  const generatePrice = (arrOfPrice: number[]): number[] => {
    const priceList = arrOfPrice.map((arr) => {
      const price = stockData?.filter((data: any) => data.id == arr)[0]
        .sellingPrice;
      return price;
    });

    return priceList;
  };

  return (
    <>
      <br />
      <br />
      <Heading as="h2" textAlign="center">
        Penjualan
      </Heading>
      <Box
        bg="white"
        width="80%"
        mx="auto"
        mt="50px"
        p="20px"
        borderRadius="20px"
      >
        <Table>
          <TableCaption>Tabel Penjualan Bulan ini</TableCaption>

          <Thead>
            <Tr>
              <Th>Tanggal</Th>

              <Th>Harga Per Porsi</Th>
              <Th>Jumlah Terjual</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sold?.map((s: any, index: number) => (
              <Tr>
                <Td>{s.date}</Td>

                <Td>
                  {Array.isArray(s?.stockId) ? (
                    <SalesPrice price={() => generatePrice(s.stockId)} />
                  ) : (
                    <>
                      {format.currency(
                        stockData?.filter(
                          (data: any) => data.id == s.stockId
                        )[0].sellingPrice
                      )}
                    </>
                  )}
                </Td>
                <Td>{s?.sold}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Button onClick={onOpen}>Tambah Penjualan</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <Text>Tanggal</Text>
                <Input
                  type="date"
                  mt="8px"
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </Box>
              <Box mt="20px">
                <Text>Jumlah Jual</Text>
                <Input
                  mt="8px"
                  type="number"
                  placeholder="Contoh : 2"
                  onChange={(e) => setSales(e.target.value)}
                />
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost" onClick={handleSubmit}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
