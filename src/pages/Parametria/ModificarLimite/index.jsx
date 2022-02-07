import React from 'react';
import SearchForm from '../../../components/organisms/SearchForm'
import Table from '../../../components/organisms/Table'; 
import {dataLimite,columnsLimite,LimiteSearch} from './mock'
function ModificarLimite() {
    return ( <>
        <SearchForm title="Búsqueda de tarjeta adicional" array={LimiteSearch} span={5}></SearchForm>
        <br />
        <Table data={dataLimite} columns={columnsLimite}></Table>
    </>
    )
}

export default ModificarLimite