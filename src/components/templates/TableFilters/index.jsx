import React from "react";
import DateRangeFilter from "../../organisms/DateRangeFilter";
import Filter from "../../organisms/Filter";
import Table from "../../organisms/Table";
import DeploymentConfirmation from "../../molecules/DeploymentConfirmation";
import {
  columnsNovelty,
  dataNovelty,
} from "../../../Mocks/GestionAprobaciones";

const TableFilters = ({ columns, data, expandible, selectable, filtros }) => {
  const [message, setMessage] = React.useState("holis");
  const [filterText, setFilterText] = React.useState("");
  const filteredItems = data;
//   const filteredItems = data.filter(
//     (item) =>
//       item.user && item.user.toLowerCase().includes(filterText.toLowerCase())
//     // ||  item.branch && item.branch.toLowerCase().includes(filterText.toLowerCase())
//   );

  return (
    <>
      <div style={{ justifyContent: "right" }}>
        <DateRangeFilter></DateRangeFilter>
        <Filter filtros={filtros} message={message}></Filter>
      </div>

      <Table
        columns={columns}
        data={filteredItems}
        expandible={expandible}
        component={DeploymentConfirmation}
        selectable={selectable}
      />
    </>
  );
};

export default TableFilters;
