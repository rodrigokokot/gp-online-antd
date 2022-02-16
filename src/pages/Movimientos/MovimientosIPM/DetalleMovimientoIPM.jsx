import React from "react";
import { useParams } from "react-router-dom";
import Table from "../../../components/organisms/Table";
import { ColumnsDetalleMovimientosIPM, dataDetalleMovimientosIPM } from "./mock";
import {Card, Switch} from 'antd';
import { useTranslation } from "react-i18next";

function DetalleMovimientoIPM() {
  const { t} = useTranslation();
  const { id } = useParams();
  console.log(id);

  function handleChange(value){
    console.log(value)
  }

  return (
    <>
      <h2>{t("ipm.view.title1")}  {id}</h2>
      <h4>{t("ipm.view.subtitle1")} "variable date"</h4>
      <h4>{t("ipm.view.subtitle2")} "variable tipo archivo"</h4>
      <Card size='small'>
        <h4>{t("ipm.view.card1.subtitle1")}</h4>
        <Switch checkedChildren={t("ipm.view.card1.enabled")} unCheckedChildren={t("ipm.view.card1.disabled")} onChange={handleChange} ></Switch>
      </Card>
      <br></br>
      <Table data={dataDetalleMovimientosIPM} columns={ColumnsDetalleMovimientosIPM()}></Table>
    </>
  );
}

export default DetalleMovimientoIPM;
