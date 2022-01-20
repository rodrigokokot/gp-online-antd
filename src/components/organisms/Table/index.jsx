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

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const handleChange = (state) => {
       console.log('Selected Rows: ', state.selectedRows);
    };

    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            highlightOnHover
            selectableRows={props.selectable}
            onSelectedRowsChange={handleChange}
<<<<<<< HEAD
            expandableRows
            expandableRowsComponent={ () => <PruebaComponent /> }
            // expandableRowsHideExpander
=======
            expandableRows={props.expandible}
            expandableRowsComponent={ () => <Component /> }
            expandableRowsHideExpander
>>>>>>> c6fd865d4af042585dd3adf2b75dd018caaddaf5
            expandOnRowClicked
        />
    )
}

export default Table
