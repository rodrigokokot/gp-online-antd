import React, { useState } from "react";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import {
  cambioDeEstadoSearch,
  columnsCambioDeEstado,
  dataCambioDeEstado,
} from "./mock";

const CambioDeEstado = () => {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataCambioDeEstado);
  }
  return (
    <>
      <SearchForm
        array={cambioDeEstadoSearch}
        title="Búsqueda de Productos"
        parentCallback={handleCallback}
        span={6}
      />
      <br />
      <Table data={data} columns={columnsCambioDeEstado} />
    </>
  );
};

export default CambioDeEstado;
