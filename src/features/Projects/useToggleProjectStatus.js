import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProjectStatusApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useToggleProjectStatus() {
  const queyClient = useQueryClient();
  const { isPending: isUpdating, mutate: toggleProjectStatus } = useMutation({
    mutationFn: toggleProjectStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queyClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { isUpdating, toggleProjectStatus };
}
