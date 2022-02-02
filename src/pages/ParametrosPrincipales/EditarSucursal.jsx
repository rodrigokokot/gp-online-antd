import React from "react";
import { Form, Row, Col, Switch, Card, Typography, Radio, Space } from "antd";
import FloatInput from "../../components/molecules/FloatInput/index";
import FloatSelect from "../../components/molecules/FloatSelected/index";
import Edit from "../../components/organisms/Edit/index";


function EditarSucursal() {
  const handleCallback = (values) => {
    console.log(values);
  };

  const FormularioEdicion = () =>{

    return (


      <>
        <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
          <Typography.Title level={4} style={{ color: '#ab218e' }}>Datos Principales</Typography.Title>

          <Col span={8}>


          <Form.Item
            name="descripcion"
            rules={[{ required: true, message: "Ingrese descripción" }]}
          >
            <FloatInput outline label="Descripcion" placeholder="Descripcion" />
          </Form.Item>

          <>
            <Typography.Text style={{ marginBottom:'10px' }}>Estado de la Sucursal</Typography.Text>
            <Form.Item name="estado" rules={[{ required: true }]}>
              {/* <Switch unCheckedChildren="Inactivo" checkedChildren="Activo" /> */}
              <Radio.Group
                // onChange={this.onChange} value={value}
                >
                <Space direction="vertical">
                  <Radio value="activo">Activo</Radio>
                  <Radio value="inactivo">Inactivo</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
          </>
          </Col>
        </Card>

      <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
      <Typography.Title level={4} style={{ color: '#ab218e' }}>Domicilio</Typography.Title>
        <Row gutter={24}>
          <Col span={6}>
            <Form.Item
              name="calle"
              rules={[{ required: true, message: "Ingrese calle" }]}
            >
              <FloatInput outline label="Calle" placeholder="Calle"></FloatInput>
            </Form.Item>
          </Col>

          <Col span={3}>
            <Form.Item
              name="num"
              rules={[{ required: true, message: "Ingrese número" }]}
            >
              <FloatInput outline label="Número" placeholder="Número"></FloatInput>
            </Form.Item>
          </Col>

          <Col span={2}>
            <Form.Item name="piso">
              <FloatInput outline label="Piso" placeholder="Piso"></FloatInput>
            </Form.Item>
          </Col>

          <Col span={2}>
            <Form.Item name="depto">
              <FloatInput outline label="Depto" placeholder="Depto"></FloatInput>
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
                label="Localidad"
                placeholder="Localidad"
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
          </Col>
        </Row>

        <Row>
          <Col span={8}>
            <Form.Item
              name="telefono"
              rules={[{ required: true, message: "Ingrese teléfono" }]}
            >
              <FloatInput outline label="Telefono" placeholder="Telefono"></FloatInput>
            </Form.Item>
          </Col>
        </Row>
      </Card>
    </>);
  }

  return (
    <>
      <Edit component={FormularioEdicion} />
    </>
  );
}

export default EditarSucursal;
