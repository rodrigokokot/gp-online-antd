import React from "react";
import Edit from "../../../../components/organisms/Edit";
import { Radio, Row, Col, Card, Button, Form, Space, Tooltip, DatePicker } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import './index.less'

export default function GestionAdicionalesNew() {
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
              <h1 className="purple-title">Datos principales</h1>
              <p>Tipo de documento</p>
            </Space>
          </Row>
          <Form
            form={form}
            name="search-form"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            size="large"
          >
            <Space direction="vertical" size={48}>
              <Form.Item name="documento">
                <Radio.Group name="radiogroup" defaultValue={1}>
                  <Row gutter={[48, 48]}>
                    <Col span={4}>
                      <Radio value={1}>DNI</Radio>
                      <Radio value={5}>CUIT</Radio>
                    </Col>

                    <Col span={8}>
                      <Radio value={2}>LIBRETA CIVICA</Radio>
                      <Radio value={6}>LIBRETA DE ENROLAMIENTO</Radio>
                    </Col>

                    <Col span={6}>
                      <Radio value={3}>CUIL</Radio>
                      <Radio value={7}>PASAPORTE</Radio>
                    </Col>

                    <Col span={6}>
                      <Radio value={4}>CI</Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </Form.Item>

              <Row gutter={48}>
                <Col span={6}>
                  <Form.Item name="numero">
                    <FloatInput label="N° de Documento" />
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
            </Space>
          </Form>
        </Card>
      </>
    );
  };

  const FormularioNuevo = () => {
      return <>
          <Card>
                <Row gutter={[24,48]}>
                    <Col span={8}>

                        <Form.Item name="nombre" rules={[{required: true, message: "Ingrese Nombre"}]}>
                            <FloatInput label="Nombre" />
                        </Form.Item>
                        
                        <Form.Item name="Apellido" rules={[{required: true, message: "Ingrese Apellido"}]}>
                            <FloatInput label="Apellido" />
                        </Form.Item>

                        <Form.Item name="Sexo" >
                            <FloatSelected label="Sexo" options={[
                                {
                                    title:"Masculino",
                                    value:"Masculino",
                                    disabled: false,
                                },
                                {
                                    title:"Femenino",
                                    value:"Femenino",
                                    disabled:false,
                                },
                                {
                                    title:"Otro",
                                    value:"Otro",
                                    disabled:false,
                                },
                            ]} />
                        </Form.Item>

                        <Form.Item name="estadocivil">
                            <FloatSelected label="Estado Civil" options={[
                                {
                                    title:"Soltero/a",
                                    value:"Soltero/a",
                                    disabled:false,
                                },
                                {
                                    title:"Casado/a",
                                    value:"Casado/a",
                                    disabled:false,
                                }
                            ]}    />
                        </Form.Item>

                        <Form.Item name="fecha-nac">
                            <DatePicker label="Fecha de Nacimiento" />                                
                        </Form.Item>

                        <Form.Item name="pais">
                            <FloatSelected label="País de nacimiento" options={[
                                {
                                    title:"Argentina",
                                    value:"Argentina",
                                    disabled:false,
                                },
                            ]} />
                        </Form.Item>
                            
                        <Form.Item name="email" rules={[{required:true, message:"Ingrese un email"}]}>
                            <FloatInput label="E-mail" /> 
                        </Form.Item>

                        <Form.Item name="tributario" rules={[{required:true, message:"Ingrese Código tributario"}]}>
                            <FloatInput label="Código tributario" />
                        </Form.Item>

                        <Form.Item name="embozado" rules={[{required:true, message:"Ingrese Nombre embozado"}]}>
                            <FloatInput label="Nombre embozado" />
                        </Form.Item>
                    </Col>
                </Row>
          </Card>
      </>
  }

  return (
    <div>
      <SearchDNI />
      <Edit component={FormularioNuevo} />
    </div>
  );
}
