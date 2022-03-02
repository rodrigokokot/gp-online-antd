import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import {
  CambioDeEstadoSearch,
  ColumnsCambioDeEstado,
  dataCambioDeEstado,
} from "./mock";

const CambioDeEstado = () => {
  const { t} = useTranslation();
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataCambioDeEstado);
  }
  return (
    <>
      <SearchForm
        array={CambioDeEstadoSearch()}
        title={t("estado.search.searchtitle")}
        parentCallback={handleCallback}
        span={6}
      />
      <br />
      <Table data={data} columns={ColumnsCambioDeEstado()} />
    </>
  );
};

export default CambioDeEstado;
