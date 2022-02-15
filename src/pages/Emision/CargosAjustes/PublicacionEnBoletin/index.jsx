import React, { useState } from "react";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import { columnsPBoletin, dataPBoletin, PBoletinSearch } from "./mock";

const PBoletin = () => {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataPBoletin);
  }
  return (
    <>
      <SearchForm
        title="Busqueda de consumos"
        array={PBoletinSearch}
        span={6}
        parentCallback={handleCallback}
      ></SearchForm>
      <br />
      <Table data={data} columns={columnsPBoletin}></Table>
    </>
  );
};

export default PBoletin;
