import { Box, BoxProps, Container, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, fallbackSrc, mediumBreakpoints } from "@src/definitions/variables";

export default function HeaderBlogDetails(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  return (
    <Box {...props} marginTop={mediumScreen ? "0vh" : "2vh"} padding="10px 10px">
      <Box>
        <Box textAlign="center" px="0px">
          <Heading size="lg">Roki Coffee Shop Berhasil meraih modal funding 100 juta dari InvestKU</Heading>

          <Text marginTop="12px" fontSize="14px" color="gray.100">
            29 menit yang lalu - 5 menit membaca
          </Text>
        </Box>
        <Image
          src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
          w="100%"
          loading="lazy"
          fallbackSrc={fallbackSrc}
          marginTop="20px"
        />
      </Box>
    </Box>
  );
}
