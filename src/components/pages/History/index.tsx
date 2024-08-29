import { DataTable } from "./Table/dataTable";
import { columns } from "./Table/columns";
import { payments } from "./Table/data";

const History = () => {
  return (
    <div>
      <DataTable columns={columns} data={payments} />
    </div>
  );
};

export default History;
