import { useNavigate } from "react-router-dom";
import UserAvatar from "../features/Authentication/UserAvatar";
import useUser from "../features/Authentication/useUser";
import HeaderMenu from "../ui/HeaderMenu";
function Home() {
  const { user } = useUser();
  const navigate = useNavigate();
  const handleSignin = () => {
    if (!user) navigate("/auth", { replace: true });
    if (user.role === "FREELANCER") return navigate("/freelancer/dashboard");
    if (user.role === "OWNER") return navigate("/owner/dashboard");
    if (user.role === "ADMIN") return navigate("/admin/dashboard");
  };

  const { isLoading } = useUser();
  return (
    <div className="h-screen bg-secondary-0">
      <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
        <div
          className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8
        ${isLoading ? "blur-sm" : ""}
        `}
        >
          <UserAvatar />
          <HeaderMenu />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-center text-2xl md:text-5xl text-secondary-800 my-20">
          اپلیکیشن فریلنسری
        </h1>

        <div>
          <p className="text-center text-secondary-500 text-lg leading-loose">
            با اپلیکیشن ما، بهترین فریلنسرها را پیدا کنید و پروژه‌های خود را به
            سرعت و با کیفیت بالا انجام دهید. از پشتیبانی دائمی لذت ببرید و
            تجربه‌ای بی‌نظیر از همکاری آنلاین داشته باشید. با استفاده از
            ابزارهای پیشرفته و رابط کاربری ساده، می‌توانید به راحتی پروژه‌های
            خود را مدیریت کنید و با فریلنسرهای حرفه‌ای در ارتباط باشید. به
            جامعه‌ای از متخصصان بپیوندید و از امکانات بی‌نظیر ما بهره‌مند شوید
          </p>
          <div className="flex justify-center gap-x-8 w-full mt-10">
            <button onClick={handleSignin} className="btn btn--primary">
              برای ورود کلیک کنید{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
