import React from "react";
import { Card, Form, Radio, Row, Col, Checkbox, Button } from "antd";
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
                            <text><b> DNI-12987302</b></text>
                        </Col>
                        <Col span={8}>
                            <text><b> Prueba</b></text>
                        </Col>
                        <Col span={8}>
                            <text><b> Pepito</b></text>
                        </Col>
                    </Row>
                </Card>

                <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>

                    <h1 className="purple-title">Información de la cuenta</h1>
                    <Row>
                        <Col span={6}>
                            <text>Emisor</text>
                        </Col>
                        <Col span={6}>
                            <text>Sucursal</text>
                        </Col>
                        <Col span={6}>
                            <text>Cuenta</text>
                        </Col>
                        <Col span={6}>
                            <text>Fecha de alta</text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <text><b> Tarjeta Grupar</b></text>
                        </Col>
                        <Col span={6}>
                            <text><b> Cordoba</b></text>
                        </Col>
                        <Col span={6}>
                            <text><b> N/D</b></text>
                        </Col>
                        <Col span={6}>
                            <text><b> N/D</b></text>
                        </Col>
                    </Row>


                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="marca"
                                rules={[{ required: true, message: "Seleccione marca" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Marca"
                                    placeholder="Marca"
                                    options={[
                                        {
                                            title: "Marca 1",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Marca 2",
                                            value: "2",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="cartera"
                                rules={[
                                    { required: true, message: "Ingrese Cartera" },
                                ]}
                            >
                                <FloatInput outline placeholder="Cartera" label="Cartera" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="marca"
                                rules={[{ required: true, message: "Seleccione marca" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Marca"
                                    placeholder="Marca"
                                    options={[
                                        {
                                            title: "Marca 1",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Marca 2",
                                            value: "2",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="cartera"
                                rules={[
                                    { required: true, message: "Ingrese Cartera" },
                                ]}
                            >
                                <FloatInput outline placeholder="Cartera" label="Cartera" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="producto"
                                rules={[{ required: true, message: "Seleccione producto" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Producto"
                                    placeholder="Producto"
                                    options={[
                                        {
                                            title: "Tarjeta Grupar",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Tarjeta 2",
                                            value: "2",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="grupoDeCierre"
                                rules={[{ required: true, message: "Seleccione grupo de cierre" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Grupo de cierre"
                                    placeholder="Grupo de cierre"
                                    options={[
                                        {
                                            title: "Cierre Grupar Prueba",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Cierre Grupar Prueba 2",
                                            value: "2",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="grupoDeAfinidad"
                                rules={[{ required: true, message: "Seleccione grupo de afinidad" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Grupo de afinidad"
                                    placeholder="Grupo de afinidad"
                                    options={[
                                        {
                                            title: "Grupar bonificacion 100",
                                            value: "1",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                name="codigoDeEnvio"
                                rules={[{ required: true, message: "Seleccione código de envio" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Codigo de envio"
                                    placeholder="Codigo de envio"
                                    options={[
                                        {
                                            title: "envio Standard",
                                            value: "1",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="envioDeCuenta"
                                rules={[
                                    { required: true, message: "Ingrese envio de cuenta" },
                                ]}
                            >
                                <FloatInput outline placeholder="Envio de cuenta" label="Envio de Cuenta" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <text><b> Sucursal: -</b></text>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="envioDePlastico"
                                rules={[
                                    { required: true, message: "Ingrese envio de plastico" },
                                ]}
                            >
                                <FloatInput outline placeholder="Envio de Plástico" label="Envio de Plástico" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <text><b> Sucursal: -</b></text>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="envioDePin"
                                rules={[{ required: true, message: "Seleccione Envio de PIN" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Envio de PIN"
                                    placeholder="Envio de PIN"
                                    options={[
                                        {
                                            title: "Domicilio Particular 1",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Domicilio Laboral",
                                            value: "2",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="tipoDeEmisionDeResumen"
                                rules={[
                                    { required: true, message: "Ingrese Tipo de emision de resumen" },
                                ]}
                            >
                                <FloatInput outline placeholder="Tipo de emision de resumen" label="Tipo de emision de resumen" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="modeloDeSeguroDeVida"
                                rules={[{ required: true, message: "Seleccione Modelo de seguro de vida" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Modelo de seguro de vida"
                                    placeholder="Modelo de seguro de vida"
                                    options={[
                                        {
                                            title: "Standard",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Premium",
                                            value: "2",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="modeloDeSeguroDeDesempleo"
                                rules={[
                                    { required: true, message: "Ingrese Modelo de seguro de desempleo" },
                                ]}>
                                <FloatInput outline placeholder="Modelo de seguro de desempleo" label="Modelo de seguro de desempleo" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="promotor"
                                rules={[{ required: true, message: "Seleccione Promotor" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Promotor"
                                    placeholder="Promotor"
                                    options={[
                                        {
                                            title: "Calzados Diez",
                                            value: "1",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Card>

                <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
                    <h1 className="purple-title">Datos adicionales</h1>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="accionComercial"
                                rules={[
                                    { required: true, message: "Ingrese la acccion comercial" },
                                ]}
                            >
                                <FloatInput outline placeholder="Accion comercial" label="Accion comercial" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="tipoDeProductoOrigen"
                                rules={[{ required: true, message: "Ingrese tipo de producto origen" }]}>
                                <FloatInput outline placeholder="Tipo de producto origen" label="Tipo de producto origen" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="productoRecalificado"
                                rules={[{ required: true, message: "Ingrese producto recalificado" }]}>
                                <FloatInput outline placeholder="Producto recalificado" label="Producto recalificado" />
                            </Form.Item>
                        </Col>
                    </Row>


                </Card>

                <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
                    <h1 className="purple-title">Informacion de limites</h1>

                    <Row>
                        <Col span={12}>
                            <p>Moneda</p>
                        </Col>
                        <Col span={12}>
                            <p>Monto</p>
                        </Col>

                    </Row>
                    <Row >
                        <Col span={12}>
                            <Form.Item name="moneda">
                                <Radio.Group name="radiogroup" defaultValue={1}>
                                    <Row justify="space-between">
                                        <Radio value={1}>DOLAR $$$</Radio>
                                        <Radio value={2}>Moneda local</Radio>
                                    </Row>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                name="monto"
                                rules={[
                                    { required: true, message: "Ingrese monto" },
                                ]}>

                                <FloatInput outline placeholder="Monto" label="Monto" />
                            </Form.Item>
                        </Col>

                        <Col span={6} style={{ textAlign: "right" }}>
                            <Button type="primary" size="small">
                                Calcular
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <p>Moneda</p>
                        </Col>
                        <Col span={12}>
                            <p>Limite financiación</p>
                        </Col>

                    </Row>
                    <Row >
                        <Col span={12}>
                            <Form.Item name="moneda">
                                <Radio.Group name="radiogroup" defaultValue={1}>
                                    <Row justify="space-between">
                                        <Radio value={1}>DOLAR $$$</Radio>
                                        <Radio value={2}>Moneda local</Radio>
                                    </Row>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                name="limiteFinanciacion"
                                rules={[
                                    { required: true, message: "Ingrese limite de financiacion" },
                                ]}>

                                <FloatInput outline placeholder="Limite financiación" label="Limite financiación" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <text>Compra Contado</text>
                        </Col>
                        <Col span={6}>
                            <text>Compra Cuotas</text>
                        </Col>
                        <Col span={6}>
                            <text>Adelantos</text>
                        </Col>
                        <Col span={6}>
                            <text>Adelantos Cuotas</text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <text><b> 1000</b></text>
                        </Col>
                        <Col span={6}>
                            <text><b> 2000</b></text>
                        </Col>
                        <Col span={6}>
                            <text><b> 1000</b></text>
                        </Col>
                        <Col span={6}>
                            <text><b> 2000</b></text>
                        </Col>
                    </Row>
                </Card>

                <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
                    <h1 className="purple-title">Forma de pago en Pesos</h1>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item name="cargos">
                                <Checkbox>Efectivo</Checkbox>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="tipoDeDebito"
                                rules={[{ required: true, message: "Seleccione tipo de debito" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Tipo de Debito"
                                    placeholder="Tipo de Debito"
                                    options={[
                                        {
                                            title: "Debito 1",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Debito 2",
                                            value: "2",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="tipoDeCuenta"
                                rules={[{ required: true, message: "Seleccione tipo de cuenta" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Tipo de Cuenta"
                                    placeholder="Tipo de Cuenta"
                                    options={[
                                        {
                                            title: "Cuenta 1",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Cuenta 2",
                                            value: "2",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                        <text><b> Número de cuenta: -</b></text>
                        </Col>
                    </Row>

                </Card>

                <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
                    <h1 className="purple-title">Forma de pago en Dolares</h1>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item name="cargos">
                                <Checkbox>Efectivo</Checkbox>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="tipoDeDebito"
                                rules={[{ required: true, message: "Seleccione tipo de debito" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Tipo de Debito"
                                    placeholder="Tipo de Debito"
                                    options={[
                                        {
                                            title: "Debito 1",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Debito 2",
                                            value: "2",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="tipoDeCuenta"
                                rules={[{ required: true, message: "Seleccione tipo de cuenta" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Tipo de Cuenta"
                                    placeholder="Tipo de Cuenta"
                                    options={[
                                        {
                                            title: "Cuenta 1",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Cuenta 2",
                                            value: "2",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                        <text><b> Número de cuenta: -</b></text>
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