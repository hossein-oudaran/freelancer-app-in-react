import { useState } from "react";
import TextField from "../../ui/TextField";

function SendOTPForm() {
  const { phoneNumber, setPhoneNumber } = useState("");
  return (
    <div>
      <form className="space-y-8">
        <TextField
          name="phoneNumber"
          value={phoneNumber}
          label="شماره موبایل"
          onChnage={(e) => setPhoneNumber(e.target.value)}
        />
        <button className="btn btn--primary w-full">ارسال کد تأیید</button>
      </form>
    </div>
  );
}

export default SendOTPForm;
