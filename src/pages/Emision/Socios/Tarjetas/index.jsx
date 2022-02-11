import React from "react";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import { TarjetasSearchArray, dataTarjetas, columnsTarjetas } from "./mock";

export default function TarjetasSearch() {
  const handleCallback = (values) => {
   
  };
  return (
    <>
      <SearchForm
        array={TarjetasSearchArray}
        title="Búsqueda de tarjetas"
        parentCallback={handleCallback}
        span={4}
      />
      <br />
      <Table
        columns={columnsTarjetas}
        data={dataTarjetas}
        expandible={false}
        editable={true}
      />
    </>
  );
}
