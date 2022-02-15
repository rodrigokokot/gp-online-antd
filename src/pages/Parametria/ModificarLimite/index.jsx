import React, { useState } from "react";
import SearchForm from "../../../components/organisms/SearchForm";
import Table from "../../../components/organisms/Table";
import { dataLimite, columnsLimite, LimiteSearch } from "./mock";
function ModificarLimite() {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataLimite);
  }
  return (
    <>
      <SearchForm
        title="Búsqueda de tarjeta adicional"
        array={LimiteSearch}
        parentCallback={handleCallback}
        span={5}
      ></SearchForm>
      <br />
      <Table data={data} columns={columnsLimite}></Table>
    </>
  );
}

export default ModificarLimite;
