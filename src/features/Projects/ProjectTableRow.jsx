import Table from "../../ui/Table";
import { truncateText } from "../../utils/truncateText";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";

function ProjectTableRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject } = useRemoveProject();

  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              onClose={() => setIsEditOpen(false)}
              title={`ویرایش ${project.title}`}
              open={isEditOpen}
            >
              <CreateProjectForm
                onClose={() => setIsEditOpen(false)}
                projectToEdit={project}
              />
            </Modal>
          </>

          <button onClick={() => setIsDeleteOpen(true)}>
            <HiOutlineTrash className="w-5 h-5 text-error" />
          </button>
          <Modal
            onClose={() => setIsDeleteOpen(false)}
            title={`حذف ${project.title}`}
            open={isDeleteOpen}
          >
            <ConfirmDelete
              resourceName={project.title}
              onClose={() => setIsDeleteOpen(false)}
              disabled={false}
              onConfirm={() =>
                removeProject(project._id, {
                  onSuccess: () => setIsDeleteOpen(false),
                })
              }
            />
          </Modal>
        </div>
      </td>
      <td>
        <Link
          className="flex justify-center"
          to={`/owner/project/${project._id}`}
        >
          <HiEye className="h-5 w-5 text-primary-800" />
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectTableRow;
