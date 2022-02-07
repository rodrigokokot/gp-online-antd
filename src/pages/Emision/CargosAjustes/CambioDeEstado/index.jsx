import React from 'react';
import SearchForm from '../../../../components/organisms/SearchForm';
import Table from '../../../../components/organisms/Table';
import { cambioDeEstadoSearch, columnsCambioDeEstado, dataCambioDeEstado } from './mock';

const CambioDeEstado = () => {
  return (
      <>
        <SearchForm array={cambioDeEstadoSearch} title="Búsqueda de Productos"/>
        <br />
        <Table data={dataCambioDeEstado} columns={columnsCambioDeEstado}/>
      </>
  );
};

export default CambioDeEstado;
