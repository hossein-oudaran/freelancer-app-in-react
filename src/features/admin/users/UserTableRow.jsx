import { useState } from "react";
import { toPersianNumbers } from "../../../utils/toPersianNumbers";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import ChangeUserStatus from "./ChangeUserStatus";

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

function UserTableRow({ user, index }) {
  const [open, setOpen] = useState();
  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{toPersianNumbers(user.phoneNumber)}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge ${statusStyle[user.status].className}`}>
          {statusStyle[user.status].label}
        </span>{" "}
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="تغییر وضعیت درخواست"
        >
          <ChangeUserStatus
            userId={user._id}
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

export default UserTableRow;
