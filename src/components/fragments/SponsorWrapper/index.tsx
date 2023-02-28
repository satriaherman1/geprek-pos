import { Box, Image, useColorModeValue, Flex, FlexProps } from "@chakra-ui/react";
import { boxShadow } from "@src/definitions/variables";

interface IumkmCard extends FlexProps {
  imageUrl: string;
}

export default function SponsorWrapper({ imageUrl, ...props }: IumkmCard) {
  const border = useColorModeValue("#ebebeb", "#6e6e6e");
  return (
    <Flex {...props} alignItems="center" border={`2px solid ${border}`} borderRadius="6px" padding="0 16px" width="200px" height="90px">
      <Image src={imageUrl} w="90%" />
    </Flex>
  );
}
