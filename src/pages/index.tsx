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
import Joyride, { CallBackProps, STATUS } from "react-joyride";

import { useEffect, useState } from "react";

interface State {
  stepIndex: number;
  steps: any[];
}

export default function Home() {
  const [state, setState] = useState<State>({
    stepIndex: 0,
    steps: [
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
    ],
  });

  const [joyrideStatus, setJoyrideStatus] = useState<boolean>(false);

  const buttonStyles = {
    options: {
      primaryColor: "#319795",
    },
  };

  const onboardingLocale = {
    next: "Lanjut",
    back: "Kembali",
    last: "Tutup",
  };

  const handleJoyrideCallback = (data: any) => {
    const { action, index, status, type } = data;

    if (action === "reset") {
      localStorage.setItem("onboarding", "true");
    }
  };

  useEffect(() => {
    let onboardingStatus: any = localStorage.getItem("onboarding");
    onboardingStatus = JSON.parse(onboardingStatus);

    setJoyrideStatus(onboardingStatus);
  }, []);

  return (
    <>
      {!joyrideStatus && <Joyride locale={onboardingLocale} steps={state.steps} callback={handleJoyrideCallback} continuous={true} showSkipButton={false} styles={buttonStyles} />}

      <Navbar />
      <Header />
      <Sponsorship />
      <Timeline />
      {/* <Desc1 /> */}
      <Desc2 />
      <UmkmList />
      {/* <Review /> */}
      <FaQ />
      <Footer />
    </>
  );
}
