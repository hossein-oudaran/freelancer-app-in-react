import Table from "../../ui/Table";
import ProposalTableRow from "./ProposalTableRow";
import useProposals from "./useProposals";

function ProposalTable() {
  const { isLoading, proposals } = useProposals();
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
   
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalTableRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable;
