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
  const [filterText, setFilterText] = React.useState("");
  const [filteredData, setfilteredData] = React.useState(data);

  function handleCallback(childData, clear) {
    console.log("arreglo posta:", childData);
    // console.log(data);
    if (!clear) {
      setfilteredData(
        filteredData.filter(
          (item) =>
            item.product &&
            item.product
              .toLowerCase()
              .includes(childData[4][0][0].toLowerCase())
          // ||  item.branch && item.branch.toLowerCase().includes(filterText.toLowerCase())
        )
      );
      console.log(filteredData);
      // setChildData(childData);
    }else{
        setfilteredData(data);
    }
  }

  return (
    <>
      <div style={{ justifyContent: "right" }}>
        <DateRangeFilter></DateRangeFilter>
        <Filter filtros={filtros} parentCallback={handleCallback}></Filter>
      </div>

      <Table
        columns={columns}
        data={filteredData}
        expandible={expandible}
        component={DeploymentConfirmation}
        selectable={selectable}
      />
    </>
  );
};

export default TableFilters;
