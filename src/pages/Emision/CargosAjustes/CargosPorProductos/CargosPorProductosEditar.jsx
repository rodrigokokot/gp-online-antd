import { Card, Col, Form, Row, Input, Table, Typography } from "antd";
import React from "react";
import FloatInput from "../../../../components/molecules/FloatInput";

import Edit from "../../../../components/organisms/Edit";
const { TextArea } = Input;

const CargosPorProductosEditar = () => {
  const FormularioEditar = () => {
    return (
      <>
        <Card style={{ borderRadius: "16px", marginBottom: "12px" }}>
          <Typography.Title level={4} style={{ color: "#ab218e" }}>
            Datos Principales
          </Typography.Title>
          <Col span={8}>
            <Form.Item
              name="codigo"
              rules={[{ required: true, message: "Ingrese código" }]}
            >
              <FloatInput
                outline
                label="Codigo"
                placeholder="Código"
              ></FloatInput>
            </Form.Item>
            <Form.Item
              name="descripcion"
              rules={[{ required: true, message: "Ingrese descripción" }]}
            >
              <FloatInput
                outline
                label="Descripcion"
                placeholder="Descripcion"
              />
            </Form.Item>
            <Form.Item
              name="Todos"
              rules={[{ required: true, message: "Ingrese todos" }]}
            >
              <FloatInput
                outline
                label="Todos"
                placeholder="Todos"
              />
            </Form.Item>
          </Col>
        </Card>
      </>
    );
  };

  return (
    <Edit
      component={FormularioEditar}
      textBtnSave="Editar producto"
      textModalConfirm="¿Estas seguro de realizar cambios en el producto?"
      textBtnModalConfirm="Si, guardar"
    />
  );
};

export default CargosPorProductosEditar;
