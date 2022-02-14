import React from "react";
import Edit from "../../components/organisms/Edit";
import { Form, Row, Col, Card, Typography } from "antd";
import FloatInput from "../../components/molecules/FloatInput/index";
import FloatSelect from "../../components/molecules/FloatSelected/index";

function NuevaSucursal() {
  const FormularioNueva = () => {
    return (
      <>
        <Card style={{ borderRadius: "16px", marginBottom: "12px" }}>
          <Typography.Title level={3} style={{ color: "#ab218e" }}>
            Datos Principales
          </Typography.Title>
          <Col span={8}>
            <Form.Item
              name="codigo"
              rules={[{ required: true, message: "Ingrese código" }]}
            >
              <FloatInput
                outline
                label="Codigo*"
                placeholder="Código*"
              ></FloatInput>
            </Form.Item>

            <Form.Item name="descripcion">
              <FloatInput
                outline
                label="Descripcion"
                placeholder="Descripcion"
              />
            </Form.Item>
          </Col>
        </Card>

        <Card style={{ borderRadius: "16px" }}>
          <Typography.Title level={3} style={{ color: "#ab218e" }}>
            Domicilio
          </Typography.Title>

          <Row gutter={24}>
            <Col span={6}>
              <Form.Item
                name="calle"
                rules={[{ required: true, message: "Ingrese calle" }]}
              >
                <FloatInput
                  outline
                  label="Calle*"
                  placeholder="Calle*"
                ></FloatInput>
              </Form.Item>
            </Col>

            <Col span={3}>
              <Form.Item
                name="numero"
                rules={[{ required: true, message: "Ingrese número" }]}
              >
                <FloatInput
                  outline
                  label="Número*"
                  placeholder="Número*"
                ></FloatInput>
              </Form.Item>
            </Col>

            <Col span={2}>
              <Form.Item name="piso">
                <FloatInput
                  outline
                  label="Piso"
                  placeholder="Piso"
                ></FloatInput>
              </Form.Item>
            </Col>

            <Col span={2}>
              <Form.Item name="piso">
                <FloatInput
                  outline
                  label="Depto"
                  placeholder="Depto"
                ></FloatInput>
              </Form.Item>
            </Col>

            <Col span={2}>
              <Form.Item
                name="cp"
                rules={[{ required: true, message: "Ingrese código postal" }]}
              >
                <FloatInput outline label="CP*" placeholder="CP*"></FloatInput>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <Form.Item
                name="localidad"
                rules={[{ required: true, message: "Ingrese localidad" }]}
              >
                <FloatSelect
                  outline
                  label="Localidad*"
                  placeholder="Localidad*"
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
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <Form.Item
                name="provincia"
                rules={[{ required: true, message: "Ingrese provincia" }]}
              >
                <FloatSelect
                  outline
                  label="Provincia*"
                  placeholder="Provincia*"
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
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <Form.Item name="barrio">
                <FloatInput
                  outline
                  label="Barrio"
                  placeholder="Barrio"
                ></FloatInput>
              </Form.Item>
              <Form.Item
                name="telefono"
                rules={[{ required: true, message: "Ingrese teléfono" }]}
              >
                <FloatInput
                  outline
                  label="Telefono*"
                  placeholder="Telefono*"
                ></FloatInput>
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </>
    );
  };

  return (
    <Edit
      component={FormularioNueva}
      textBtnSave="Crear sucursal"
      textBtnModalConfirm="¿Crear esta sucursal?"
      textBtnModalConfirm="Si, crear"
    />
  );
}

export default NuevaSucursal;
