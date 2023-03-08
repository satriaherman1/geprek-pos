import { Box, Button, Container, Flex, Heading, Image, Text, useMediaQuery, Icon, List, ListItem } from "@chakra-ui/react";
import { boxShadow, containerMaxWidth, largeBreakpoints, mediumBreakpoints } from "@src/definitions/variables";
import useAOS from "@src/utils/hooks/useAos";
import { BiCheckShield, BiTimer } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function Desc2() {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const [largeScreen] = useMediaQuery(largeBreakpoints);

  useAOS({ once: true });

  return (
    <Box paddingY={mediumScreen ? "17vh" : "9vh"}>
      <Container maxW={containerMaxWidth} display="flex" marginY={mediumScreen ? "10vh" : "5vh"} justifyContent="space-between" flexDir={largeScreen ? "row" : "column-reverse"} gap="30px">
        <Box display="flex" alignItems="center" flexBasis={mediumScreen ? "38%" : "100%"}>
          <Box>
            <Heading size="2xl" data-aos="fade">
              Dapatkan{" "}
              <Box as="span" color="blue.500">
                Benefit
              </Box>{" "}
              di InvestKU
            </Heading>
            <Text marginTop="25px" data-aos="fade">
              Dapatkan berbagai keuntungan saat mendaftarkan bisnis anda di platform crowdfunding kami
            </Text>

            <Flex flexWrap="wrap" marginTop="30px" rowGap="20px" justifyContent="space-between">
              <Box flexBasis={mediumScreen ? "48%" : "100%"}>
                <List display="flex" flexDir="column" rowGap="20px">
                  <ListItem display="flex" alignItems="center" columnGap="10px" data-aos="fade">
                    <Icon color="green.500" as={BiTimer} display="inline-block" fontSize="35px" w="35px" />
                    <Text whiteSpace="nowrap" fontWeight="600" fontSize="20px">
                      Proses Verifikasi Cepat
                    </Text>
                  </ListItem>
                  <ListItem display="flex" alignItems="center" columnGap="10px" data-aos="fade">
                    <Icon color="green.500" as={BiCheckShield} display="inline-block" fontSize="35px" w="35px" />
                    <Text whiteSpace="nowrap" fontWeight="600" fontSize="20px">
                      Sudah mendapat izin OJK
                    </Text>
                  </ListItem>
                  <ListItem display="flex" alignItems="center" columnGap="10px" data-aos="fade">
                    <Icon color="green.500" as={HiOutlineDocumentText} display="inline-block" fontSize="35px" w="35px" />
                    <Text whiteSpace="nowrap" fontWeight="600" fontSize="20px">
                      Persyaratan yang gak ribet
                    </Text>
                  </ListItem>
                </List>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Flex justifyContent="space-between" flexBasis={mediumScreen ? "58%" : "100%"} data-aos="fade">
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
