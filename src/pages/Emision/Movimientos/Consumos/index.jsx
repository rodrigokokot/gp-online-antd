import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import {
  ColumnsEmisionConsumos,
  dataEmisionConsumos,
  EmisionConsumosSearch,
} from "./mock";

const Consumos = () => {
  const { t} = useTranslation();
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataEmisionConsumos);
  }
  return (
    <>
      <SearchForm
        title={t("consumos.search.searchtitle")}
        array={EmisionConsumosSearch()}
        parentCallback={handleCallback}
        span={6}
      ></SearchForm>
      <br />
      <Table
        data={data}
        columns={ColumnsEmisionConsumos()}
      ></Table>
    </>
  );
};

export default Consumos;
