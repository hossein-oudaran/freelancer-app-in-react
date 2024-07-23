import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "../../services/authServices";

export default function useUsers() {
  const { data, isLoading } = useQuery({
    queryFn: getUserApi,
    queryKey: ["users"],
  });
  const { users } = data || {};
  return { users, isLoading };
}
