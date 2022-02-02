import { Card, Form, Radio, Row, Col, DatePicker, Input } from "antd";
import React from "react";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import Edit from "../../../../components/organisms/Edit";

export default function AutorizacionesNew() {
  const FormularioNuevo = () => {
    return (
      <>
        <Card>
          <h1 className="purple-title">Datos de Tarjeta</h1>

          <Col span={6}>
            <Form.Item name="tarjeta" rules={[{ required: true, message: "Ingrese tarjeta" }]}>
              <FloatInput placeholder="N° de Tarjeta" label="N° de tarjeta" />
            </Form.Item>

            <Form.Item name="nombre" rules={[{ required: true, message: "Ingrese nombre" }]}>
              <FloatInput placeholder="Nombre" label="Nombre" />
            </Form.Item>

            
            <Form.Item name="apellido" rules={[{ required: true, message: "Ingrese apellido" }]}>
              <FloatInput placeholder="Apellido" label="Apellido" />
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
            <Form.Item name="doc" rules={[{ required: true, message: "Ingrese número de documento" }]}>
              <FloatInput 
                placeholder="N° de Documento"
                label="N° de Documento"
                
              />
            </Form.Item>

            <Form.Item name="marca" rules={[{ required: true, message: "Ingrese marca" }]}>
              <FloatInput placeholder="Marca" label="Marca" />
            </Form.Item>

            <Form.Item name="emisor" rules={[{ required: true, message: "Ingrese número de emisor" }]}>
              <FloatInput placeholder="Emisor" label="Emisor" />
            </Form.Item>

            <Form.Item name="producto" rules={[{ required: true, message: "Ingrese tipo de producto" }]}>
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
              <Form.Item name="origen" rules={[{ required: true, message: "Ingrese fecha de origen" }]}>
                <DatePicker placeholder="Fecha de Origen" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item name="importe" rules={[{ required: true, message: "Ingrese importe" }]}>
                <FloatInput placeholder="Importe" label="Importe" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item name="moneda" rules={[{ required: true, message: "Ingrese moneda" }]}>
                <FloatSelected label="Moneda" placeholder="Moneda" options={[
                    {
                        title:"Euro",
                        value:"Euro",
                        disabled: false,
                    },
                    {
                        title:"USD",
                        value:"USD",
                        disabled:false
                    }
                ]}/>
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item name="proceso" rules={[{ required: true, message: "Ingrese fecha de proceso" }]}>
                <DatePicker placeholder="Fecha de Proceso" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item name="plan" rules={[{ required: true, message: "Ingrese plan" }]}>
                <FloatInput placeholder="Plan" label="Plan" />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item name="relacion" rules={[{ required: true, message: "Ingrese relación" }]}>
                <FloatInput placeholder="Relación" label="Relación" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item name="cuotas" rules={[{ required: true, message: "Ingrese cuotas" }]}>
                <FloatSelected placeholder="Cuotas" label="Cuotas" options={[
                  {
                    title: 3,
                    value: 3,
                    disabled: false
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
                  }
                ]} />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item name="origen" rules={[{ required: true, message: "Ingrese origen" }]}>
                <FloatInput placeholder="Origen" label="Origen" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item name="autorizacion" rules={[{ required: true, message: "Ingrese código de autorización" }]}>
                <FloatInput
                  placeholder="Código de autorización"
                  label="Código de autorización"
                />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item name="modo" rules={[{ required: true, message: "Ingrese modo de entrada" }]}>
                <FloatInput
                  placeholder="Modo de entrada"
                  label="Modo de entrada"
                />
              </Form.Item>
            </Col>
          </Row>


            <Row gutter={48}>
                <Col span={6}>
                          <Form.Item name="comercio" rules={[{ required: true, message: "Ingrese comercio" }]}>
            <FloatInput placeholder="Comercio" label="Comercio" />
          </Form.Item>
                </Col>

                <Col span={6}>
                    <Form.Item name="terminal" rules={[{ required: true, message: "Ingrese terminal" }]}>
                        <FloatInput placeholder="Terminal" label="Terminal" />
                    </Form.Item>
                </Col>
            </Row>

            <Col span={24}>
            <Form.Item name="estado">
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
      {" "}
      <Edit component={FormularioNuevo} />
    </div>
  );
}
