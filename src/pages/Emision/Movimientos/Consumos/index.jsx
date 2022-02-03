import React from 'react';
import SearchForm from '../../../../components/organisms/SearchForm'
import Table from '../../../../components/organisms/Table';
import { columnsEmisionConsumos, dataEmisionConsumos, EmisionConsumosSearch } from '../../../../Mocks/EmisionConsumos';



const Consumos = () => {
  return (
        <>
            <SearchForm title="Busqueda de consumos" array={EmisionConsumosSearch}></SearchForm>
            <br />
            <Table data={dataEmisionConsumos} columns={columnsEmisionConsumos}></Table>
        </>
    );
};

export default Consumos;
