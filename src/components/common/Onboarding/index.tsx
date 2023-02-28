import { IOnboardingProps, State, StepProps } from "@src/components/common/Onboarding/onboarding";
import { useState } from "react";
import Joyride from "react-joyride";

export default function Onboarding({ step }: IOnboardingProps) {
  const [state, setState] = useState<State>({
    stepIndex: 0,
    steps: step,
  });

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

  return <Joyride locale={onboardingLocale} steps={state.steps} callback={handleJoyrideCallback} continuous={true} showSkipButton={false} styles={buttonStyles} />;
}
