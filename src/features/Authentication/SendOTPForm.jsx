import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({ onSubmit, isSendingOtp, register }) {
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
      </form>
    </div>
  );
}

export default SendOTPForm;
