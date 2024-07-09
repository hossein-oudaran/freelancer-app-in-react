import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowCircleRight } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import Loading from "../../ui/Loading";

const RESEND_TIME = 90;

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [time, setTime] = useState(RESEND_TIME);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const handleCheckOtp = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowCircleRight className="w-6 h-6 text-secondary-500 mb-3" />
      </button>
      <div>
        {otpResponse && (
          <p className="flex items-center gap-x-2 my-4">
            <span>{otpResponse?.message}</span>
            <button onClick={onBack}>
              <FaEdit className="w-6 h-6 text-primary-900" />
            </button>
          </p>
        )}
      </div>
      <div className="mb-4 text-sm text-secondary-500">
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد تأیید</p>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد تأیید</button>
        )}
      </div>
      <form onSubmit={handleCheckOtp} className="space-y-10">
        <p className="font-bold text-secondary-800">کد تأیید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
          }}
        />
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تأیید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;
