import React, {useRef, useState} from "react";
import Edit from "../../../../components/organisms/Edit";
import { Radio, Row, Col, Card, Button, Form, Space, Tooltip, DatePicker, Checkbox } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";

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
    const [checked, setChecked] = useState(true);

    const Domicilio = () => {
      return (
        <div>
          <Row style={{ marginTop: 24 }} gutter={[24, 24]}>
            <Col span={8}>
              <Form.Item
                name="calle"
                rules={[{ required: true, message: "Ingrese domicilio" }]}
              >
                <FloatInput outline label="Calle"/>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={4}>
              <Form.Item name="numero" className="reset">
                <FloatInput outline label="Número" />
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
                <FloatInput outline label="Código Postal" />
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
                <FloatInput outline label="Localidad" />
              </Form.Item>

              <Form.Item
                name="provincia"
                rules={[{ required: true, message: "Ingrese Provincia" }]}
              >
                <FloatSelected
                  outline
                  label="Provincia"
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
                <FloatInput outline label="Teléfono" />
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
                <FloatInput outline label="Nombre" />
              </Form.Item>

              <Form.Item
                name="Apellido"
                rules={[{ required: true, message: "Ingrese Apellido" }]}
              >
                <FloatInput outline label="Apellido" />
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

              <Form.Item name="fecha-nac">
                <DatePicker placeholder="Fecha de Nacimiento" />
              </Form.Item>

              <Form.Item name="pais">
                <FloatSelected
                  outline
                  label="País de nacimiento"
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
                <FloatInput outline label="E-mail" />
              </Form.Item>

              <Form.Item
                name="tributario"
                rules={[
                  { required: true, message: "Ingrese Código tributario" },
                ]}
              >
                <FloatInput outline label="Código tributario" />
              </Form.Item>

              <Form.Item
                name="embozado"
                rules={[{ required: true, message: "Ingrese Nombre embozado" }]}
              >
                <FloatInput outline label="Nombre embozado" />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Card>
          <Space direction="vertical" size="middle">
            <h1 className="purple-title">Domicilio</h1>
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
