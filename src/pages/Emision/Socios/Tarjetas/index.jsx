import React, { useState } from "react";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import { TarjetasSearchArray, dataTarjetas, columnsTarjetas } from "./mock";

const TarjetasSearch = () => {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataTarjetas);
  }
  return (
    <>
      <SearchForm
        array={TarjetasSearchArray}
        title="Búsqueda de tarjetas"
        parentCallback={handleCallback}
        span={6}
      />
      <br />
      <Table columns={columnsTarjetas} data={data} />
    </>
  );
};
export default TarjetasSearch;
