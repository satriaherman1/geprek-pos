import Footer from "@src/components/common/Footer";
import Achievement from "@src/components/containers/AboutUs/Achievement";
import AboutUsHeader from "@src/components/containers/AboutUs/Header";
import Teams from "@src/components/containers/AboutUs/Teams";
import Desc1 from "@src/components/containers/Home/Desc1";
import Navbar from "@src/components/fragments/Navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutUsHeader />
      <Achievement />
      <Desc1 />
      <Teams />

      <Footer />
    </>
  );
}