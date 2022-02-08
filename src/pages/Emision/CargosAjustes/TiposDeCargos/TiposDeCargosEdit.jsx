import React, { useState } from "react";
import Edit from "../../../../components/organisms/Edit";
import { Form, Typography, Card, Row, Col, Radio, Checkbox } from "antd";
import FloatInput from "../../../../components/molecules/FloatInput";
const { Title } = Typography;

function TipoDeCargoEdit() {
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

  const FormularioTipoDeCargo = () => {
    return (
      <>
        <Card>
          <Title level={2}>Datos Principales</Title>
          <Row>
            <Form.Item name="codigo" rules={[{ required: true, message: "Ingrese código" }]}>
              <FloatInput
                outline
                type="text"
                label="Codigo"
                placeholder="Codigo"
              ></FloatInput>
            </Form.Item>
            <Form.Item name="anulacion" rules={[{ required: true, message: "Ingrese anulacion" }]}>
              <FloatInput
                outline
                type="text"
                label="Anulacion de cargo"
                placeholder="Anulacion de cargo"
              ></FloatInput>
            </Form.Item>
          </Row>
          <Col span={6}>
            <Form.Item name="descripcion" rules={[{ required: true, message: "Ingrese descripcion" }]}>
              <FloatInput
                outline
                type="text"
                label="Descripcion"
                placeholder="Descripcion"
              ></FloatInput>
            </Form.Item>
            <Form.Item name="tipoCargo" rules={[{ required: true, message: "Ingrese tipo de cargo" }]}>
              <FloatInput
                outline
                type="text"
                label="Tipo de cargo"
                placeholder="Tipo de cargo"
              ></FloatInput>
            </Form.Item>
          </Col>
          <Title level={5}>Aplica IVA</Title>
          <Form.Item name="aplicaIva" rules={[{ required: true, message: "Ingrese como aplica" }]}>
            <Radio.Group onChange={onChange1} value={value1}>
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
          <Title level={5}>Debito/Credito</Title>
          <Form.Item name="tipoTarjeta" rules={[{ required: true, message: "Ingrese tipo de tarjeta" }]}>
            <Radio.Group onChange={onChange2} value={value2}>
              <Row justify="space-between">
                <Radio style={{ marginTop: 10 }} value={"IVA General"}>
                  Debito
                </Radio>
                <Radio style={{ marginTop: 10 }} value={"IVA Reducido"}>
                  Credito
                </Radio>
              </Row>
            </Radio.Group>
          </Form.Item>
          <Title level={5}>Moneda</Title>
          <Form.Item name="moneda" rules={[{ required: true, message: "Ingrese moneda" }]}>
            <Radio.Group onChange={onChange3} value={value3}>
              <Row justify="space-between">
                <Radio style={{ marginTop: 10 }} value={"IVA General"}>
                  Dolar
                </Radio>
                <Radio style={{ marginTop: 10 }} value={"IVA Reducido"}>
                  Peso
                </Radio>
              </Row>
            </Radio.Group>
          </Form.Item>
          <Title level={5}>Max. Cuotas</Title>
          <Form.Item name="cuotas" rules={[{ required: true, message: "Ingrese cantidad de cuotas" }]}>
            <FloatInput outline type="number"></FloatInput>
          </Form.Item>
          <Title level={5}>Estado</Title>
          <Form.Item name="estado" rules={[{ required: true, message: "Ingrese estado" }]}>
            <Radio.Group onChange={onChange3} value={value3}>
              <Row justify="space-between">
                <Radio style={{ marginTop: 10 }} value={"IVA General"}>
                  Habilitado
                </Radio>
                <Radio style={{ marginTop: 10 }} value={"IVA Reducido"}>
                  Inhabilitado
                </Radio>
              </Row>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="cargos">
            <Checkbox>Afecta Cargos?</Checkbox>
          </Form.Item>
        </Card>
      </>
    );
  };

  return (
    <>
      <Edit component={FormularioTipoDeCargo}></Edit>
    </>
  );
}

export default TipoDeCargoEdit;