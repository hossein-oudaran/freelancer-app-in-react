import ProjectHeader from "../features/project/ProjectHeader";
import Proposals from "../features/project/Proposals";
import useProject from "../features/project/useProject";
import Loading from "../ui/Loading";

function Project() {
  const { isLoading, project } = useProject();
  if (isLoading) return <Loading />;
  return (
    <div>
      <ProjectHeader project={project} />
      <Proposals proposals={project.proposals} />
    </div>
  );
}

export default Project;
