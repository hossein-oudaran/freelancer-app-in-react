import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const handleSendOtp = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const [step, setStep] = useState(1);
  const { handleSubmit, register, getValues } = useForm();

  function renderStep() {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(handleSendOtp)}
            setStep={setStep}
            register={register}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            otpResponse={otpResponse}
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep(1)}
            onResendOtp={handleSendOtp}
          />
        );
      default:
        return null;
    }
  }
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
