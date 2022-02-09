import React, {useRef, useState} from "react";
import Edit from "../../../../components/organisms/Edit";
import { Radio, Row, Col, Card, Button, Form, Space, Tooltip, DatePicker, Checkbox, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import './index.less'
import Title from "antd/lib/typography/Title";

export default function GestionAdicionalesNew() {
  const [value, setValue] = useState("");
    const onChange = e => {
    setValue(e.target.value);
    }; 

  const onFinish = (values) => {
    console.log(values);
  };

  const SearchDNI = () => {
    const [form] = Form.useForm();

    return (
      <>
        <Card>
          <Row>
            <Space direction="vertical" size="small">
          <Typography.Title level={3}  style={{ color: '#ab218e' }}>Datos principales</Typography.Title> 
            </Space>
          </Row>
          <Form
            form={form}
            name="search-form"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            size="large"
          >
              <Title level={5}>Tipo de documento</Title>
        <Form.Item name='tipodocumento'
                    rules={[{ required: true  }]}> 
                <Radio.Group onChange={onChange} value={value}>
                    <Row justify="space-between">
                    <Col span={4}>
                        <Radio style={{ marginTop: 10 }} value={"DNI"}>DNI</Radio> 
                        <Radio style={{ marginTop: 10 }} value={"CUIT"}>CUIT</Radio>
                    </Col>
                    <Col span={8}>
                        <Radio style={{ marginTop: 10 }} value={"LIBRETA CIVICA"} >LIBRETA CIVICA</Radio>
                        <Radio style={{ marginTop: 10 }} value={"LIBRETA DE ENROLAMIENTO"}>LIBRETA DE ENROLAMIENTO</Radio>
                    </Col>
                    <Col span={4}>
                        <Radio style={{ marginTop: 10 }} value={"CUIL"}>CUIL</Radio> 
                        <Radio style={{ marginTop: 10 }} value={"PASAPORTE"} >PASAPORTE</Radio> 
                    </Col>
                    <Col span={4}>
                        <Radio style={{ marginTop: 10 }} value={"CI"}>CI</Radio>
                    </Col>
                    </Row>
                </Radio.Group>
        </Form.Item>

              <Row gutter={48}>
                <Col span={6}>
                  <Form.Item name="numero"
                    rules={[{ required: true, message: "Ingrese documento" }]}>
                    <FloatInput label="N° de Documento*" />
                  </Form.Item>
                </Col>

                <Col span={6}>
                  <Tooltip title="Buscar">
                    <Button
                      type="primary"
                      htmlType="submit"
                      shape="circle"
                      icon={<SearchOutlined />}
                    />
                  </Tooltip>
                </Col>
              </Row>
          </Form>
        </Card>
      </>
    );
  };

  const FormularioNuevo = () => {
    const [checked, setChecked] = useState(true);

    const Domicilio = () => {
      return (
        <div>
          <Row style={{ marginTop: 24 }} gutter={[24, 24]}>
            <Col span={8}>
              <Form.Item
                name="calle"
                rules={[{ required: true, message: "Ingrese calle" }]}
              >
                <FloatInput outline label="Calle*"/>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={4}>
              <Form.Item name="numero" className="reset"
                    rules={[{ required: true, message: "Ingrese numero" }]}>
                <FloatInput outline label="Número*" />
              </Form.Item>
            </Col>

            <Col span={4}>
              <Form.Item name="piso" className="reset">
                <FloatInput outline label="Piso" />
              </Form.Item>
            </Col>

            <Col span={4}>
              <Form.Item name="depto" className="reset">
                <FloatInput outline label="Depto" />
              </Form.Item>
            </Col>

            <Col span={4}>
              <Form.Item
                name="cp"
                rules={[{ required: true, message: "Ingrese Código Postal" }]}
                className="reset"
              >
                <FloatInput outline label="Código Postal*" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Form.Item name="entrec">
                <FloatInput outline label="Entre calles" />
              </Form.Item>

              <Form.Item name="barrio">
                <FloatInput outline label="Barrio" />
              </Form.Item>

              <Form.Item
                name="localidad"
                rules={[{ required: true, message: "Ingrese Localidad" }]}
              >
                <FloatInput outline label="Localidad*" />
              </Form.Item>

              <Form.Item
                name="provincia"
                rules={[{ required: true, message: "Ingrese Provincia" }]}
              >
                <FloatSelected
                  outline
                  label="Provincia*"
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
                  ]}
                />
              </Form.Item>

              <Form.Item
                name="telefono"
                rules={[{ required: true, message: "Ingrese Teléfono" }]}
              >
                <FloatInput outline label="Teléfono*" />
              </Form.Item>

              <Form.Item name="referencia">
                <FloatInput outline label="Referencia" />
              </Form.Item>
            </Col>
          </Row>
        </div>
      );
    };

    const onChange = (e) => {
      setChecked(e.target.checked);
    };

    return (
      <>
        <Card>
          <Row gutter={[24, 48]}>
            <Col span={8}>
              <Form.Item
                name="nombre"
                rules={[{ required: true, message: "Ingrese Nombre" }]}
              >
                <FloatInput outline label="Nombre*" />
              </Form.Item>

              <Form.Item
                name="Apellido"
                rules={[{ required: true, message: "Ingrese Apellido" }]}
              >
                <FloatInput outline label="Apellido*" />
              </Form.Item>

              <Form.Item name="Sexo">
                <FloatSelected
                  outline
                  label="Sexo"
                  options={[
                    {
                      title: "Masculino",
                      value: "Masculino",
                      disabled: false,
                    },
                    {
                      title: "Femenino",
                      value: "Femenino",
                      disabled: false,
                    },
                    {
                      title: "Otro",
                      value: "Otro",
                      disabled: false,
                    },
                  ]}
                />
              </Form.Item>

              <Form.Item name="estadocivil">
                <FloatSelected
                  outline
                  label="Estado Civil"
                  options={[
                    {
                      title: "Soltero/a",
                      value: "Soltero/a",
                      disabled: false,
                    },
                    {
                      title: "Casado/a",
                      value: "Casado/a",
                      disabled: false,
                    },
                  ]}
                />
              </Form.Item>

              <Form.Item name="fecha-nac"
                    rules={[{ required: true, message: "Ingrese fecha" }]}>
                <DatePicker placeholder="Fecha de Nacimiento*" />
              </Form.Item>

              <Form.Item name="pais"
                    rules={[{ required: true, message: "Ingrese País" }]}>
                <FloatSelected
                  outline 
                  label="País de nacimiento*"
                  options={[
                    {
                      title: "Argentina",
                      value: "Argentina",
                      disabled: false,
                    },
                  ]}
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[{ required: true, message: "Ingrese un email" }]}
              >
                <FloatInput outline label="E-mail*" />
              </Form.Item>

              <Form.Item
                name="tributario"
                rules={[
                  { required: true, message: "Ingrese Código tributario" },
                ]}
              >
                <FloatInput outline label="Código tributario*" />
              </Form.Item>

              <Form.Item
                name="embozado"
                rules={[{ required: true, message: "Ingrese Nombre embozado" }]}
              >
                <FloatInput outline label="Nombre embozado*" />
              </Form.Item>
            </Col>
          </Row>
        </Card>
          <br></br>      
        <Card>
          <Space direction="vertical" size="middle">
          <Typography.Title level={3}  style={{ color: '#ab218e' }}> Domicilio</Typography.Title>
            <Checkbox onChange={onChange} checked={checked}>
              Informa domicilio
            </Checkbox>
          </Space>

          {checked && <Domicilio />}
        </Card>
      </>
    );
  };

  return (
    <div>
      <SearchDNI />
      <Edit 
        component={FormularioNuevo}
        textBtnSave="Guardar"
        textModalConfirm="¿Crear nuevo adicional?"
        textBtnModalConfirm="Si, crear"  />
    </div>
  );
}
