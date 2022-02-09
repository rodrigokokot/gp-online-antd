import { Card, DatePicker, Form, Row, Col, Space } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import FloatInput from "../../../../components/molecules/FloatInput";
import Edit from "../../../../components/organisms/Edit";

export default function CargosPorProdutosAfinidadEdit() {
  const FormularioEdit = () => {
    return (
      <>
        <Card>
          <Title level={3}  style={{ color: '#ab218e' }}>Datos Principales</Title>
          <br></br>
          <Row gutter={[36, 24]}>
            <Col span={6}>

                <Space direction="vertical" size={16}>
              <h4>Cóncepto por Cargo </h4>

              <h4>Cargo por renovación </h4>

                </Space>

            </Col>

            <Col span={5}>

              <h4>Precio</h4>
              <Form.Item name="precio" rules={[{ required: true, message: "Ingrese precio" }]}>
                <FloatInput outline type='number'/>
              </Form.Item>
            </Col>

            <Col span={5}>
              <h4>Porcentaje Cargo</h4>
              <Form.Item name="porcentaje">
                <FloatInput outline type='number'/>
              </Form.Item>
            </Col>

            <Col span={6}>
              <h4>Fecha Desde</h4>
              <Form.Item name="fecha" rules={[{ required: true, message: "Ingrese fecha desde" }]}>
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
      <Edit 
        component={FormularioEdit}
        textBtnSave="Guardar cambios"
        textModalConfirm="¿Realizar cambios en el cargo?"
        textBtnModalConfirm="Si, guardar" />
    </div>
  );
}
