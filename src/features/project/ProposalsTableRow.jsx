import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import { truncateText } from "../../utils/truncateText";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import ChangeProposalStatus from "./ChangeProposalStatus";

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

function ProposalsTableRow({ proposals, index }) {
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>{toPersianNumbers(proposals.user.name)}</td>
      <td>
        <p>{truncateText(proposals.description, 50)}</p>
      </td>
      <td>{toPersianNumbers(proposals.duration)} روز</td>
      <td>{toPersianNumbersWithComma(proposals.price)}</td>
      <td className={`badge mt-4 ${statusStyle[proposals.status].className}`}>
        {statusStyle[proposals.status].label}
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="تغییر وضعیت درخواست"
        >
          <ChangeProposalStatus
            proposalId={proposals._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)} className="btn btn--secondary">
          تغییر وضعیت
        </button>
      </td>
    </Table.Row>
  );
}

export default ProposalsTableRow;
