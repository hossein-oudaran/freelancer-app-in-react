import Table from "../../ui/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import { truncateText } from "../../utils/truncateText";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تأیید",
    className: "badge--secondary",
  },
  {
    label: "تأیید شده",
    className: "badge--success",
  },
];

function ProposalTableRow({ proposal, index }) {
  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>{truncateText(proposal.description, 50)}</td>
      <td>{toPersianNumbers(proposal.duration)} روز</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>
        <span className={`badge ${statusStyle[proposal.status].className}`}>
          {statusStyle[proposal.status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalTableRow;
