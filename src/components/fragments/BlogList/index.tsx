import { Box, BoxProps, Heading, Image, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { mediumBreakpoints } from "@src/definitions/variables";
import FormatService from "@src/utils/services/format.service";

interface IBloglist {
  imageUrl: string;
  title: string;
  date: string;
}

export default function BlogList({ imageUrl, title, date }: IBloglist) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const detailsColor = useColorModeValue("blackAlpha.800", "white");
  const formatService = new FormatService();

  return (
    <Box as="a" href="/blogs/details" flexBasis="48%" display="flex" gap="20px" padding="8px">
      <Box flexBasis="35%">
        <Box bg={`url('${imageUrl}')`} bgSize="cover" width="120px" height="80px" rounded="md" />
      </Box>
      <Box>
        <Heading as="h6" size="sm" textTransform="capitalize">
          {formatService.truncate(title, 30)}
        </Heading>
        <Text color={detailsColor} marginTop="7px" fontSize="14px">
          {date}
        </Text>
      </Box>
    </Box>
  );
}
