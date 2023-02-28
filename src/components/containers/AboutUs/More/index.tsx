import { Box, Container, Flex, Heading, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";

export default function MoreAbout() {
  const bg = useColorModeValue("blue.900", "gray.700");
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  return (
    <Box bg={bg} py="9vh" color="white">
      <Container maxW={containerMaxWidth}>
        <Flex flexDir={mediumScreen ? "row" : "column"} justifyContent="space-between" gap="30px">
          <Box flexBasis={mediumScreen ? "38%" : "100%"}>
            {/* <Heading>Apa itu InvestKU?</Heading>
            <Text marginTop="20px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestiae ad hic quas ducimus?</Text> */}
            <Heading>Visi</Heading>
            <Text marginTop="20px">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quod excepturi eius? Assumenda, optio perferendis.</Text>
          </Box>
          <Flex
            flexDir="column"
            rowGap="40px"
            flexBasis={mediumScreen ? "50%" : "100%"}
            padding="30px"
            borderTop={mediumScreen ? "unset" : "1px solid #eaeaea"}
            borderLeft={!mediumScreen ? "unset" : "1px solid #aeaeae"}
          >
            {/* <Box>
              <Heading>Visi</Heading>
              <Text marginTop="20px">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quod excepturi eius? Assumenda, optio perferendis.</Text>
            </Box> */}
            <Box>
              <Heading>Misi</Heading>

              <Flex flexDir="row" gap="30px" flexWrap="wrap" marginTop={mediumScreen ? "50px" : "20px"}>
                <Box flexBasis={mediumScreen ? "46%" : "100%"}>
                  <Heading>01</Heading>
                  <Text marginTop="14px" color="whiteAlpha.800">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quod excepturi eius? Assumenda, optio perferendis.
                  </Text>
                </Box>
                <Box flexBasis={mediumScreen ? "46%" : "100%"}>
                  <Heading>02</Heading>
                  <Text marginTop="14px" color="whiteAlpha.800">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quod excepturi eius? Assumenda, optio perferendis.
                  </Text>
                </Box>
                <Box flexBasis={mediumScreen ? "46%" : "100%"}>
                  <Heading>03</Heading>
                  <Text marginTop="14px" color="whiteAlpha.800">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quod excepturi eius? Assumenda, optio perferendis.
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
