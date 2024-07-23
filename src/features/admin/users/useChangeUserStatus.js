import { useMutation } from "@tanstack/react-query";
import { getUserStatusApi } from "../../../services/authServices";
import toast from "react-hot-toast";

export function useChangeUserStatus() {
  const { mutate: changeUserStatus, isPending: isUpdating } = useMutation({
    mutationFn: getUserStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { changeUserStatus, isUpdating };
}
