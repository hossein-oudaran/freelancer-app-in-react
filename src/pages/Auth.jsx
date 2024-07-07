import ChechOTPForm from "../features/Authentication/ChechOTPForm";
import SendOTPForm from "../features/Authentication/SendOTPForm";

function Auth() {
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <SendOTPForm />
        <ChechOTPForm />
      </div>
    </div>
  );
}

export default Auth;
