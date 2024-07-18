import Table from "../../ui/Table";
import { truncateText } from "../../utils/truncateText";

function ProposalsTableRow({ proposals, index }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposals.user.name}</td>
      <td>
        <p>{truncateText(proposals.description, 50)}</p>
      </td>
      <td>{proposals.duration} روز</td>
      <td>{proposals.price}</td>
      <td>{proposals.status}</td>
      <td>++</td>
    </Table.Row>
  );
}

export default ProposalsTableRow;
