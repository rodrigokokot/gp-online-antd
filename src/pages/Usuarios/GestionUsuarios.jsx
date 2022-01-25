import Table from "../../components/organisms/Table/index";
import React, { useState } from "react";
import SearchForm from "../../components/organisms/SearchForm/index";
import { GestionUsuariosSearch } from "../../Mocks/GestionUsuariosSearch";
import { Card, Button, Col, Switch, Form, Row, Modal} from "antd";
import {
  columnsGestionUsuarios,
  dataGestionUsuarios,
} from "../../Mocks/GestionUsuarios";
import { useHistory } from "react-router-dom";
import FloatInput from '../../components/molecules/FloatInput/index'

function UsuarioGes() {
    const [flag, setFlag] = useState(false);
    const [data, setData] = useState("");
  const history = useHistory();
  const [editflag, setEditflag] = useState(false);
  const [form] = Form.useForm();

  const [isModalVisible, setIsModalVisible] = useState(false); 

  
  const onFinish = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const setUsuarioNuevo = () => {
    setFlag(true);
    setEditflag(false);
  }

  const setEditarSucursal = () =>{
    setFlag(true);
    setEditflag(true);
  }

  const setBusquedaSucursal = () =>{
    setFlag(false);
    setEditflag(false);
  }

  // const routeChange = (newentry) => {
  //   let path = "gestionSucursales/new";

  //   history.push(path);
  // };


  const handleCallback = (values) => {
    if (
      Object.values(values).every((value) => {
        if (value === "" || value === undefined) {
          return true;
        }
      })
    ) {
      setData(dataGestionUsuarios);
    } else {
      setData(
        dataGestionUsuarios.filter((d) => {
          return (
            d.estado.toString() === values.estado.toString() ||
            d.descripcion.toString() === values.descripcion.toString() ||
            d.codigo.toString() === values.codigo.toString()
          );
        })
      );
    }
  };
    return (
        <>
      { flag 
             &&     <Form
                        form={form}
                        name="advanced_search"
                        className="ant-advanced-search-form"
                        onFinish={onFinish}
                        size="large"
                    >
                       
                    </Form>
             || 
                <>
                    <Col style={{ textAlign: "right", marginBottom: "25px" }}>
                    <Button type="primary" size="small" onClick={setUsuarioNuevo}>
                        Nueva Usuario
                    </Button>
                    </Col>
        
                    <SearchForm
                    array={GestionUsuariosSearch}
                    parentCallback={handleCallback}
                    />
        
                    <Card style={{ marginTop: "10px", marginBottom: "50px" }}>
                        <Table
                            columns={columnsGestionUsuarios}
                            data={data}
                            expandible={true}
                        />
                    </Card>
                </>
      }
      </>
    )
}

export default UsuarioGes
/*DENTRO DE && FORM 
 <h3>Datos Principales</h3>
            
                        {!editflag && 
                            <Form.Item name="codigo">
                            <FloatInput label="Codigo" placeholder="Código"></FloatInput>
                            </Form.Item>
                        }
            
                        <Form.Item name="descripcion">
                        <FloatInput label="Descripcion" placeholder="Descripcion" />
                        </Form.Item>
            
                        {editflag &&
                        <>
                            <p>Estado de la Sucursal</p>
                            <Form.Item name="estado">
                            <Switch unCheckedChildren="Inactivo" checkedChildren="Activo" />
                            </Form.Item>
                        </>
                        }
            
                        <h3>Perfil</h3>
            
                        <Row gutter={24}>
                        <Col>
                            <Form.Item name="nombre">
                            <FloatInput label="Nombre" placeholder="Nombre"></FloatInput>
                            </Form.Item>
                        </Col>
            
                        <Col>
                            <Form.Item name="apellido">
                            <FloatInput label="Apellido" placeholder="Apellido"></FloatInput>
                            </Form.Item>
                        </Col>
            
                        <Col>
                            <Form.Item name="piso">
                            <FloatInput label="Piso" placeholder="Piso"></FloatInput>
                            </Form.Item>
                        </Col>
            
                        <Col>
                            <Form.Item name="piso">
                            <FloatInput label="Depto" placeholder="Depto"></FloatInput>
                            </Form.Item>
                        </Col>
                        </Row>
            
                        <Row>
                        <Col>
                            <Form.Item name="localidad">
                            <FloatInput
                                label="Localidad"
                                placeholder="Localidad"
                            ></FloatInput>
                            </Form.Item>
                        </Col>
                        </Row>
            
                        <Row>
                        <Col>
                            <Form.Item name="provincia">
                            <FloatInput
                                label="Provincia"
                                placeholder="Provincia"
                            ></FloatInput>
                            </Form.Item>
                        </Col>
                        </Row>
            
                        <Row>
                        <Col>
                            <Form.Item name="telefono">
                            <FloatInput
                                label="Telefono"
                                placeholder="Telefono"
                            ></FloatInput>
                            </Form.Item>
                        </Col>
                        </Row>
            
            
            
                        <Button type="primary" htmlType="submit">
                        {editflag ? "Guardar Cambios" : "Crear Sucursal"}
                        </Button>
            
                        <Button onClick={setBusquedaSucursal}>Cancelar</Button>
            
            
                        <Modal 
                        title='¿Aplicar Cambios?'
                        centered
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={[
                            <Button key='submit' type="primary" onClick={handleOk}>
                                Aplicar Confirmacion
                            </Button>,
                            <Button key='back' onClick={handleCancel}>
                                Cancelar
                            </Button>
                        ]}>
                
                        </Modal>
    
*/