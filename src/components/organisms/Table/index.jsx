import React from "react";
import DataTable from "react-data-table-component";
import "./index.less";
import PropTypes from 'prop-types'
import ResultSearch from "../../molecules/ResultSearch";
import { useTranslation } from "react-i18next";

const Table = (
  {
  className,
  component: Component,
  columns,
  data,
  parentCallback,
  ...props
}) => {
  const { t } = useTranslation();
  const paginationComponentOptions = {
    rowsPerPageText: (t("table.rowspage")),
    rangeSeparatorText: (t("table.rowseparator")),
    selectAllRowsItem: true,
    selectAllRowsItemText: (t("table.selectall")),
  };

  const handleChange = (state) => {
    parentCallback(state);
    // console.log("Selected Rows: ", state.selectedRows);
  };

  return (
      data.length === 0? <ResultSearch result={false} />
      :
      <DataTable
        title={props.title}
        columns={columns}
        data={data}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        highlightOnHover
        selectableRows={props.selectable}
        onSelectedRowsChange={handleChange}
        expandableRows={props.expandible}
        expandableRowsComponent={() => <Component />}
        expandableRowsHideExpander
        expandOnRowClicked
        actions={props.actions}     //export
      />

  );
};

export default Table;

Table.prototype ={
  className: PropTypes.string,
  Component: PropTypes.func,
  columns: PropTypes.array,
  data: PropTypes.array,
  parentCallback: PropTypes.func,
}

Table.defaultProps = {
  className: '',
  columns: [],
  data: [],
}
