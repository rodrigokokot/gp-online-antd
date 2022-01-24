import React from 'react';
import { Switch, Card, Form, Row, Col, Button} from 'antd';
import {useHistory, useParams} from 'react-router-dom'
import FloatInput from '../../components/molecules/FloatInput';
import '../../components/organisms/SearchForm/index.less'

const GestionSucursalesEdit = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const {type}= useParams();

  const onFinish = (values) =>{
      console.log(values)
      console.log({type});
  }

  
  
  
  return (


      <Form 
                  form={form}
                  name="advanced_search"
                  className="ant-advanced-search-form"
                  onFinish={onFinish}
                  size="large"
        >

        <h3>Datos Principales</h3>

                {type==='new' ?         
             <Form.Item name='codigo'>
                 <FloatInput label='Codigo' placeholder='Código'></FloatInput>
            </Form.Item> : <></>}



        <Form.Item name='descripcion'>
                    <FloatInput label='Descripcion' placeholder='Descripcion'/>
        </Form.Item>


            {type==='edit' ?         <>
        <p>Estado de la Sucursal</p>
        <Form.Item name='estado'>         
                    <Switch unCheckedChildren="Inactivo" checkedChildren="Activo" />                
        </Form.Item>
        </> : <></>}
  
        



        <h3>Domicilio</h3>

        <Row gutter={24}>
            <Col>
                <Form.Item name='calle'>
                    <FloatInput label='Calle' placeholder='Calle'></FloatInput>
                </Form.Item>

            </Col>

            <Col>
                <Form.Item name='num'>
                    <FloatInput label='Número' placeholder='Número'></FloatInput>
                </Form.Item>
            </Col>

            <Col>
                <Form.Item name='piso'>
                     <FloatInput label='Piso' placeholder='Piso'></FloatInput>
                </Form.Item>
            </Col>

            <Col>
                <Form.Item name='piso'>
                    <FloatInput label='Depto' placeholder='Depto'></FloatInput>
                </Form.Item>
            </Col>
        </Row>

        <Row>
            <Col>
                <Form.Item name='localidad'>
                    <FloatInput label='Localidad' placeholder='Localidad'></FloatInput>
                </Form.Item>
            </Col>
        </Row>

        <Row>
            <Col>
                <Form.Item name='provincia'>
                    <FloatInput label='Provincia' placeholder='Provincia'></FloatInput>
                </Form.Item>
            </Col>
        </Row>

        <Row>
            <Col>
                <Form.Item name='telefono'>
                    <FloatInput label='Telefono' placeholder='Telefono'></FloatInput>
                </Form.Item>
            </Col>
        </Row>



        <Button type='primary' htmlType='submit'>
            {type==='new' ? 'Crear Sucursal' : 'Guardar Cambios'}
        </Button>

        <Button onClick={() => history.goBack()}>
            Cancelar
        </Button>
      </Form>
  )
};

export default GestionSucursalesEdit