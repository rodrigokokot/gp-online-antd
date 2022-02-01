import { Card, Form, Radio, Row, Col, DatePicker, Input } from "antd";
import React from "react";
import FloatInput from "../../../../components/molecules/FloatInput";
import Edit from "../../../../components/organisms/Edit";

export default function AutorizacionesNew() {
  const FormularioNuevo = () => {
    return (
      <>
        <Card>
          <h1 className="purple-title">Datos de Tarjeta</h1>

          <Col span={6}>
            <Form.Item name="tarjeta">
              <FloatInput placeholder="N° de Tarjeta" label="N° de tarjeta" />
            </Form.Item>

            <Form.Item name="nombre">
              <FloatInput placeholder="Nombre" label="Nombre" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="tipodoc">
              <Row>
                <p>Tipo de documento</p>
              </Row>

              <Radio.Group name="radiogroup" defaultValue={1}>
                <Row justify="space-between">
                  <Col span={4}>
                    <Radio value={1}>DNI</Radio>
                    <Radio value={5}>CUIT</Radio>
                  </Col>

                  <Col span={8}>
                    <Radio value={2}>LIBRETA CIVICA</Radio>
                    <Radio value={6}>LIBRETA DE ENROLAMIENTO</Radio>
                  </Col>

                  <Col span={4}>
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
            <Form.Item name="doc">
              <FloatInput
                placeholder="N° de Documento"
                label="N° de Documento"
              />
            </Form.Item>

            <Form.Item>
              <FloatInput placeholder="Marca" label="Marca" />
            </Form.Item>

            <Form.Item>
              <FloatInput placeholder="Emisor" label="Emisor" />
            </Form.Item>

            <Form.Item>
              <FloatInput
                placeholder="Tipo de Producto"
                label="Tipo de Producto"
              />
            </Form.Item>
          </Col>
        </Card>

        <Card>
          <h1 className="purple-title">Autorización</h1>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item>
                <FloatInput
                  placeholder="Fecha de Origen"
                  label="Fecha de Origen"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item>
                <FloatInput placeholder="Importe" label="Importe" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item>
                <FloatInput placeholder="Moneda" label="Moneda" />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item>
                <DatePicker placeholder="Fecha de Proceso" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item>
                <FloatInput placeholder="Plan" label="Plan" />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item>
                <FloatInput placeholder="Relación" label="Relación" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item>
                <FloatInput placeholder="Cuotas" label="Cuotas" />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item>
                <FloatInput placeholder="Origen" label="Origen" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item>
                <FloatInput
                  placeholder="Código de autorización"
                  label="Código de autorización"
                />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item>
                <FloatInput
                  placeholder="Modo de entrada"
                  label="Modo de entrada"
                />
              </Form.Item>
            </Col>
          </Row>


            <Row gutter={48}>
                <Col span={6}>
                          <Form.Item>
            <FloatInput placeholder="Comercio" label="Comercio" />
          </Form.Item>
                </Col>

                <Col span={6}>
                    <Form.Item>
                        <FloatInput placeholder="Terminal" label="Terminal" />
                    </Form.Item>
                </Col>
            </Row>

            <Col span={24}>
            <Form.Item name="tipodoc">
              <Row>
                <p>Tipo de documento</p>
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
      {" "}
      <Edit component={FormularioNuevo} />
    </div>
  );
}
