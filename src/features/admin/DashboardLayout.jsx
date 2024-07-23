import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";
import useUsers from "./useUsers";

function DashboardLayout() {
  const { isLoading: isLoading1, projects } = useProjects();
  const { isLoading: isLoading2, proposals } = useProposals();
  const { isLoading: isLoading3, users } = useUsers();
  if (isLoading1 || isLoading2 || isLoading3) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats
        projects={projects.length}
        proposals={proposals.length}
        users={users.length}
      />
    </div>
  );
}

export default DashboardLayout;
