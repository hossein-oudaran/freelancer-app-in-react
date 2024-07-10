import { HiArrowCircleRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="flex justify-center mt-14 ">
      <div>
        <h1 className="text-xl font-bold text-secondary-700 mb-8">
          صفحه مورد نظر یافت نشد
        </h1>
        <button onClick={moveBack} className="flex jc items-center gap-x-2">
          <HiArrowCircleRight className="w-6 h-6 text-primary-900" />
          <span>برگشت</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
