import { Box, BoxProps, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { mediumBreakpoints } from "@src/definitions/variables";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  return (
    <Box as="a" href="/blogs/details" flexBasis="48%" display="flex" gap="20px" padding="8px">
      <Box flexBasis="40%">
        <Image src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80" width="100%" />
      </Box>
      <Box>
        <Heading as="h6" size="sm" textTransform="capitalize">
          Penerimaan funding dana
        </Heading>
        <Text color="blackAlpha.800" marginTop="7px" fontSize="14px">
          10 hari | 10 menit baca
        </Text>
      </Box>
    </Box>
  );
}
