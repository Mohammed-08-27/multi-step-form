import StepOne from "./steps/stepOne";
import StepTwo from "./steps/stepTwo";
import StepThree from "./steps/stepThree";
import StepControl from "./stepControl";
import StepFour from './steps/stepFour';
import Thank from "./steps/stepThanks";
import { useContext } from "react";
import { FormContext } from "../context/stepContext";
export default function FormContainer() {
  const { stepCount } = useContext(FormContext);
  const steps = [
    <StepOne key={1} />,
    <StepTwo key={2} />,
    <StepThree key={3} />,
    <StepFour key={4} />,
    <Thank key={5} />
  ]

  return (
    <>
      {steps.map((item, index) => {
        return (
          (index === stepCount && item)
        );
      })}
      <StepControl />
    </>
  )
}