import { Box, Button, Container, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";
import useAOS from "@src/utils/hooks/useAos";

export default function Desc1() {
  const [mediumDevices] = useMediaQuery(mediumBreakpoints);

  useAOS({ once: true });

  return (
    <Box marginTop="10vh" data-aos="fade">
      <Container maxW={containerMaxWidth} display="flex" marginY={mediumDevices ? "10vh" : "5vh"} justifyContent="space-between" flexDir={mediumDevices ? "row" : "column"}>
        <Flex justifyContent="space-between" flexBasis={mediumDevices ? "48%" : "100%"}>
          <Image
            src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677417672/investment-competition/modal_dfdfhy.png"
            loading="lazy"
            display="block"
            mx="auto"
            maxH="500px"
            fallbackSrc="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677231020/investment-competition/fallback_qvvcgt.svg"
          />
        </Flex>

        <Box display="flex" alignItems="center" flexBasis={mediumDevices ? "48%" : "100%"}>
          <Box>
            <Heading size="2xl">Membantu Anda untuk Mendapatkan Modal Bisnis</Heading>
            <Text marginTop="25px">Dapatkan modal untuk bisnis UMKM anda dengan mudah di InvestKU. Cukup daftarkan bisnis anda di platform kami dan dapatkan dana hingga 700 juta!</Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
