import {
  Box,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
  BoxProps,
  Flex,
  useMediaQuery,
  Text,
  Divider,
  Textarea,
  Select,
  useColorModeValue,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from "@chakra-ui/react";

import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";
import { useRef } from "react";

export default function Form(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const bg = useColorModeValue("none", "#282e39");
  const borderColor = useColorModeValue("#eaeaea", "none");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef() as any;

  return (
    <Box {...props}>
      <Container maxW={containerMaxWidth}>
        <Heading as="h2">Daftar Bisnis</Heading>
        <Text marginTop="6px" color="gray.500">
          Daftarkan bisnismu di InvestKU untuk mendapatkan pendanaan
        </Text>
        <Box bg={bg} my="30px" padding="20px" border={`1px solid ${borderColor}`} rounded="lg">
          <Flex as="section" flexDir="column" gap="20px">
            <Box>
              <Heading as="h4" fontSize="24px">
                Data perusahaan
              </Heading>
              <Text marginTop="6px" color="gray.500">
                Isi data perusahaan dengan lengkap
              </Text>
              <Divider marginTop="10px" />
            </Box>
            <Flex flexDir={mediumScreen ? "row" : "column"} gap="20px">
              <FormControl flexBasis={mediumScreen ? "row" : "column"}>
                <FormLabel>
                  Nama Perusahaan{" "}
                  <Box as="span" fontSize="18px" color="red.600">
                    *
                  </Box>{" "}
                </FormLabel>
                <Input type="text" placeholder="PT Mangun Jaya" />
                <FormHelperText>Kita tidak akan membagikan data anda.</FormHelperText>
              </FormControl>
              <FormControl flexBasis={mediumScreen ? "row" : "column"}>
                <FormLabel>
                  Nomor Telepon Perusahaan{" "}
                  <Box as="span" fontSize="18px" color="red.600">
                    *
                  </Box>{" "}
                </FormLabel>
                <Input type="tel" placeholder="089665637236" />
              </FormControl>
            </Flex>
            <Flex flexDir={mediumScreen ? "row" : "column"} gap="20px">
              <FormControl flexBasis={mediumScreen ? "row" : "column"}>
                <FormLabel>
                  {" "}
                  Email perusahaan{" "}
                  <Box as="span" fontSize="18px" color="red.600">
                    *
                  </Box>{" "}
                </FormLabel>
                <Input type="email" placeholder="example@gmail.com" />
              </FormControl>
              <FormControl flexBasis={mediumScreen ? "row" : "column"}>
                <FormLabel>Nomor Telepon</FormLabel>
                <Input type="tel" placeholder="089665637236" />
              </FormControl>
            </Flex>
            <Flex flexDir={mediumScreen ? "row" : "column"} gap="20px">
              <FormControl flexBasis={mediumScreen ? "row" : "column"}>
                <FormLabel>Alamat Perusahaan</FormLabel>
                <Textarea placeholder="Tebet, Jakarta Selatan" />
              </FormControl>
              <FormControl flexBasis={mediumScreen ? "row" : "column"}>
                <FormLabel>Jumlah Karyawan</FormLabel>
                <Select>
                  <option value="1 - 10">1 - 10</option>
                  <option value="10 - 20">10 - 50</option>
                  <option value=" > 20"> {">"} 20</option>
                </Select>
              </FormControl>
            </Flex>
          </Flex>
          <Flex mt="60px" as="section" flexDir="column" gap="20px">
            <Box>
              <Heading as="h4" fontSize="24px">
                Data Direktur
              </Heading>
              <Text marginTop="6px" color="gray.500" textTransform="capitalize">
                Isi data Direktur Perusahaan dengan lengkap
              </Text>
              <Divider marginTop="10px" />
            </Box>
            <Flex flexDir={mediumScreen ? "row" : "column"} gap="20px">
              <FormControl flexBasis={mediumScreen ? "row" : "column"}>
                <FormLabel>
                  Nama
                  <Box as="span" fontSize="18px" color="red.600">
                    *
                  </Box>{" "}
                </FormLabel>
                <Input type="text" placeholder="PT Mangun Jaya" />
                <FormHelperText>Kita tidak akan membagikan data anda.</FormHelperText>
              </FormControl>
              <FormControl flexBasis={mediumScreen ? "row" : "column"}>
                <FormLabel>
                  Nomor Telepon
                  <Box as="span" fontSize="18px" color="red.600">
                    *
                  </Box>{" "}
                </FormLabel>
                <Input type="tel" placeholder="089665637236" />
              </FormControl>
            </Flex>
            <Flex flexDir={mediumScreen ? "row" : "column"} gap="20px">
              <FormControl flexBasis={mediumScreen ? "row" : "column"}>
                <FormLabel>
                  {" "}
                  Email
                  <Box as="span" fontSize="18px" color="red.600">
                    *
                  </Box>{" "}
                </FormLabel>
                <Input type="email" placeholder="example@gmail.com" />
              </FormControl>
              <FormControl flexBasis={mediumScreen ? "row" : "column"}>
                <FormLabel>Nomor Telepon</FormLabel>
                <Input type="tel" placeholder="089665637236" />
              </FormControl>
            </Flex>
            <Flex flexDir={mediumScreen ? "row" : "column"} gap="20px">
              <FormControl flexBasis={mediumScreen ? "row" : "column"}>
                <FormLabel>Alamat </FormLabel>
                <Textarea placeholder="Tebet, Jakarta Selatan" />
              </FormControl>
              <FormControl flexBasis={mediumScreen ? "row" : "column"}>
                <FormLabel>Pengalaman Dalam Memimpin</FormLabel>
                <Select>
                  <option value="kurang dari 1 tahun">kurang Dari 1 Tahun</option>
                  <option value="1 tahun">1 Tahun</option>
                  <option value="1 - 5 tahun">1 - 5 Tahun</option>
                  <option value="Lebih dari tahun">Lebih dari 5 Tahun</option>
                </Select>
              </FormControl>
            </Flex>
          </Flex>

          <Button colorScheme="blue" marginTop="20px" onClick={onOpen}>
            Submit
          </Button>

          <AlertDialog motionPreset="slideInBottom" leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
            <AlertDialogOverlay />

            <AlertDialogContent marginX="20px">
              <AlertDialogHeader>Apakah Data Sudah benar?</AlertDialogHeader>

              <AlertDialogBody>Yuk cek dulu data kamu sebelum kamu memutuskan untuk submit.</AlertDialogBody>
              <AlertDialogFooter>
                <Button colorScheme="red" ref={cancelRef} onClick={onClose}>
                  Belum benar
                </Button>
                <Button colorScheme="green" ml={3} onClick={() => (window.location.href = "/")}>
                  Sudah Benar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Box>
      </Container>
    </Box>
  );
}
