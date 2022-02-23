import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import { TarjetasSearchArray, dataTarjetas, ColumnsTarjetas } from "./mock";

const TarjetasSearch = () => {
  const { t} = useTranslation();
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataTarjetas);
  }
  return (
    <>
      <SearchForm
        array={TarjetasSearchArray()}
        title={t("tarjeta.search.searchtitle")}
        parentCallback={handleCallback}
        span={6}
      />
      <br />
      <Table columns={ColumnsTarjetas()} data={data} />
    </>
  );
};
export default TarjetasSearch;
