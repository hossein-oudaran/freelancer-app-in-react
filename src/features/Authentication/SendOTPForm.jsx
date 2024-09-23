import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { HiArrowCircleRight } from "react-icons/hi";

function SendOTPForm({ onSubmit, isSendingOtp, register }) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <TextField
          name="phoneNumber"
          register={register}
          label="شماره موبایل"
        />
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تأیید
            </button>
          )}
        </div>
        <button onClick={handleBack}>
        <HiArrowCircleRight className="w-6 h-6 text-secondary-500 mb-3" />
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
