import { Step } from "react-joyride";

interface State {
  stepIndex: number;
  steps: Step[];
}

interface IOnboardingProps {
  step: any[];
}

interface StepProps {
  target: string;
  disableBeacon?: Boolean;
  content: string;
  options?: StepOptionsProps;
}

interface StepOptionsProps {
  isLastStep: Boolean;
  // menetapkan callback pada tombol 'Last'
  callback: Function;
}

export { State, StepProps, IOnboardingProps };
