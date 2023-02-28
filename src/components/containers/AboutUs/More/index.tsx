import { Box, Container, Divider, Flex, Heading, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";
import useAOS from "@src/utils/hooks/useAos";

export default function MoreAbout() {
  const bg = useColorModeValue("blue.900", "gray.700");
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  useAOS({ once: true });

  return (
    <Box bg={bg} py="9vh" color="white" data-aos="fade">
      <Container maxW={containerMaxWidth}>
        <Flex position="relative" flexDir={mediumScreen ? "row" : "column"} justifyContent="space-between" gap="30px">
          <Box flexBasis={mediumScreen ? "38%" : "100%"}>
            {/* <Heading>Apa itu InvestKU?</Heading>
            <Text marginTop="20px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestiae ad hic quas ducimus?. <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ad
              doloribus nulla neque, quam in? Sunt, quisquam similique consequatur illo laborum error ex quibusdam laboriosam, corrupti, id reiciendis ad odit. <br /> <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate cumque commodi impedit, dolores cupiditate porro velit unde animi fugit, dicta at nesciunt culpa eligendi nostrum,
              modi deserunt similique repudiandae numquam voluptatibus mollitia doloribus ea vero sequi? Unde esse neque quam voluptas dicta obcaecati, tempore, dolore quod sit nam, eos blanditiis!{" "}
              <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa sunt dicta nobis eum, ex sequi quia vero nesciunt sapiente in quae blanditiis soluta. Voluptate reprehenderit
              at temporibus adipisci architecto maiores corrupti itaque non incidunt? Porro!
            </Text> */}

            <Heading>Visi</Heading>
            <Text marginTop="20px">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quod excepturi eius? Assumenda, optio perferendis.</Text>
          </Box>

          {mediumScreen && <Box position="absolute" top="0" left="45%" transform="translateX( -50%)" width="1px" height="100%" bg="whiteAlpha.600"></Box>}

          <Flex flexDir="column" rowGap="40px" flexBasis={mediumScreen ? "50%" : "100%"} paddingY="30px" borderTop={mediumScreen ? "unset" : "1px solid #eaeaea"}>
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
