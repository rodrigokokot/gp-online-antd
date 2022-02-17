import React, { useState } from "react";
import { Radio, Form, Typography, Card, Row, Col } from "antd";
import FloatInput from "../../molecules/FloatInput";
import FloatSelect from "../../components/molecules/FloatSelected/index";
const { Group } = Radio;
const { Title } = Typography;

const FormEditarGral = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("finish", values);
  };

  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const [value2, setValue2] = useState("");
  const onChange2 = (e) => {
    setValue2(e.target.value);
  };

  return (
    <>
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
        size="large"
      >
        <Card>
          <Title level={2}>Titulo</Title>

          <Title level={5}>Radio group</Title>
          <Form.Item name="name de los radio">
            <Group onChange={onChange} value={value}>
              <Radio value={"Prueba QA"}>Prueba QA</Radio>
              <Radio
                value={"TotalCoin - Consultas"}
                style={{ marginLeft: 139 }}
              >
                TotalCoin - Consultas
              </Radio>
              <br />
              <Radio value={"Nueva prueba perfil QA"} style={{ marginTop: 14 }}>
                Nueva prueba perfil QA
              </Radio>
              <Radio
                value={"PruebasFraude"}
                style={{ marginLeft: 59, marginTop: 14 }}
              >
                PruebasFraude
              </Radio>
              <br />
              <Radio value={"Prueba"} style={{ marginTop: 14 }}>
                Prueba
              </Radio>
              <Radio
                value={"Perfil CX"}
                style={{ marginLeft: 162, marginTop: 14 }}
              >
                Perfil CX
              </Radio>
              <br />
              <Radio value={"Prueba perfil Admin"} style={{ marginTop: 14 }}>
                Prueba perfil Admin
              </Radio>
              <Radio
                value={"TotalCoin - Admin"}
                style={{ marginLeft: 83, marginTop: 14 }}
              >
                TotalCoin - Admin
              </Radio>
            </Group>
          </Form.Item>
        </Card>

        <Card>
          {/* Titulo de componente para card*/}
          <Title level={2}>Otro Titulo Card </Title>

          {/* titulo para los Radio */}
          <Title level={5}>otro radio</Title>

          {/* Radio para seleccionar entre opciones */}
          <Form.Item name="name otro radio">
            <Radio.Group onChange={onChange2} value={value2}>
              <Radio value={"DNI"}>DNI</Radio>
              <Radio value={"LIBRETA CIVICA"} style={{ marginLeft: 139 }}>
                LIBRETA CIVICA
              </Radio>
              <Radio value={"CUIL"} style={{ marginLeft: 200, marginTop: 14 }}>
                CUIL
              </Radio>
              <Radio value={"CI"} style={{ marginLeft: 150, marginTop: 14 }}>
                CI
              </Radio>
              <br />
              <Radio value={"CUIT"} style={{ marginTop: 14 }}>
                CUIT
              </Radio>
              <Radio
                value={"LIBRETA DE ENROLAMIENTO"}
                style={{ marginLeft: 133, marginTop: 14 }}
              >
                LIBRETA DE ENROLAMIENTO
              </Radio>
              <Radio
                value={"PASAPORTE"}
                style={{ marginLeft: 119, marginTop: 14 }}
              >
                PASAPORTE
              </Radio>
            </Radio.Group>
          </Form.Item>

          {/* Input tipo numerico*/}
          <Form.Item style={{ width: 414 }} name="documento">
            <FloatInput
              type="number"
              label="N° de Documento"
              placeholder="N° de Documento"
            ></FloatInput>
          </Form.Item>

          {/* Input tipo correo*/}
          <Form.Item style={{ width: 414 }} name="email">
            <FloatInput
              type="email"
              label="E-mail"
              placeholder="Email"
            ></FloatInput>
          </Form.Item>

          {/* Input tipo texto */}
          <Form.Item style={{ width: 414 }} name="nombre">
            <FloatInput
              type="text"
              label="Nombre"
              placeholder="Nombre"
            ></FloatInput>
          </Form.Item>

          {/* Input dato requerido */}
          <Form.Item
            name="telefono"
            type="number"
            rules={[{ required: true, message: "Ingrese teléfono" }]}
          >
            <FloatInput label="Telefono" placeholder="Telefono"></FloatInput>
          </Form.Item>

          {/* Para select */}
          <Form.Item
            name="provincia"
            rules={[{ required: true, message: "Ingrese provincia" }]}
          >
            <FloatSelect
              width={205}
              label="Provincia"
              placeholder="Provincia"
              options={[
                {
                  title: "San Juan",
                  value: "San Juan",
                  disabled: false,
                },
                {
                  title: "Mendoza",
                  value: "Mendoza",
                  disabled: false,
                },
                {
                  title: "San Luis",
                  value: "San Luis",
                  disabled: false,
                },
              ]}
            ></FloatSelect>
          </Form.Item>

          {/* Input en columna */}
          <Row gutter={24}>
            <Col>
              <Form.Item
                name="calle"
                rules={[{ required: true, message: "Ingrese calle" }]}
              >
                <FloatInput label="Calle" placeholder="Calle"></FloatInput>
              </Form.Item>
            </Col>

            <Col>
              <Form.Item
                name="num"
                rules={[{ required: true, message: "Ingrese número" }]}
              >
                <FloatInput label="Número" placeholder="Número"></FloatInput>
              </Form.Item>
            </Col>

            <Col>
              <Form.Item name="piso">
                <FloatInput label="Piso" placeholder="Piso"></FloatInput>
              </Form.Item>
            </Col>

            <Col>
              <Form.Item name="piso">
                <FloatInput label="Depto" placeholder="Depto"></FloatInput>
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
    </>
  );
};

export default FormEditarGral;
