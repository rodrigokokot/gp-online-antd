import React, { useState } from "react";
import SearchForm from "../../../../components/organisms/SearchForm/index";
import Table from "../../../../components/organisms/Table/index";
import {
  dataAvisosViajes,
  columnsAvisosViajes,
  AvisosViajesSearch,
} from "./mock";

const AvisosViajes = () => {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataAvisosViajes);
  }

  return (
    <>
      <SearchForm
        span={6}
        array={AvisosViajesSearch}
        parentCallback={handleCallback}
        title="Busqueda de avisos de viajes"
      />
      <br></br>
      <Table data={data} columns={columnsAvisosViajes} />
    </>
  );
};
export default AvisosViajes;
