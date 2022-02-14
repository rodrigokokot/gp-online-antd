import React, { useState } from "react";
import Export from "../../../../components/organisms/Export";
import Table from "../../../../components/organisms/Table";
import SearchForm from "../../../../components/organisms/SearchForm";
import { PlasticosSearchArray, dataPlasticos, columnsPlasticos } from "./mock";

export default function Plasticos() {
  const [exportflag, setExportflag] = useState(true);

  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataPlasticos);
    setExportflag(false)
  }

  return (
    <>
      <Export dataExport={dataPlasticos} disabled={exportflag} />
      <SearchForm
        title="Búsqueda de plásticos"
        span={6}
        array={PlasticosSearchArray}
        parentCallback={handleCallback}
      />
      <Table
        columns={columnsPlasticos}
        data={data}
      />
    </>
  );
}
