import { Box, Container, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import SponsorWrapper from "@src/components/fragments/SponsorWrapper";
import { containerMaxWidth } from "@src/definitions/variables";
import useAOS from "@src/utils/hooks/useAos";
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

  useAOS({ once: true });

  return (
    <Box paddingY="30px">
      <Container maxW={containerMaxWidth} data-aos="fade">
        <Text textAlign="center">Disponsori Oleh :</Text>
      </Container>
      <Box background="none" paddingY="20px" marginTop="20px" data-aos="fade">
        <Container maxW={containerMaxWidth}>
          <Marquee gradient={false} speed={60}>
            {sponsorshipUrl.map((url) => (
              <SponsorWrapper marginX="20px" key={url} imageUrl={url} width="200px" />
            ))}
          </Marquee>
        </Container>
      </Box>
    </Box>
  );
}
