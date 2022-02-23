import { Button } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import Export from "../../../../components/organisms/Export";
import Table from "../../../../components/organisms/Table";
import { ColumnsTarjetasHistorial, dataTarjetasHistorial } from "./mock";

export default function TarjetasHistory() {
  const { t} = useTranslation();
  const history = useHistory();

  return (
    <>
      <Export />
      <Table
        data={dataTarjetasHistorial}
        columns={ColumnsTarjetasHistorial()}
        editable={false}
        expandible={false}
      />

      <Button
        onClick={history.goBack}
        style={{ marginTop: "32px", border: "2px solid #0DD8B0" }}
      >
        {t("tarjeta.history.button")}
      </Button>
    </>
  );
}
