import { TbLogout } from "react-icons/tb";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

function Logout() {
  const { isPending, logout } = useLogout();
  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logout}>
      <TbLogout className="w-5 h-5 text-secondary-500 hover:text-error" />
    </button>
  );
}

export default Logout;
