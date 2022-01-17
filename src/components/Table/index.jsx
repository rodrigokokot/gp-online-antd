import React from 'react'
import DataTable from 'react-data-table-component';
import './index.less';


const Table = ({
    className,
    component: Component,
    columns,
    data,
    ...props
}) => {

    const handleChange = (state) => {
       console.log('Selected Rows: ', state.selectedRows);
    };


    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            onSelectedRowsChange={handleChange}
            expandableRows
            expandableRowsComponent={ <Component /> }
            expandableRowsHideExpander
            expandOnRowClicked
        />
    )
}

export default Table
