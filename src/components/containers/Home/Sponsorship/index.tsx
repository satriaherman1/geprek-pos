import { Box, Container, Image, useColorModeValue } from "@chakra-ui/react";
import { containerMaxWidth } from "@src/definitions/variables";
import Marquee from "react-fast-marquee";

export default function Sponsorship() {
  const sponsorshipUrl = [
    "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677386769/investment-competition/sponsorship/shopee_wzlegm.png",
    "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677386768/investment-competition/sponsorship/grab_qxvwh6.svg",
    "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677386768/investment-competition/sponsorship/google_fpgcsz.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://www.pertamina.com/Media/Image/Pertamina.png",
  ];

  const bg = useColorModeValue("#fafafa", "blackAlpha.200");

  return (
    <Box background={bg} paddingY="30px">
      <Container maxW={containerMaxWidth}>
        <Marquee gradient={false} speed={60}>
          {sponsorshipUrl.map((url) => (
            <Image marginX="20px" key={url} src={url} width="200px" alt="" />
          ))}
        </Marquee>
      </Container>
    </Box>
  );
}
