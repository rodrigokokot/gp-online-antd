import { Card, Radio,Typography } from 'antd';
import React from 'react';
import FloatInput from '../../molecules/FloatInput';

const { Title } = Typography
const DatosGenerales = () => {
    
    const [value1, setValue1] = React.useState(1);
    const onChange1 = e => {
    console.log('radio checked 1', e.target.value);
    setValue1(e.target.value);
    };

    const [value2, setValue2] = React.useState(1);
    const onChange2 = e => {
    console.log('radio checked 2', e.target.value);
    setValue2(e.target.value);
    };
  return (<>
    <Card>
        <Title level={2}>Perfil</Title>
        <div style={{marginTop: 32}}>
            
            <Title level={5}>Usuario</Title>
            <div style={{marginTop: 14}}>
            <Title level={3}>Usuario de back</Title>
            </div>
        </div>
        <div>
        <Title level={5}>Perfil</Title>
            <div >
            <Radio.Group onChange={onChange1} value={value1}>
                <Radio  value={1}>Prueba QA</Radio> 
                <Radio style={{marginLeft: 137}} value={5}>TotalCoin - Consultas</Radio><br />
                <Radio style={{marginTop: 14}}value={2}>Nueva prueba perfil QA</Radio>
                <Radio style={{marginLeft: 59,marginTop: 14}} value={6}>PruebasFraude</Radio><br />
                <Radio style={{marginTop: 14}}value={3}>Prueba</Radio>
                <Radio style={{marginLeft: 162,marginTop: 14}} value={7}>Perfil CX</Radio><br />
                <Radio style={{marginTop: 14}} value={4}>Prueba perfil Admin</Radio> 
                <Radio style={{marginLeft: 83,marginTop: 14}} value={8}>TotalCoin - Admin</Radio>
            </Radio.Group>
            </div>
        </div>

    </Card>

    <Card>
        <Title level={2}>Datos Principales</Title>
        <div style={{marginTop: 32}}>
            Nombre
            <FloatInput value="desde back Pedro" />
        </div>
        <div style={{marginTop: 32}}>
            Apellido
            <FloatInput value="desde back Perez"/>
        </div>
        <div style={{marginTop: 32}}>
            Tipo de documento
            <div >
            <Radio.Group onChange={onChange2} value={value2}>
                <Radio  value={1}>DNI</Radio> 
                <Radio style={{marginLeft: 137}} value={5}>LIBRETA CIVICA</Radio>
                <Radio style={{marginLeft: 201,marginTop: 14}}value={2}>CUIL</Radio>
                <Radio style={{marginLeft: 150,marginTop: 14}} value={6}>CI</Radio><br />
                <Radio style={{marginTop: 14}}value={3}>CUIT</Radio>
                <Radio style={{marginLeft: 133,marginTop: 14}} value={7}>LIBRETA DE ENROLAMIENTO</Radio>
                <Radio style={{marginLeft: 119,marginTop: 14}} value={4}>PASAPORTE</Radio> 
            </Radio.Group>
            </div>
        </div>
        <div style={{marginTop: 32}}>
            Nº De Documento
            <FloatInput value="40544654" type="Number" />
        </div>
        <div style={{marginTop: 32}}>
            Email
            <FloatInput value="Pedroperez@gmail.com" />
        </div>

    </Card>
  </>)
};

export default DatosGenerales;
