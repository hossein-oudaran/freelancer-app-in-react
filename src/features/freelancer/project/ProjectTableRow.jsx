import Table from "../../../ui/Table";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../utils/toPersianNumbers";
import { MdAssignmentAdd } from "react-icons/md";
import { truncateText } from "../../../utils/truncateText";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectTableRow({ project, index }) {
  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[project.status].className}`}>
          {projectStatus[project.status].label}
        </span>{" "}
      </td>
      <td>
        <button>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectTableRow;
