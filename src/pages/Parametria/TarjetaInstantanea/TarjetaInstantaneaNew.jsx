import React from "react";
import { Card, Form, Radio, Row, Col, DatePicker, Text } from "antd";
import Edit from "../../../components/organisms/Edit/index";
import FloatInput from '../../../components/molecules/FloatInput';
import FloatSelected from "../../../components/molecules/FloatSelected";

export default function TarjetaInstantaneaNew() {
    const FormularioTarjetaInstantaneaNueva = () => {


        return (
            <>
                <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
                    <h1 className="purple-title">Alta Cliente</h1>
                    <Row>
                        <Col span={8}>
                            <text>ID de Cliente</text>
                        </Col>
                        <Col span={8}>
                            <text>Fecha de Alta</text>
                        </Col>
                        <Col span={8}>
                            <text>Emisor</text>
                         </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                             <text><b> N/D</b></text>
                        </Col>
                        <Col span={8}>
                             <text><b> N/D</b></text>
                        </Col>
                        <Col span={8}>
                             <text><b> Tarjeta Grupar</b></text>
                        </Col>
                    </Row>
                    <h1 className="purple-title">Informacion personal</h1>

                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={12}>
                            <Form.Item
                                name="nacionalidad"
                                rules={[{ required: true, message: "Seleccione nacionalidad" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Nacionalidad"
                                    placeholder="Nacionalidad"
                                    options={[
                                        {
                                            title: "Argentina",
                                            value: "ARG",
                                            disabled: false,
                                        },
                                        {
                                            title: "Mexico",
                                            value: "MX",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

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

                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={12}>
                            <Form.Item
                                name="doc"
                                rules={[
                                    { required: true, message: "Ingrese número de documento" },
                                ]}>
                                <FloatInput
                                    placeholder="N° de Documento"
                                    label="N° de Documento"
                                    outline
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={12}>
                            <Form.Item
                                name="nombres"
                                rules={[{ required: true, message: "Ingrese nombre" }]}
                            >
                                <FloatInput outline placeholder="Nombres" label="Nombres" />
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="apellidos"
                                rules={[{ required: true, message: "Ingrese apellido" }]}
                            >
                                <FloatInput outline placeholder="Apellidos" label="Apellidos" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={12}>
                            <Form.Item
                                name="fechaNacimiento"
                                rules={[{ required: true, message: "Ingrese fecha de nacimiento" }]}
                            >
                                <DatePicker placeholder="Fecha de Nacimiento" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item name="sexo">
                        <Row>
                            <p>Sexo</p>
                        </Row>

                        <Radio.Group name="radiogroup" defaultValue={1}>
                            <Row justify="space-between">
                                <Radio value={'M'}>Masculino</Radio>

                                <Radio value={'F'}>Femenino</Radio>

                                <Radio value={'X'}>No Binario</Radio>
                            </Row>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item name="estadoCivil">
                        <Row>
                            <p>Estado Civil</p>
                        </Row>

                        <Radio.Group name="radiogroup" defaultValue={1}>
                            <Row justify="space-between">
                                <Radio value={1}>Soltero</Radio>

                                <Radio value={2}>Casado</Radio>

                                <Radio value={3}>Viudo</Radio>
                            </Row>
                        </Radio.Group>
                    </Form.Item>




                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="estadoActividad"
                                rules={[{ required: true, message: "Seleccione Estado Actividad" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Estado Actividad"
                                    placeholder="Estado Actividad"
                                    options={[
                                        {
                                            title: "Actividad 1",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Actividad 2",
                                            value: "2",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="ocupacion"
                                rules={[
                                    { required: true, message: "Ingrese ocupación" },
                                ]}
                            >
                                <FloatInput outline placeholder="Ocupacion" label="Ocupacion" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="codigoActividad"
                                rules={[{ required: true, message: "Seleccione Código de Actividad" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="codigo de Actividad"
                                    placeholder="Código de  Actividad"
                                    options={[
                                        {
                                            title: "Codigo 1",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Codigo 2",
                                            value: "2",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: "Ingrese E-Mail" }]}
                            >
                                <FloatInput outline type="email" label='E-mail*' placeholder='E-mail*'></FloatInput>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="CuitCuil"
                                rules={[{ required: true, message: "Ingrese Cuit/ Cuil" }]}
                            >
                                <FloatInput outline placeholder="Cuit/Cuil" label="Cuit/Cuil" />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                name="ibc"
                                rules={[{ required: true, message: "Ingrese IBC" }]}
                            >
                                <FloatInput outline placeholder="IBC" label="ibc" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={24}>

                        <Col span={12}>
                            <Form.Item
                                name="numeroDeCliente"
                                rules={[{ required: true, message: "Ingrese Numero de Cliente" }]}
                            >
                                <FloatInput outline placeholder="Numero de cliente interno" label="Numero de cliente interno" />
                            </Form.Item>
                        </Col>
                    </Row>

                </Card>

                <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
                    <h1 className="purple-title">Domicilio particular</h1>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="pais"
                                rules={[
                                    { required: true, message: "Ingrese pais" },
                                ]}
                            >
                                <FloatInput outline placeholder="Pais" label="Pais" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="provincia"
                                rules={[{ required: true, message: "Seleccione provincia" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Provincia"
                                    placeholder="Provincia"
                                    options={[
                                        {
                                            title: "Buenos Aires",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Cordoba",
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
                                name="localidad"
                                rules={[{ required: true, message: "Ingrese Localidad" }]}
                            >
                                <FloatInput outline placeholder="Localidad" label="Localidad" />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                name="calle"
                                rules={[{ required: true, message: "Ingrese calle" }]}
                            >
                                <FloatInput outline placeholder="Calle" label="Calle" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={3}>
                            <Form.Item
                                name="calleNumero"
                                rules={[
                                    { required: true, message: "Ingrese Numero de calle" },
                                ]}
                            >
                                <FloatInput outline placeholder="Numero" label="Numero" />
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <Form.Item
                                name="callepiso"
                                rules={[
                                    { required: true, message: "Ingrese Numero de piso" },
                                ]}
                            >
                                <FloatInput outline placeholder="Piso" label="Piso" />
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <Form.Item
                                name="calleDepartamento"
                                rules={[
                                    { required: true, message: "Ingrese departamento" },
                                ]}
                            >
                                <FloatInput outline placeholder="Depto" label="Depto" />
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <Form.Item
                                name="codigoPostal"
                                rules={[{ required: true, message: "Seleccione código postal" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Código postal"
                                    placeholder="Código postal"
                                    options={[
                                        {
                                            title: "112233",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "334455",
                                            value: "2",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="barrio"
                                rules={[{ required: true, message: "Seleccione barrio" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Barrio"
                                    placeholder="Barrio"
                                    options={[
                                        {
                                            title: "Belgrano",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Saavedra",
                                            value: "2",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                </Card>

                <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
                    <h1 className="purple-title">Información Laboral</h1>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="empresa"
                                rules={[
                                    { required: true, message: "Ingrese empresa" },
                                ]}
                            >
                                <FloatInput outline placeholder="Empresa" label="Empresa" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="cargo"
                                rules={[
                                    { required: true, message: "Ingrese cargo" },
                                ]}
                            >
                                <FloatInput outline placeholder="Cargo" label="Cargo" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={12}>
                            <Form.Item
                                name="fechaIngreso"
                                rules={[{ required: true, message: "Ingrese fecha de ingreso" }]}
                            >
                                <DatePicker placeholder="Fecha de Ingreso" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item name="moneda">
                        <Row>
                            <p>Moneda</p>
                        </Row>

                        <Radio.Group name="radiogroup" defaultValue={1}>
                            <Row justify="space-between">
                                <Radio value={1}>DOLAR $$$</Radio> 
                                <Radio value={2}>Moneda local</Radio> 
                             </Row>
                        </Radio.Group>
                    </Form.Item>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="remuneracion"
                                rules={[{ required: true, message: "Ingrese remuneracion" }]}
                            >
                                <FloatInput outline placeholder="Remuneracion" label="Remuneracion" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="responsableNombre"
                                rules={[
                                    { required: true, message: "Ingrese nombre del responsable" },
                                ]}
                            >
                                <FloatInput outline placeholder="Responsable Nombre" label="Responsable Nombre" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="responsableApellido"
                                rules={[
                                    { required: true, message: "Ingrese apellido del responsable" },
                                ]}
                            >
                                <FloatInput outline placeholder="Responsable apellido" label="Responsable apellido" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="Telefono"
                                rules={[
                                    { required: true, message: "Ingrese numero de telefono" },
                                ]}
                            >
                                <FloatInput outline placeholder="Telefono" label="Telefono" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Col span={12}>
                        <Form.Item name="responsableDeDocumento">
                            <Row>
                                <p>Responsable documento</p>
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
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="responsableDocumento"
                                rules={[
                                    { required: true, message: "Ingrese responsable documento" },
                                ]}
                            >
                                <FloatInput outline placeholder="Responsable Documento" label="Responsable Documento" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Card>

                <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
                    <h1 className="purple-title">Domicilio Laboral</h1>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="pais"
                                rules={[
                                    { required: true, message: "Ingrese pais" },
                                ]}
                            >
                                <FloatInput outline placeholder="Pais" label="Pais" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="provincia"
                                rules={[{ required: true, message: "Seleccione provincia" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Provincia"
                                    placeholder="Provincia"
                                    options={[
                                        {
                                            title: "Buenos Aires",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Cordoba",
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
                                name="localidad"
                                rules={[{ required: true, message: "Ingrese Localidad" }]}
                            >
                                <FloatInput outline placeholder="Localidad" label="Localidad" />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                name="calle"
                                rules={[{ required: true, message: "Ingrese calle" }]}
                            >
                                <FloatInput outline placeholder="Calle" label="Calle" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={24}>
                        <Col span={3}>
                            <Form.Item
                                name="calleNumero"
                                rules={[
                                    { required: true, message: "Ingrese Numero de calle" },
                                ]}
                            >
                                <FloatInput outline placeholder="Numero" label="Numero" />
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <Form.Item
                                name="callepiso"
                                rules={[
                                    { required: true, message: "Ingrese Numero de piso" },
                                ]}
                            >
                                <FloatInput outline placeholder="Piso" label="Piso" />
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <Form.Item
                                name="calleDepartamento"
                                rules={[
                                    { required: true, message: "Ingrese departamento" },
                                ]}
                            >
                                <FloatInput outline placeholder="Depto" label="Depto" />
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <Form.Item
                                name="codigoPostal"
                                rules={[{ required: true, message: "Seleccione código postal" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Código postal"
                                    placeholder="Código postal"
                                    options={[
                                        {
                                            title: "112233",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "334455",
                                            value: "2",
                                            disabled: false,
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="barrio"
                                rules={[{ required: true, message: "Seleccione barrio" }]}
                            >
                                <FloatSelected
                                    outline
                                    label="Barrio"
                                    placeholder="Barrio"
                                    options={[
                                        {
                                            title: "Belgrano",
                                            value: "1",
                                            disabled: false,
                                        },
                                        {
                                            title: "Saavedra",
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
                                name="Telefono"
                                rules={[
                                    { required: true, message: "Ingrese numero de telefono" },
                                ]}
                            >
                                <FloatInput outline placeholder="Telefono" label="Telefono" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Card>

            </>
        );
    };

    return (
        <div>
            {" "}
 
            <Edit component={FormularioTarjetaInstantaneaNueva}  textModalConfirm="¿Desea confirmar el alta de cuenta?" textBtnModalConfirm="Aplicar confirmación" />
        </div>
    );
}