import React, { useState } from 'react';
import { Radio,Form,Typography, Card} from 'antd';
import FloatInput from '../../../components/molecules/FloatInput';
const { Group } = Radio;
const { Title } = Typography;
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
    
  return (<>  
        
        <Card>
        <Title level={2}>Datos Principales</Title>
            
        <Form.Item style={{ width: 414 }} name='nombre'>
             <FloatInput type="text" label='Nombre' placeholder='Nombre'></FloatInput>
        </Form.Item>
        
        <Form.Item style={{ width: 414 }} name='apellido'>
             <FloatInput type="text" label='Apellido' placeholder='Apellido'></FloatInput>
        </Form.Item>
        <Title level={5}>Tipo de Documento</Title>
        <Form.Item name='tipodocumento'>
            <Radio.Group onChange={onChange2} value={value2}>
                <Radio  value={"DNI"}>DNI</Radio> 
                <Radio  value={"LIBRETA CIVICA"} style={{marginLeft: 139}} >LIBRETA CIVICA</Radio>
                <Radio  value={"CUIL"} style={{marginLeft: 200,marginTop: 14}}>CUIL</Radio>
                <Radio  value={"CI"} style={{marginLeft: 150,marginTop: 14}} >CI</Radio><br />
                <Radio  value={"CUIT"} style={{marginTop: 14}}>CUIT</Radio>
                <Radio  value={"LIBRETA DE ENROLAMIENTO"} style={{marginLeft: 133,marginTop: 14}} >LIBRETA DE ENROLAMIENTO</Radio>
                <Radio  value={"PASAPORTE"} style={{marginLeft: 119,marginTop: 14}} >PASAPORTE</Radio> 
            </Radio.Group>
        </Form.Item>

        <Form.Item style={{ width: 414 }} name='documento'>
             <FloatInput type="number" label='N° de Documento' placeholder='N° de Documento'></FloatInput>
        </Form.Item>

        <Form.Item style={{ width: 414 }} name='email'>
             <FloatInput type="email" label='E-mail' placeholder='Email'></FloatInput>
        </Form.Item>
        <Title level={5}>Estado</Title>
        <Form.Item name='estado'>
            <Radio.Group onChange={onChange3} value={value3}>
                <Radio  value={"Habilitado"}>Habilitado</Radio> <br />
                <Radio  value={"Deshabilitado"} style={{marginTop: 14}}>Deshabilitado</Radio><br />
                <Radio  value={"Baja"} style={{marginTop: 14}}>Baja</Radio><br />
            </Radio.Group>
        </Form.Item>
        </Card>

        <Card>  
            <Title level={2}>Perfil</Title>
            
            <Form.Item style={{ width: 414 }} name='usuario'>
               <FloatInput type="text" label='Nombre de usuario' placeholder='Nombre de usuario'></FloatInput>
            </Form.Item>

            <Title level={5}>Perfil</Title>
            <Form.Item name='perfil'>
                <Group onChange={onChange} value={value}>
                    <Radio  value={"Prueba QA"}>Prueba QA</Radio> 
                    <Radio  value={"TotalCoin - Consultas"} style={{marginLeft: 139}} >TotalCoin - Consultas</Radio><br />
                    <Radio  value={"Nueva prueba perfil QA"} style={{marginTop: 14}}>Nueva prueba perfil QA</Radio>
                    <Radio  value={"PruebasFraude"} style={{marginLeft: 59,marginTop: 14}} >PruebasFraude</Radio><br />
                    <Radio  value={"Prueba"} style={{marginTop: 14}}>Prueba</Radio>
                    <Radio  value={"Perfil CX"} style={{marginLeft: 162,marginTop: 14}} >Perfil CX</Radio><br />
                    <Radio  value={"Prueba perfil Admin"} style={{marginTop: 14}} >Prueba perfil Admin</Radio> 
                    <Radio  value={"TotalCoin - Admin"} style={{marginLeft: 83,marginTop: 14}} >TotalCoin - Admin</Radio>
                </Group>
            </Form.Item>
        </Card>  
  </>)
};

export default FormUsuNew;
