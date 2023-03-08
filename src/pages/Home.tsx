import Footer from "@src/components/common/Footer";
import Desc1 from "@src/components/containers/Home/Desc1";
import Desc2 from "@src/components/containers/Home/Desc2";
import FaQ from "@src/components/containers/Home/FaQ";
import Header from "@src/components/containers/Home/Header";
import Review from "@src/components/containers/Home/Review";
import Sponsorship from "@src/components/containers/Home/Sponsorship";
import Timeline from "@src/components/containers/Home/Timeline";
import UmkmList from "@src/components/containers/Home/UmkmList";
import Navbar from "@src/components/fragments/Navbar";

import { useEffect, useState } from "react";
import JoinUs from "@src/components/containers/Home/JoinUs";
import Onboarding from "@src/components/common/Onboarding";
import { Step } from "react-joyride";
import { StepProps } from "@src/components/common/Onboarding/onboarding";
import useAOS from "@src/utils/hooks/useAos";

export default function Home() {
  const [joyrideStatus, setJoyrideStatus] = useState<boolean>(false);

  const steps: StepProps[] = [
    {
      target: ".navbar",
      disableBeacon: true,
      content: "Ini adalah Navigasi untuk berpindah pindah antar halaman",
    },
    {
      target: ".dark-switch",
      content: "Klik untuk pindah ke mode gelap",
    },
    {
      target: ".nav-button",
      content: "Klik untuk membuka navigasi halaman",
    },
    {
      target: ".start-now",
      content: "Klik untuk memulai pendaftaran UMKM anda!",

      options: {
        isLastStep: true,
        // menetapkan callback pada tombol 'Last'
        callback: () => {
          console.log("Joyride selesai!");
        },
      },
    },
  ];

  useEffect(() => {
    let onboardingStatus: any = localStorage.getItem("onboarding");
    onboardingStatus = JSON.parse(onboardingStatus);

    setJoyrideStatus(onboardingStatus);
  }, []);

  useAOS({ once: true });

  return (
    <>
      {!joyrideStatus && <Onboarding step={steps} />}

      <Navbar />
      <Header marginTop="120px" />
      <Timeline />
      {/* <Desc1 /> */}
      <Desc2 />
      <JoinUs />
      <UmkmList />
      <Sponsorship />
      {/* <Review /> */}
      <FaQ />
      <Footer />
    </>
  );
}
