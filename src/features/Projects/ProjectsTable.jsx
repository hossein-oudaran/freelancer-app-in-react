import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProjectTableRow from "./ProjectTableRow";
// const projects = [
//   {
//     _id: "669391f434279224991339cb",
//     title: "پروژه ششم",
//     description: " توضیحات تستی پروژه ششم",
//     status: "OPEN",
//     category: {
//       _id: "66922fd6339ab5f9380cdaa9",
//       title: "programming",
//       englishTitle: "programming",
//     },
//     budget: 2000000,
//     tags: ["برنامه نویسی", "فرانت اند"],
//     proposals: [],
//     deadline: "2026-07-13T07:49:58.444Z",
//     owner: {
//       _id: "66922ee3339ab5f9380cda99",
//       name: "user-admin test",
//       avatarUrl: null,
//     },
//     freelancer: null,
//     createdAt: "2024-07-14T08:53:08.995Z",
//     updatedAt: "2024-07-14T08:55:24.413Z",
//     __v: 0,
//   },
// ];
function ProjectsTable() {
  const { isLoading, projects } = useOwnerProjects();
  

  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectTableRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
