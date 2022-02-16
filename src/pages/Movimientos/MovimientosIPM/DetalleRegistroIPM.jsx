import React from "react";
import { useParams } from "react-router-dom";
import Table from "../../../components/organisms/Table";
import { ColumnsDetalleRegistroIPM, dataDetalleRegistroIPM } from "./mock";
import Export from "../../../components/organisms/Export";
import { useTranslation } from "react-i18next";

function DetalleMovimientoIPM() {
  const { t} = useTranslation();
  const { registro, id } = useParams();
  // const ref = React.createRef();

  return (
    <>
      <h2>
      {t("ipm.view.details.title1")} {id} - {t("ipm.view.details.title2")}{registro}
      </h2>
      <h4>{t("ipm.view.details.subtitle1")} "variable date"</h4>
      <Export dataExport={dataDetalleRegistroIPM} />

      <Table
        data={dataDetalleRegistroIPM}
        columns={ColumnsDetalleRegistroIPM()}
      ></Table>
    </>
  );
}

export default DetalleMovimientoIPM;
