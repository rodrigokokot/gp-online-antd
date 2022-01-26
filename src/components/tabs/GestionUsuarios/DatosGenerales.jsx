import React from 'react';
import { Switch,Radio,Form,Typography,Button} from 'antd';

import {useHistory, useParams} from 'react-router-dom'
import FloatInput from '../../molecules/FloatInput';
const { Group } = Radio;
const { Title } = Typography;
const DatosGenerales = () => {
    const [form] = Form.useForm();
    const history = useHistory();
    const {type}= useParams();

    const onFinish = (values) =>{
        console.log("finish",values)
        console.log({type});
    }
    
    const [value, setValue] = React.useState(1);
    const onChange = e => {
    console.log('radio checked 1', e.target.value);
    setValue(e.target.value);
    console.log('radio luego checked 1', e.target.value);
    };

    const [value2, setValue2] = React.useState(1);
    const onChange2 = e => {
    console.log('radio checked 2', e.target.value);
    setValue2(e.target.value);
    console.log('radio luego checked 2', e.target.value);
    };

    const [value3, setValue3] = React.useState(1);
    const onChange3 = e => {
    console.log('radio checked 3', e.target.value);
    setValue3(e.target.value);
    console.log('radio luego checked 3', e.target.value);
    };
 
  return (<> 
    <Form 
                  form={form}
                  name="advanced_search"
                  className="ant-advanced-search-form"
                  onFinish={onFinish} 
                  size="large"
        >   
        {/*{type==='new' ?         
        <Form.Item name='codigo'>
            <FloatInput label='Codigo' placeholder='Código'></FloatInput>
       </Form.Item> : <></>}
            {type==='edit' ?         <>
        <p>Estado de Usuario</p>
        <Form.Item name='estado'>         
                    <Switch unCheckedChildren="Inactivo" checkedChildren="Activo" />                
        </Form.Item>
        </> : <></>}*/}
            
            <Title level={2}>Perfil</Title>
            <Form.Item style={{marginTop: 32}}> 
                <Title level={5}>Usuario</Title>
                <div style={{marginTop: 14}}>
                <Title level={3}>Usuario de back</Title>
                </div>
            </Form.Item>

        <Form.Item name='perfil'>
            <h1>Perfil</h1>
            <Group onChange={onChange} value={value} defaultValue={1}>
                <Radio  value={1}>Prueba QA</Radio> 
                <Radio style={{marginLeft: 137}} value={5}>TotalCoin - Consultas</Radio><br />
                <Radio style={{marginTop: 14}}value={2}>Nueva prueba perfil QA</Radio>
                <Radio style={{marginLeft: 59,marginTop: 14}} value={6}>PruebasFraude</Radio><br />
                <Radio style={{marginTop: 14}}value={3}>Prueba</Radio>
                <Radio style={{marginLeft: 162,marginTop: 14}} value={7}>Perfil CX</Radio><br />
                <Radio style={{marginTop: 14}} value={4}>Prueba perfil Admin</Radio> 
                <Radio style={{marginLeft: 83,marginTop: 14}} value={8}>TotalCoin - Admin</Radio>
            </Group>
        </Form.Item>

        <Title level={2}>Datos Principales</Title>
            
        <Form.Item name='nombre'>
             <FloatInput label='Nombre' placeholder='Calle'></FloatInput>
        </Form.Item>
        
        <Form.Item name='apellido'>
             <FloatInput label='Apellido' placeholder='Apellido'></FloatInput>
        </Form.Item>
        
        <Form.Item name='tipodocumento'>
             <h1>Tipo de documento</h1>
            <Radio.Group onChange={onChange2} value={value2}>
                <Radio  value={1}>DNI</Radio> 
                <Radio style={{marginLeft: 137}} value={5}>LIBRETA CIVICA</Radio>
                <Radio style={{marginLeft: 201,marginTop: 14}}value={2}>CUIL</Radio>
                <Radio style={{marginLeft: 150,marginTop: 14}} value={6}>CI</Radio><br />
                <Radio style={{marginTop: 14}}value={3}>CUIT</Radio>
                <Radio style={{marginLeft: 133,marginTop: 14}} value={7}>LIBRETA DE ENROLAMIENTO</Radio>
                <Radio style={{marginLeft: 119,marginTop: 14}} value={4}>PASAPORTE</Radio> 
            </Radio.Group>
        </Form.Item>

        <Form.Item name='documento'>
             <FloatInput label='N° de Documento' placeholder='N° de Documento'></FloatInput>
        </Form.Item>

        <Form.Item name='email'>
             <FloatInput label='E-mail' placeholder='Email'></FloatInput>
        </Form.Item>

        <Form.Item name='estado'>
            <h1>Estado</h1>
            <Radio.Group onChange={onChange3} value={value3}>
                <Radio  value={1}>Habilitado</Radio> <br />
                <Radio style={{marginTop: 14}}value={2}>Deshabilitado</Radio><br />
                <Radio style={{marginTop: 14}}value={3}>Baja</Radio><br />
            </Radio.Group>
        </Form.Item>

        <Button type='primary' htmlType='submit'>
            {/*type==='new' ? 'Crear Usuario' : 'Guardar Cambios'*/}Guardar
        </Button>
        
        <Button onClick={() => history.goBack()}>
            Cancelar
        </Button>
      </Form>
  </>)
};

export default DatosGenerales;
/*
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
 */
