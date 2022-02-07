import React from 'react';
import SearchForm from '../../../../components/organisms/SearchForm'
import Table from '../../../../components/organisms/Table'; 
import {dataCPMovimiento,columnsCPMovimiento,CPMovimientoSearch} from './mock'
function CPMovimiento() {
    return ( <>
        <SearchForm title="Búsqueda de tipos de Cargos a Socios por producto y movimiento" array={CPMovimientoSearch} span={4}></SearchForm>
        <br />
        <Table data={dataCPMovimiento} columns={columnsCPMovimiento}></Table>
    </>
    )
}

export default CPMovimiento;