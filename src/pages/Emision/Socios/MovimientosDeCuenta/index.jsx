import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import {
  ColumnsMovimientoDeCuenta,
  dataMovimientoDeCuenta,
  MovimientoDeCuentaSearch,
} from "./mock";

const MovimientosDeCuenta = () => {
  const { t} = useTranslation();
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataMovimientoDeCuenta);
  }
  return (
    <>
      <SearchForm
        title={t("movimientocuenta.search.searchtitle")}
        array={MovimientoDeCuentaSearch()}
        parentCallback={handleCallback}
        span={6}
      />
      <br></br>
      <Table
        data={data}
        columns={ColumnsMovimientoDeCuenta()}
      ></Table>
    </>
  );
};

export default MovimientosDeCuenta;
