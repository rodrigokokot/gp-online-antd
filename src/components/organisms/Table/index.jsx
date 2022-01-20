import { Button, Input } from "antd";
import React from "react";
import DataTable from "react-data-table-component";
import "./index.less";

const Table = ({
  className,
  component: Component,
  columns,
  data,
  ...props
}) => {
  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  const [filterText, setFilterText] = React.useState("");
  const filteredItems = data.filter(
    (item) => 
        (
            item.user && item.user.toLowerCase().includes(filterText.toLowerCase()) || 
            item.branch && item.branch.toLowerCase().includes(filterText.toLowerCase())
        )   
  );

  const handleChange = (state) => {
    console.log("Selected Rows: ", state.selectedRows);
  };

  const FilterInput = () => {
    return (
      <>
        <Input
          id="search"
          type="text"
          placeholder="Filter By Name"
          aria-label="Search Input"
          value={filterText}
        />
        <Button type="button">X</Button>
      </>
    );
  };

  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      pagination
      paginationComponentOptions={paginationComponentOptions}
      highlightOnHover
      selectableRows={props.selectable}
      onSelectedRowsChange={handleChange}
      expandableRows={props.expandible}
      expandableRowsComponent={() => <Component />}
      expandableRowsHideExpander
      expandOnRowClicked
      //
      subHeader
      subHeaderComponent={FilterInput}
      persistTableHead
    />
  );
};

export default Table;
