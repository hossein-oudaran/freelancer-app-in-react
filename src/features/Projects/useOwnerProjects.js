import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectApi } from "../../services/projectService";

export default function useOwnerProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["projcets"],
    queryFn: getOwnerProjectApi,
  });

  const { projects } = data || {};
  return { projects, isLoading };
}
