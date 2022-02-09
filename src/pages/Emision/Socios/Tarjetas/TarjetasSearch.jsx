import React from "react";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import { TarjetasSearchArray,dataTarjetas, columnsTarjetas } from "./mock";

    const handleCallback = (values) =>{
        console.log(values);
    }

export default function TarjetasSearch() {
  return <div>

    <SearchForm array={TarjetasSearchArray} title="Búsqueda de tarjetas" parentCallback={handleCallback} span={4} />
    <Table columns={columnsTarjetas} data={dataTarjetas} expandible={false} editable={true} />
  </div>;
}
