import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Searchform from "../../../components/organisms/SearchForm";
import Table from "../../../components/organisms/Table";
import {
  ColumnsMovimientosCTF,
  dataMovimientosCTF,
  MovimientosCTFSearch,
} from "./mock";

function MovimientosCTF() {
  const { t} = useTranslation();
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataMovimientosCTF);
  }
  
  return (
    <>
      <Searchform
        title={t("ctf.search.searchtitle")}
        parentCallback={handleCallback}
        array={MovimientosCTFSearch()}
        span={6}
      />
      <br></br>
      <Table data={data} columns={ColumnsMovimientosCTF()}></Table>
    </>
  );
}

export default MovimientosCTF;
