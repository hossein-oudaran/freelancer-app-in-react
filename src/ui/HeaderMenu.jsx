import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/Authentication/Logout";
import useUser from "../features/Authentication/useUser";

function HeaderMenu() {
  const navigate = useNavigate();
  const { user } = useUser();
  const handleProfileClick = () => {
    if (user.role === "FREELANCER") return navigate("/freelancer/dashboard");
    if (user.role === "OWNER") return navigate("/owner/dashboard");
    if (user.role === "ADMIN") return navigate("/admin/dashboard");
  };
  return (
    <div>
      <ul className="flex gap-x-4 items-center">
        <li className="flex">
          <button onClick={handleProfileClick}>
            <HiOutlineUser className="w-5 h-5 text-primary-900" />
          </button>
        </li>
        <li className="flex">
          <DarkModeToggle />
        </li>
        <li className="flex">
          <Logout />
        </li>
      </ul>
    </div>
  );
}

export default HeaderMenu;
