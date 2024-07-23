import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authServices";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";


function CompleteProfileForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // const { user } = useUser();

  // useEffect(() => {
  //   if (user) navigate("/", { replace: true });
  // }, [user, navigate]);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تأیید است", {
          icon: "🔎",
        });
        return;
      }
      if (user.role === "FREELANCER") return navigate("/freelancer");
      if (user.role === "OWNER") return navigate("/owner");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            validationSchema={{
              required: "وارد کردن نام و نام خانوادگی ضروری است ",
            }}
            errors={errors}
          />
          <TextField
            label="ایمیل"
            name="email"
            register={register}
            validationSchema={{
              required: "وارد کردن ایمیل ضروری است ",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}
            errors={errors}
          />
          <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name: "role",
              validationSchema: { required: "انتخاب نقش ضروری است" },
              options: [
                {
                  value: "OWNER",
                  label: "کارفرما",
                },
                { value: "FREELANCER", label: "فریلنسر" },
              ],
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
          </div>{" "}
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
