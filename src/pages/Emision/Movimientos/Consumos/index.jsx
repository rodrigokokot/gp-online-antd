import React, { useState } from "react";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import {
  columnsEmisionConsumos,
  dataEmisionConsumos,
  EmisionConsumosSearch,
} from "./mock";

const Consumos = () => {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataEmisionConsumos);
  }
  return (
    <>
      <SearchForm
        title="Busqueda de consumos"
        array={EmisionConsumosSearch}
        parentCallback={handleCallback}
        span={6}
      ></SearchForm>
      <br />
      <Table
        data={data}
        columns={columnsEmisionConsumos}
      ></Table>
    </>
  );
};

export default Consumos;
