import { Box, BoxProps, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Progress, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { boxShadow } from "@src/definitions/variables";

interface IumkmCard {
  name: string;
  imageUrl: string;
  description: string;
}

export default function UmkmCard({ name, imageUrl, description }: IumkmCard) {
  const bgConfig: BoxProps = {
    bgImage: `url(${imageUrl})`,
    bgSize: "cover",
    width: "100%",
    height: "200px",
    borderRadius: "10px",
  };
  const shadow = useColorModeValue(boxShadow, "unset");
  return (
    <Card maxW="sm" w="97%" mx="auto" boxShadow={shadow}>
      <CardBody>
        <Box {...bgConfig} />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>Telah terkumpul Rp 40.000.00</Text>
          <Progress value={20} size="xs" colorScheme="green" />
        </Stack>

        <Flex justifyContent="space-between" marginTop="20px">
          <Box>
            <Text fontSize="10px" fontWeight="600">
              Harga per Lembar
            </Text>
            <Text>Rp. 2.000</Text>
          </Box>
          <Box>
            <Text fontSize="10px" fontWeight="600">
              Total Lembar
            </Text>
            <Text>Rp. 2.000</Text>
          </Box>
        </Flex>
      </CardBody>
      <Divider color="gray.300" />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Details
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
