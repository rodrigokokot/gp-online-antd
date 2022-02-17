import React, { useState } from "react";
import { Radio, Form, Typography, Card, Row, Col } from "antd";
import Edit from "../../../../components/organisms/Edit/index";
import FloatInput from "../../../../components/molecules/FloatInput";
import SelectImg from "../../../../components/organisms/SelectImg.jsx";
import { SearchOutlined } from '@ant-design/icons';
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
          <Title level={3}  style={{ color: '#ab218e' }}>Datos Principales</Title><br></br>
          <Row gutter={24}><Col span={6}>
            <Form.Item name="codigo" rules={[{ required: true, message: "Ingrese código" }]}>
              <FloatInput
                outline
                type="text"
                label="Codigo*"
                placeholder="Codigo*"
              ></FloatInput>
            </Form.Item>
            <Form.Item name="tipoCargo" rules={[{ required: true, message: "Ingrese tipo cargo" }]}>
              <FloatInput
                outline
                type="text"
                label="Tipo Cargo*"
                placeholder="Tipo Cargo*"
              ></FloatInput>
            </Form.Item>
            </Col>
            <Col span={6}>
            <Form.Item name="descripcion">
              <FloatInput
                outline
                type="text"
                label="Descripcion"
                placeholder="Descripcion"
              ></FloatInput>
            </Form.Item>
          </Col>
          </Row>
          <Title level={5}>Aplica IVA</Title>
          <Form.Item name="aplicaIva" rules={[{ required: true, message: "Ingrese como aplica" }]}>
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
          <Form.Item name="tipoDeTarjeta" rules={[{ required: true, message: "Ingrese tipo de tarjeta" }]}>
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
          <Form.Item name="moneda">
            <Radio.Group onChange={onChange3} value={value3}>
              <Radio value={"Dolar"}>Dolar U$S</Radio>
              <Radio value={"Local"}>Moneda Local</Radio>
            </Radio.Group>
          </Form.Item>
          <Col span={6}><Form.Item
                name="tipomoneda" rules={[{ required: true, message: "Ingrese tipo" }]}
            > 
                <SelectImg suffix={<SearchOutlined />} 
                bordered showSearch={true} placeholder="Busca tipo de moneda" 
                style={{width: '100%'}}
                />            
            </Form.Item> </Col>
        </Card>
      </>
    );
  };

  return (
    <>
      <Edit 
        component={FormularioUsuario}
        textBtnSave="Confirmar"
        textModalConfirm="¿Confirma creación de nuevo tipo de cargo?"
        textBtnModalConfirm="Si, crear" />
    </>
  );
};
export default TipoDeCargoCrear;
