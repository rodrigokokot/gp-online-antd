import { Card, DatePicker, Form, Row, Col, Space } from "antd";
import React from "react";
import FloatInput from "../../../../components/molecules/FloatInput";
import Edit from "../../../../components/organisms/Edit";

export default function CargosPorProdutosAfinidadEdit() {
  const FormularioEdit = () => {
    return (
      <>
        <Card>
          <h1 className="purple-title" style={{marginBottom:'60px'}}>Datos Principales</h1>

          <Row gutter={[48, 48]}>
            <Col span={4}>

                <Space direction="vertical" size={16}>
              <b>Cóncepto por Cargo </b>

              <b>Cargo por renovación </b>

                </Space>

            </Col>

            <Col span={6}>

              <b>Precio</b>
              <Form.Item name="precio">
                <FloatInput outline />
              </Form.Item>
            </Col>

            <Col span={6}>
              <b>Porcentaje Cargo</b>
              <Form.Item name="porcentaje">
                <FloatInput outline />
              </Form.Item>
            </Col>

            <Col span={6}>
              <b>Fecha Desde</b>
              <Form.Item name="fecha">
                <DatePicker placeholder="Elija Fecha" />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </>
    );
  };

  return (
    <div>
      {" "}
      <Edit component={FormularioEdit} />
    </div>
  );
}
