import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "./index.less";
import PropTypes from 'prop-types'
import ResultSearch from "../../molecules/ResultSearch";
import { useTranslation } from "react-i18next";
import SkeletonTable from "./Skeleton";

const Table = (
  {
  className,
  component: Component,
  columns,
  parentCallback,
  ...props
}) => {
  const { t } = useTranslation();
  const { initial, data, loading } = props.data
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

  // let secondComponent = <ResultSearch result={false} />
  let secondComponent = initial && !loading? <ResultSearch result={true} /> : loading || data?.length === 0? <SkeletonTable style={{ marginTop: '20px' }} /> : <ResultSearch result={false} />


  // const [secondComponent, setSecondComponent] = useState(<ResultSearch result={false} />)
  // setSecondComponent(!initial && !loading? <ResultSearch result={false} /> : <SkeletonTable /> )
  // setSecondComponent( <SkeletonTable /> )
// console.log(initial, data, loading);
  return (
    !loading || data?.length === 0? secondComponent
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
        // progressPending={true}
			  // progressComponent={<SkeletonTable />}
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
