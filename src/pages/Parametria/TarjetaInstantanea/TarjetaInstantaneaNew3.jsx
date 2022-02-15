import React from "react";
import { Card, Form, Radio, Row, Col, Checkbox } from "antd";
import Edit from "../../../components/organisms/Edit/index";
import FloatInput from '../../../components/molecules/FloatInput';
import FloatSelected from "../../../components/molecules/FloatSelected";

export default function TarjetaInstantaneaNew() {
    const FormularioTarjetaInstantaneaNueva = () => {


        return (
            <>
                <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
                    <h1 className="purple-title">Información del titular</h1>
                    <Row>
                        <Col span={8}>
                            <text>N° de Cuenta</text>
                        </Col>
                        <Col span={8}>
                            <text>N° de Cuenta Original</text>
                        </Col>
                        <Col span={8}>
                            <text>Fecha Alta</text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <text><b>N/D</b></text>
                        </Col>
                        <Col span={8}>
                            <text><b> N/D</b></text>
                        </Col>
                        <Col span={8}>
                            <text><b> N/D</b></text>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <text>Marca</text>
                        </Col>
                        <Col span={8}>
                            <text>Emisor</text>
                        </Col>
                        <Col span={8}>
                            <text>Sucursal</text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <text><b>Tarjeta Grupar</b></text>
                        </Col>
                        <Col span={8}>
                            <text><b>Tarjeta Grupar</b></text>
                        </Col>
                        <Col span={8}>
                            <text><b>Cordoba</b></text>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <text>Grupo Cierre</text>
                        </Col>
                        <Col span={8}>
                            <text>Grupo Afinidad</text>
                        </Col>
                        <Col span={8}>
                            <text>Cartera</text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <text><b>Cierre Grupar Prueba</b></text>
                        </Col>
                        <Col span={8}>
                            <text><b>Grupar Bonificacion</b></text>
                        </Col>
                        <Col span={8}>
                            <text><b>TG Cartera General</b></text>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <text>Tipo Cuenta</text>
                        </Col>
                        <Col span={8}>
                            <text>Estado</text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <text><b>Personal</b></text>
                        </Col>
                        <Col span={8}>
                            <text><b>-</b></text>
                        </Col>
                    </Row>

                </Card>

                <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
                    <h1 className="purple-title">Información de la titular</h1>
                    <Row>
                        <Col span={8}>
                            <text>Documento</text>
                        </Col>
                        <Col span={8}>
                            <text>Apellidos</text>
                        </Col>
                        <Col span={8}>
                            <text>Nombres</text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <text><b>DNI-49654213</b></text>
                        </Col>
                        <Col span={8}>
                            <text><b>Prueba</b></text>
                        </Col>
                        <Col span={8}>
                            <text><b>Pepito</b></text>
                        </Col>
                    </Row>
                </Card>

                <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
                    <h1 className="purple-title">Información del Producto</h1>
                    <Row gutter={24}>
                        <Col span={12}>
                            <text>Producto</text>
                        </Col>
                        <Col span={12}>
                            <text>Ver Clientes de producto</text>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <text><b>Tarjeta Grupar</b></text>
                        </Col>
                        <Col span={12}>
                            <text><b>Tarjeta Grupar</b></text>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <text>Tipo de tarjeta</text>
                        </Col>
                        <Col span={12}>
                            <text>Cliente de tarjeta</text>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <text><b>Tarjeta Grupar</b></text>
                        </Col>
                        <Col span={12}>
                            <text><b>Tarjeta Grupar</b></text>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="nombreEmbozado"
                                rules={[{ required: true, message: "Seleccione nombre embozado" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Nombre embozado"
                                    placeholder="Nombre embozado"
                                    options={[
                                        {
                                            title: "Prueba Matriz 1",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Prueba Matriz 2",
                                            value: "2",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="segundaLineaDeEmbozado"
                                rules={[
                                    { required: true, message: "Ingrese segunda linea de embozado" },
                                ]}
                            >
                                <FloatInput outline placeholder="Segunda linea de embozado" label="Segunda linea de embozado" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Col span={12}>
                        <Form.Item name="emiteTarjeta">
                            <Checkbox>Emite tarjeta</Checkbox>
                        </Form.Item>
                    </Col>
                </Card>

                <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
                    <h1 className="purple-title">Parámetros de la tarjeta</h1>
                    <Row gutter={24}>
                        <Col span={12}>
                            <text>Moneda</text>
                        </Col>
                        <Col span={12}>
                            <text>Precio</text>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <text><b>-</b></text>
                        </Col>
                        <Col span={12}>
                            <text><b>-</b></text>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="modeloBonificacion"
                                rules={[
                                    { required: true, message: "Ingrese modelo bonificación" },
                                ]}
                            >
                                <FloatInput outline placeholder="Modelo Bonificación" label="Modelo Bonificación" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="periodosBonificados"
                                rules={[
                                    { required: true, message: "Ingrese Periodos Bonificados" },
                                ]}
                            >
                                <FloatInput outline placeholder="Periodos Bonificados" label="Periodos Bonificados" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <text>Precio Emisión</text>
                        </Col>
                        <Col span={6}>
                            <text>Precio Renovación</text>
                        </Col>
                        <Col span={6}>
                            <text>Precio Reemplazo</text>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <text><b>N/D</b></text>
                        </Col>
                        <Col span={6}>
                            <text><b>N/D</b></text>
                        </Col>
                        <Col span={6}>
                            <text><b>N/D</b></text>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <text>Porcent Bonif Emisión</text>
                        </Col>
                        <Col span={6}>
                            <text>Porcent Bonif Renovación</text>
                        </Col>
                        <Col span={6}>
                            <text>Porcent Bonif Renovación</text>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <text><b>N/D</b></text>
                        </Col>
                        <Col span={6}>
                            <text><b>50</b></text>
                        </Col>
                        <Col span={6}>
                            <text><b>50</b></text>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <text>Cargo Emisión</text>
                        </Col>
                        <Col span={6}>
                            <text>Cargo Renovación</text>
                        </Col>
                        <Col span={6}>
                            <text>Cargo Reemplazo</text>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <text><b>N/D</b></text>
                        </Col>
                        <Col span={6}>
                            <text><b>-</b></text>
                        </Col>
                        <Col span={6}>
                            <text><b>0</b></text>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <p>Renovación Automatica</p>
                        </Col>
                        <Col span={12}>
                            <p>Urgente</p>
                        </Col>

                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item name="renovacionAutomatica">
                                <Radio.Group name="radiogroup" defaultValue={1}>
                                    <Row justify="space-between">
                                        <Radio value={'SI'}>SI</Radio>
                                        <Radio value={'NO'}>NO</Radio>
                                    </Row>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="moneda">
                                <Radio.Group name="radiogroup" defaultValue={1}>
                                    <Row justify="space-between">
                                        <Radio value={'SI'}>SI</Radio>
                                        <Radio value={'NO'}>NO</Radio>
                                    </Row>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <p>% Asignación</p>
                        </Col>
                        <Col span={12}>
                            <p>Limite Asignado</p>
                        </Col>

                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <text><b>0</b></text>
                        </Col>
                        <Col span={6}>
                            <text><b>0</b></text>
                        </Col>
                    </Row>
                </Card>
            </>
        );
    };

    return (
        <div>
            {" "}

            <Edit component={FormularioTarjetaInstantaneaNueva} textModalConfirm="¿Desea confirmar el alta de cuenta?" textBtnModalConfirm="Aplicar confirmación" />
        </div>
    );
}