import { DataTable } from "./Table/dataTable";
import { columns } from "./Table/columns";
import { payments } from "./Table/data";
// import TableData from "@/assets/images/History/TableData.png"

const History = () => {
  return (
    <div>
      <DataTable columns={columns} data={payments} />

      {/* <img src={TableData} alt="" /> */}
    </div>
  );
};

export default History;
