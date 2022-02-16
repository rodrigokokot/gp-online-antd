import React, { useState } from "react";
import { Card, Row, Col } from "antd";
import Table from "../../../../components/organisms/Table";
import {
  columnsConsultaLiquidaciones,
  ConsultaLiquidacionesSearchArray,
  dataConsultaLiquidaciones,
} from "./mock";
import SearchForm from "../../../../components/organisms/SearchForm";

export default function ConsultaLiquidacionesSearch() {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataConsultaLiquidaciones);
  }

  const SearchCards = () => {
    return (
      <>
        <Card>
          <h1 className="purple-title" style={{ marginBottom: "24px" }}>
            Pesos
          </h1>
          <Row gutter={[36, 36]}>
            <Col span={6}>
              <b className="grey-text">Saldo anterior</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">Total Débitos</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">Total Créditos</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">Saldo Actual</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">Pago min. Ant.</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">Pago Min. Impago</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">Pago Min. Actual</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">Saldo plan flexible</b>
              <b className="bold-text">0.00</b>
            </Col>
          </Row>
        </Card>

        <Card>
          <h1 className="purple-title" style={{ marginBottom: "24px" }}>
            Dolares
          </h1>

          <Row gutter={[36, 36]}>
            <Col span={6}>
              <b className="grey-text">Saldo anterior</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">Total Débitos</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">Total Créditos</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">Saldo Actual</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">Pago min. Ant.</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">Pago Min. Impago</b>
              <b className="bold-text">0.00</b>
            </Col>

            <Col span={6}>
              <b className="grey-text">Pago Min. Actual</b>
              <b className="bold-text">0.00</b>
            </Col>
          </Row>
        </Card>

        <Card style={{ marginBottom: "4px" }}>
          <h1 className="purple-title" style={{ marginBottom: "24px" }}>
            Período no liquidado
          </h1>
          <Col span={8}>
            <Row gutter={[36, 36]}>
              <Col span={12}>
                <b className="grey-text">Fecha de Liquidación</b>
              </Col>

              <Col span={12}>
                <b className="grey-text">Fecha de Vencimiento</b>
              </Col>

              <Col span={12}>
                <b className="grey-text">Puntos del periodo</b>
              </Col>

              <Col span={12}>
                <b className="grey-text">Puntos acumulados</b>
              </Col>
            </Row>
          </Col>
        </Card>
      </>
    );
  };

  return (
    <>
      <SearchCards />
      <SearchForm
        array={ConsultaLiquidacionesSearchArray}
        title="Consulta de movimientos historicos"
        parentCallback={handleCallback}
        span={6}
      />
      <br />
      <Table
        columns={columnsConsultaLiquidaciones}
        data={data}
        expandible={false}
        editable={false}
      />
    </>
  );
}
