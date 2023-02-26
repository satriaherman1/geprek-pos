import { Box, Button, Container, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";

export default function Header() {
  const [mediumDevices] = useMediaQuery(mediumBreakpoints);
  return (
    <Box as="header">
      <Container maxW={containerMaxWidth} display="flex" marginY={mediumDevices ? "10vh" : "5vh"} justifyContent="space-between" flexDir={mediumDevices ? "row" : "column-reverse"}>
        <Box display="flex" alignItems="center" flexBasis={mediumDevices ? "48%" : "100%"}>
          <Box>
            <Heading size="2xl">Temukan Modal Usaha untuk Bisnis UMKM Anda</Heading>
            <Text marginTop="25px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed inventore quasi consectetur sapiente nesciunt in fugiat et explicabo eligendi reprehenderit!</Text>
            <Button marginTop="25px" size="lg" variant="solid" colorScheme="blue">
              Daftar Sekarang!
            </Button>
          </Box>
        </Box>

        <Flex justifyContent="space-between" flexBasis={mediumDevices ? "48%" : "100%"}>
          <Image
            src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677417509/investment-competition/Group_39_1_qnr4ww.png"
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
