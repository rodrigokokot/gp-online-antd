import React, { useState } from "react";
import Searchform from "../../../components/organisms/SearchForm";
import Table from "../../../components/organisms/Table";
import {
  ColumnsMovimientosIPM,
  dataMovimientosIPM,
  MovimientosIPMSearch,
} from "./mock";
import { useTranslation } from "react-i18next";

function MovimientosIPM() {
  const { t} = useTranslation();
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataMovimientosIPM);
  }

  return (
    <>
      <Searchform
        array={MovimientosIPMSearch()}
        title={t("ipm.search.searchtitle")}
        parentCallback={handleCallback}
        span={6}
      ></Searchform>
      <br></br>
      <Table data={data} columns={ColumnsMovimientosIPM()}></Table>
    </>
  );
}

export default MovimientosIPM;
