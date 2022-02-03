import React, { useState } from "react";
import { Radio, Form, Typography, Card, Row, Col } from "antd";
import Edit from "../../../components/organisms/Edit/index";
import FloatInput from "../../../components/molecules/FloatInput";
const { Title } = Typography;
const TipoDeCargoCrear = () => {
  const [value1, setValue1] = useState("");
  const onChange1 = (e) => {
    setValue1(e.target.value);
  };

  const [value2, setValue2] = useState("");
  const onChange2 = (e) => {
    setValue2(e.target.value);
  };

  const [value3, setValue3] = useState("");
  const onChange3 = (e) => {
    setValue3(e.target.value);
  };

  const FormularioUsuario = () => {
    return (
      <>
        <Card>
          <Title level={2}>Datos Principales</Title>
          <Col span={6}>
            <Form.Item name="codigo">
              <FloatInput
                type="text"
                label="Codigo"
                placeholder="Codigo"
              ></FloatInput>
            </Form.Item>
            <Form.Item name="descripcion">
              <FloatInput
                type="text"
                label="Descripcion"
                placeholder="Descripcion"
              ></FloatInput>
            </Form.Item>
            <Form.Item name="tipoCargo">
              <FloatInput
                type="text"
                label="Tipo Cargo"
                placeholder="Tipo Cargo"
              ></FloatInput>
            </Form.Item>
          </Col>
          <Title level={5}>Aplica IVA</Title>
          <Form.Item name="aplicaIva">
            <Radio.Group onChange={onChange2} value={value2}>
              <Row justify="space-between">
                <Radio style={{ marginTop: 10 }} value={"IVA General"}>
                  IVA General
                </Radio>
                <Radio style={{ marginTop: 10 }} value={"IVA Reducido"}>
                  IVA Reducido
                </Radio>
                <Radio style={{ marginTop: 10 }} value={"No aplica"}>
                  No aplica
                </Radio>
              </Row>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="tipoDeTarjeta">
            <Radio.Group onChange={onChange1} value={value1}>
              <Row justify="space-between">
                <Radio style={{ marginTop: 10 }} value={"Debito"}>
                  Debito
                </Radio>
                <Radio style={{ marginTop: 10 }} value={"Credito"}>
                  Credito
                </Radio>
              </Row>
            </Radio.Group>
          </Form.Item>
          <Title level={5}>Moneda</Title>
          <Form.Item name="estado">
            <Radio.Group onChange={onChange3} value={value3}>
              <Radio value={"Dolar"}>Dolar U$S</Radio>
              <Radio value={"Local"}>Moneda Local</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="tipoMoneda">
            <FloatInput
              type="text"
              label="tipo moneda?"
              placeholder="buscar moneda?"
            ></FloatInput>
          </Form.Item>
        </Card>
      </>
    );
  };

  return (
    <>
      <Edit component={FormularioUsuario} />
    </>
  );
};
export default TipoDeCargoCrear;
