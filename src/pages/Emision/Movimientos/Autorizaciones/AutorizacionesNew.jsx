import { Card, Form, Radio, Row, Col, DatePicker,Typography } from "antd";
import React from "react";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import Edit from "../../../../components/organisms/Edit";

export default function AutorizacionesNew() {
  const FormularioNuevo = () => {
    return (
      <>
        <Card>
          <Typography.Title level={3}  style={{ color: '#ab218e' }}>Datos de Tarjeta</Typography.Title>
          <br></br>
          <Col span={6}>
            <Form.Item
              name="tarjeta"
              rules={[{ required: true, message: "Ingrese tarjeta" }]}
            >
              <FloatInput
                outline
                placeholder="N° de Tarjeta*"
                label="N° de tarjeta*"
              />
            </Form.Item>

            <Form.Item
              name="nombre"
              rules={[{ required: true, message: "Ingrese nombre" }]}
            >
              <FloatInput outline placeholder="Nombre*" label="Nombre*" />
            </Form.Item>

            <Form.Item
              name="apellido"
              rules={[{ required: true, message: "Ingrese apellido" }]}
            >
              <FloatInput outline placeholder="Apellido*" label="Apellido*" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="tipodoc"
              rules={[{ required: true }]}>
              <Row>
                <p>Tipo de documento</p>
              </Row>

              <Radio.Group name="radiogroup" defaultValue={1}>
                <Row justify="space-between">
                  <Col span={4}>
                    <Radio value={1}>DNI</Radio>
                    <Radio value={5}>CUIT</Radio>
                  </Col>

                  <Col span={9}>
                    <Radio value={2}>LIBRETA CIVICA</Radio>
                    <Radio value={6}>LIBRETA DE ENROLAMIENTO</Radio>
                  </Col>

                  <Col span={5}>
                    <Radio value={3}>CUIL</Radio>
                    <Radio value={7}>PASAPORTE</Radio>
                  </Col>

                  <Col span={4}>
                    <Radio value={4}>CI</Radio>
                  </Col>
                </Row>
              </Radio.Group>
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item
              name="doc"
              rules={[
                { required: true, message: "Ingrese documento" },
              ]}
            >
              <FloatInput
                placeholder="N° de Documento*"
                label="N° de Documento*"
                outline
              />
            </Form.Item>

            <Form.Item
              name="marca"
              rules={[{ required: true, message: "Ingrese marca" }]}
            >
              <FloatInput outline placeholder="Marca*" label="Marca*" />
            </Form.Item>

            <Form.Item
              name="emisor"
              rules={[{ required: true, message: "Ingrese número de emisor" }]}
            >
              <FloatInput outline placeholder="Emisor*" label="Emisor*" />
            </Form.Item>

            <Form.Item
              name="producto"
              rules={[{ required: true, message: "Ingrese tipo de producto" }]}
            >
              <FloatInput
                placeholder="Tipo de Producto*"
                label="Tipo de Producto*"
                outline
              />
            </Form.Item>
          </Col>
        </Card>
              <br></br>
        <Card>
          <Typography.Title level={3}  style={{ color: '#ab218e' }}>Autorización</Typography.Title> <br></br>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="origen"
                rules={[{ required: true, message: "Ingrese fecha de origen" }]}
              >
                <DatePicker style={{width: '100%'}} placeholder="Fecha de Origen*" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="importe"
                rules={[{ required: true, message: "Ingrese importe" }]}
              >
                <FloatInput outline placeholder="Importe*" label="Importe*" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="moneda"
                rules={[{ required: true, message: "Ingrese moneda" }]}
              >
                <FloatSelected
                  outline
                  label="Moneda*"
                  placeholder="Moneda*"
                  options={[
                    {
                      title: "Euro",
                      value: "Euro",
                      disabled: false,
                    },
                    {
                      title: "USD",
                      value: "USD",
                      disabled: false,
                    },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item
                name="proceso"
                rules={[
                  { required: true, message: "Ingrese fecha de proceso" },
                ]}
              >
                <DatePicker style={{width: '100%'}} placeholder="Fecha de Proceso*" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="plan"
                rules={[{ required: true, message: "Ingrese plan" }]}
              >
                <FloatInput outline placeholder="Plan*" label="Plan*" />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item
                name="relacion"
                rules={[{ required: true, message: "Ingrese relación" }]}
              >
                <FloatInput outline placeholder="Relación*" label="Relación*" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="cuotas"
                rules={[{ required: true, message: "Ingrese cuotas" }]}
              >
                <FloatSelected
                  outline
                  placeholder="Cuotas*"
                  label="Cuotas*"
                  options={[
                    {
                      title: 3,
                      value: 3,
                      disabled: false,
                    },
                    {
                      title: 6,
                      value: 6,
                      disabled: false,
                    },
                    {
                      title: 9,
                      value: 9,
                      disabled: false,
                    },
                    {
                      title: 12,
                      value: 9,
                      disabled: false,
                    },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item
                name="origen"
                rules={[{ required: true, message: "Ingrese origen" }]}
              >
                <FloatInput outline placeholder="Origen*" label="Origen*" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="autorizacion"
                rules={[
                  { required: true, message: "Ingrese código de autorización" },
                ]}
              >
                <FloatInput
                  placeholder="Código de autorización*"
                  label="Código de autorización*"
                  outline
                />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item
                name="modo"
                rules={[{ required: true, message: "Ingrese modo de entrada" }]}
              >
                <FloatInput
                  placeholder="Modo de entrada*"
                  label="Modo de entrada*"
                  outline
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="comercio"
                rules={[{ required: true, message: "Ingrese comercio" }]}
              >
                <FloatInput outline placeholder="Comercio*" label="Comercio*" />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item
                name="terminal"
                rules={[{ required: true, message: "Ingrese terminal" }]}
              >
                <FloatInput outline placeholder="Terminal*" label="Terminal*" />
              </Form.Item>
            </Col>
          </Row>

          <Col span={24}>
            <Form.Item name="estado"
              rules={[{ required: true }]}>
              <Row>
                <p>Estado</p>
              </Row>

              <Radio.Group name="radiogroup" defaultValue={1}>
                <Row justify="space-between">
                  <Col span={6}>
                    <Radio value={1}>Aprobada</Radio>
                    <Radio value={2}>Sin autorización Emisor</Radio>
                  </Col>

                  <Col span={6}>
                    <Radio value={3}>Rechazada</Radio>
                    <Radio value={4}>Rechazada por Emisor</Radio>
                  </Col>

                  <Col span={8}>
                    <Radio value={5}>Anulada</Radio>
                    <Radio value={6}>Anulada por falta de presentación</Radio>
                  </Col>
                </Row>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Card>
      </>
    );
  };

  return (
    <div> 
      <Edit component={FormularioNuevo} />
    </div>
  );
}
