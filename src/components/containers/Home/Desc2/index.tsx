import { Box, Button, Container, Flex, Heading, Image, Text, useMediaQuery, Icon, List, ListItem } from "@chakra-ui/react";
import { boxShadow, containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";
import useAOS from "@src/utils/hooks/useAos";
import { BiCheckShield, BiTimer } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function Desc2() {
  const [mediumDevices] = useMediaQuery(mediumBreakpoints);

  useAOS();

  return (
    <Box paddingY={mediumDevices ? "17vh" : "9vh"} data-aos="fade">
      <Container maxW={containerMaxWidth} display="flex" marginY={mediumDevices ? "10vh" : "5vh"} justifyContent="space-between" flexDir={mediumDevices ? "row" : "column-reverse"} gap="30px">
        <Box display="flex" alignItems="center" flexBasis={mediumDevices ? "38%" : "100%"}>
          <Box>
            <Heading size="2xl">
              Dapatkan{" "}
              <Box as="span" color="blue.500">
                Benefit
              </Box>{" "}
              di InvestKU
            </Heading>
            <Text marginTop="25px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed inventore quasi consectetur sapiente nesciunt in fugiat et explicabo eligendi reprehenderit!</Text>
            {/* <Button marginTop="25px" size="lg" variant="solid" colorScheme="blue">
              Dapatkan Keuntungan!
            </Button> */}
            <Flex flexWrap="wrap" marginTop="30px" rowGap="20px" justifyContent="space-between">
              <Box flexBasis={mediumDevices ? "48%" : "100%"}>
                <List display="flex" flexDir="column" rowGap="20px">
                  <ListItem display="flex" alignItems="center" columnGap="10px">
                    <Icon color="green.500" as={BiTimer} display="inline-block" fontSize="35px" w="35px" />
                    <Text whiteSpace="nowrap" fontWeight="600" fontSize="22px">
                      Proses Verifikasi Cepat
                    </Text>
                  </ListItem>
                  <ListItem display="flex" alignItems="center" columnGap="10px">
                    <Icon color="green.500" as={BiCheckShield} display="inline-block" fontSize="35px" w="35px" />
                    <Text whiteSpace="nowrap" fontWeight="600" fontSize="22px">
                      Sudah mendapat izin OJK
                    </Text>
                  </ListItem>
                  <ListItem display="flex" alignItems="center" columnGap="10px">
                    <Icon color="green.500" as={HiOutlineDocumentText} display="inline-block" fontSize="35px" w="35px" />
                    <Text whiteSpace="nowrap" fontWeight="600" fontSize="22px">
                      Persyaratan yang gak ribet
                    </Text>
                  </ListItem>
                </List>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Flex justifyContent="space-between" flexBasis={mediumDevices ? "58%" : "100%"}>
          <Image
            src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677477042/investment-competition/benefit_tkmfno.png"
            loading="lazy"
            display="block"
            mx="auto"
            maxH="500px"
            fallbackSrc="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677231020/investment-competition/fallback_qvvcgt.svg"
          />
        </Flex>
      </Container>
    </Box>
  );
}
