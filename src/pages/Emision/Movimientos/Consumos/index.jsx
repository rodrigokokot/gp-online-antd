import React from 'react';
import SearchForm from '../../../../components/organisms/SearchForm'
import Table from '../../../../components/organisms/Table';
import { columnsEmisionConsumos, dataEmisionConsumos, EmisionConsumosSearch } from './mock';



const Consumos = () => {
  return (
        <>
            <SearchForm title="Busqueda de consumos" array={EmisionConsumosSearch} span={5}></SearchForm>
            <br />
            <Table data={dataEmisionConsumos} columns={columnsEmisionConsumos}></Table>
        </>
    );
};

export default Consumos;
