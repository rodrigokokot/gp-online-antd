import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import Export from "../../../../components/organisms/Export";
import Table from "../../../../components/organisms/Table";
import { columnsTarjetasHistorial, dataTarjetasHistorial } from "./mock";

export default function TarjetasHistory() {
  const history = useHistory();

  return (
    <>
      <Export />
      <Table
        data={dataTarjetasHistorial}
        columns={columnsTarjetasHistorial}
        editable={false}
        expandible={false}
      />

      <Button
        onClick={history.goBack}
        style={{ marginTop: "32px", border: "2px solid #0DD8B0" }}
      >
        Volver
      </Button>
    </>
  );
}
