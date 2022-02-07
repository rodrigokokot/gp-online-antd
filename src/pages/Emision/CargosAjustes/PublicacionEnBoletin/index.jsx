import React from 'react';
import SearchForm from '../../../../components/organisms/SearchForm'
import Table from '../../../../components/organisms/Table';
import { columnsPBoletin, dataPBoletin, PBoletinSearch } from './mock';



const PBoletin = () => {
  return (
        <>
            <SearchForm title="Busqueda de consumos" array={PBoletinSearch} span={4} ></SearchForm>
            <br />
            <Table data={dataPBoletin} columns={columnsPBoletin}></Table>
        </>
    );
};

export default PBoletin;
