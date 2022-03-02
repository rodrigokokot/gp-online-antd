import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import { ColumnsPBoletin, dataPBoletin, PBoletinSearch } from "./mock";

const PBoletin = () => {
  const { t} = useTranslation();
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataPBoletin);
  }
  return (
    <>
      <SearchForm
        title={t("boletin.search.searchtitle")}
        array={PBoletinSearch()}
        span={6}
        parentCallback={handleCallback}
      ></SearchForm>
      <br />
      <Table data={data} columns={ColumnsPBoletin()}></Table>
    </>
  );
};

export default PBoletin;
