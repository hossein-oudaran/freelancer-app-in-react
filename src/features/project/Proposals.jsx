import Table from "../../ui/Table";
import ProposalsTableRow from "./ProposalsTableRow";
function Proposals({ proposals }) {
  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>فریلنسر</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {proposals.map((proposals, index) => (
            <ProposalsTableRow
              key={proposals._id}
              proposals={proposals}
              index={index}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Proposals;
