import { useMediaQuery } from "@chakra-ui/react";
import Footer from "@src/components/common/Footer";
import Achievement from "@src/components/containers/AboutUs/Achievement";
import AboutUsHeader from "@src/components/containers/AboutUs/Header";
import MoreAbout from "@src/components/containers/AboutUs/More";
import Teams from "@src/components/containers/AboutUs/Teams";
import WhoAreWe from "@src/components/containers/AboutUs/WhoAreWe";
import Desc1 from "@src/components/containers/Home/Desc1";
import Navbar from "@src/components/fragments/Navbar";
import { mediumBreakpoints } from "@src/definitions/variables";

export default function AboutUs() {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  return (
    <>
      <Navbar />
      <AboutUsHeader marginTop={mediumScreen ? "120px" : "40px"} />
      {/* <MoreAbout /> */}
      <WhoAreWe />

      <Desc1 />
      <Achievement />
      <Teams />

      <Footer />
    </>
  );
}
