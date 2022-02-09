import React, { useState } from 'react';
import { Radio,Form,Typography, Card,Row,Col} from 'antd';
import Edit from "../../../components/organisms/Edit/index";
import FloatInput from '../../../components/molecules/FloatInput';
const { Title, Text } = Typography;
const FormUsuNew = () => {

    const [value, setValue] = useState("");
    const onChange = e => {
    setValue(e.target.value);
    };

    const [value2, setValue2] = useState("");
    const onChange2 = e => {
    setValue2(e.target.value);
    };

    const [value3, setValue3] = useState("");
    const onChange3 = e => {
    setValue3(e.target.value);
    };

  const FormularioUsuario = () => {
    return (<>

        <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
            <Title level={4} style={{ color: '#ab218e' }}>Datos Principales</Title>
            <Col span={6}>
                <Form.Item name='nombre'>
                    <FloatInput outline type="text" label='Nombre' placeholder='Nombre'></FloatInput>
                </Form.Item>

                <Form.Item name='apellido'>
                    <FloatInput outline type="text" label='Apellido' placeholder='Apellido'></FloatInput>
                </Form.Item>
            </Col>
            <Text>Tipo de Documento</Text>
            <Form.Item name='tipodocumento'>
                    <Radio.Group onChange={onChange2} value={value2}>
                        <Row justify="space-between">
                        <Col span={4}>
                            <Radio style={{ marginTop: 10 }} value={"DNI"}>DNI</Radio>
                            <Radio style={{ marginTop: 10 }} value={"CUIT"}>CUIT</Radio>
                        </Col>
                        <Col span={8}>
                            <Radio style={{ marginTop: 10 }} value={"LIBRETA CIVICA"} >LIBRETA CIVICA</Radio>
                            <Radio style={{ marginTop: 10 }} value={"LIBRETA DE ENROLAMIENTO"}>LIBRETA DE ENROLAMIENTO</Radio>
                        </Col>
                        <Col span={4}>
                            <Radio style={{ marginTop: 10 }} value={"CUIL"}>CUIL</Radio>
                            <Radio style={{ marginTop: 10 }} value={"PASAPORTE"} >PASAPORTE</Radio>
                        </Col>
                        <Col span={4}>
                            <Radio style={{ marginTop: 10 }} value={"CI"}>CI</Radio>
                        </Col>
                        </Row>
                    </Radio.Group>
            </Form.Item>
            <Col span={6}>
                <Form.Item name='documento'>
                    <FloatInput outline type="number" label='N° de Documento' placeholder='N° de Documento'></FloatInput>
                </Form.Item>

                <Form.Item name='email'>
                    <FloatInput outline type="email" label='E-mail' placeholder='Email'></FloatInput>
                </Form.Item>
            </Col>
            <Text>Estado</Text>
            <Form.Item name='estado'>
                <Radio.Group onChange={onChange3} value={value3}>
                    <Radio  value={"Habilitado"}>Habilitado</Radio> <br />
                    <Radio  value={"Deshabilitado"} style={{marginTop: 14}}>Deshabilitado</Radio><br />
                    <Radio  value={"Baja"} style={{marginTop: 14}}>Baja</Radio><br />
                </Radio.Group>
            </Form.Item>
        </Card>
        <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
            <Title level={4}  style={{ color: '#ab218e' }}>Perfil</Title>
            <Col span={6}>
                <Form.Item  name='usuario'>
                <FloatInput outline type="text" label='Nombre de usuario' placeholder='Nombre de usuario'></FloatInput>
                </Form.Item>
            </Col>
            <Text>Perfil</Text>
            <Form.Item name='perfil'>
                <Radio.Group onChange={onChange} value={value}>
                    <Row >
                        <Col span={5}>
                            <Radio style={{ marginTop: 10 }} value={"Prueba QA"}>Prueba QA</Radio>
                            <Radio style={{ marginTop: 10 }} value={"Nueva prueba perfil QA"}>Nueva prueba perfil QA</Radio>
                            <Radio style={{ marginTop: 10 }} value={"Prueba"} >Prueba</Radio>
                            <Radio style={{ marginTop: 10 }} value={"Prueba perfil Admin"} >Prueba perfil Admin</Radio>
                        </Col>
                        <Col span={4}>
                            <Radio style={{ marginTop: 10 }} value={"TotalCoin - Consultas"}>TotalCoin - Consultas</Radio>
                            <Radio style={{ marginTop: 10 }} value={"PruebasFraude"}>PruebasFraude</Radio>
                            <Radio style={{ marginTop: 10 }} value={"Perfil CX"} >Perfil CX</Radio>
                            <Radio style={{ marginTop: 10 }} value={"TotalCoin - Admin"} >TotalCoin - Admin</Radio>
                        </Col>
                    </Row>
                </Radio.Group>
            </Form.Item>
        </Card>
  </>)
  };

  return(
  <>
    <Edit 
        component={FormularioUsuario}
        textBtnModalConfirm="¿Confirmar crear usuario?"
        textBtnSave='Crear usuario'
        textBtnModalConfirm="Si, crear" />
  </>);
}
export default FormUsuNew;
