import Table from "../components/organisms/Table/index";
import React, { useState } from "react";
import SearchForm from "../components/organisms/SearchForm/index";
import { GestionSucursalesSearch } from "../Mocks/GestionSucursalesSearch";
import { Card, Button, Col, Switch, Form, Row, Modal} from "antd";
import {
  columnsGestionSucursales,
  dataGestionSucursales,
} from "../Mocks/GestionSucursales";
import { useHistory } from "react-router-dom";
import FloatInput from '../components/molecules/FloatInput/index'
import FloatSelect from '../components/molecules/FloatSelected/index'


function GestionSucursales() {
  const [data, setData] = useState("");
  const history = useHistory();
  const [flag, setFlag] = useState(false); //Flag de página para mostrar busqueda o editar/crear
  const [editflag, setEditflag] = useState(false); //Flag de edición para determinar formulario de creación o edición
  const [form] = Form.useForm();

  const [isModalVisible, setIsModalVisible] = useState(false); 

  
  const setModalVisible = () => {
    setIsModalVisible(true);
  };

  const onFinish = (values) =>{
    console.log(values)
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const setCrearSucursal = () => {
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
      setData(dataGestionSucursales);
    } else {
      setData(
        dataGestionSucursales.filter((d) => {
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
    <div>
      {console.log(flag)}
      {console.log(editflag)}
      {flag && 
        <Form
          form={form}
          id='advanced_search'
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish}
          size="large"
        >
          <h3>Datos Principales</h3>

          {!editflag && 
            <Form.Item name="codigo" rules={[{required:true, message:'Ingrese código'}]}>
              <FloatInput label="Codigo" placeholder="Código"></FloatInput>
            </Form.Item>
          }

          <Form.Item name="descripcion" rules={[{required:true, message:'Ingrese descripción'}]}>
            <FloatInput label="Descripcion" placeholder="Descripcion" />
          </Form.Item>

          {editflag &&
            <>
              <p>Estado de la Sucursal</p>
              <Form.Item name="estado" rules={[{required:true}]}>
                <Switch unCheckedChildren="Inactivo" checkedChildren="Activo" />
              </Form.Item>
            </>
          }

          <h3>Domicilio</h3>

          <Row gutter={24}>
            <Col>
              <Form.Item name="calle" rules={[{required:true, message:'Ingrese calle'}]}>
                <FloatInput label="Calle" placeholder="Calle"></FloatInput>
              </Form.Item>
            </Col>

            <Col>
              <Form.Item name="num" rules={[{required:true, message:'Ingrese número'}]}>
                <FloatInput label="Número" placeholder="Número"></FloatInput>
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
              <Form.Item  name="localidad" rules={[{required:true, message:'Ingrese localidad'}]}>
                <FloatSelect
                  label="Localidad"
                  placeholder="Localidad"
                  options={[
                    {
                      title: "San Juan",
                      value: "San Juan",
                      disabled: false,
                    },
                    {
                      title: "Mendoza",
                      value: "Mendoza",
                      disabled: false,
                    },
                    {
                      title: "San Luis",
                      value: "San Luis",
                      disabled: false,
                    },
                  ]}
                ></FloatSelect>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Item name="provincia" rules={[{required:true, message:'Ingrese provincia'}]}>
                <FloatSelect
                  label="Provincia"
                  placeholder="Provincia"
                  options={[
                    {
                      title: "San Juan",
                      value: "San Juan",
                      disabled: false,
                    },
                    {
                      title: "Mendoza",
                      value: "Mendoza",
                      disabled: false,
                    },
                    {
                      title: "San Luis",
                      value: "San Luis",
                      disabled: false,
                    },
                  ]}
                ></FloatSelect>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Item name="telefono" rules={[{required:true, message:'Ingrese teléfono'}]}>
                <FloatInput
                  label="Telefono"
                  placeholder="Telefono"
                ></FloatInput>
              </Form.Item>
            </Col>
          </Row>



          <Button type="primary" onClick={setModalVisible}>
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
          <Button form='advanced_search' key='submit' type="primary" htmlType="submit" onClick={handleOk}>
              Aplicar Confirmacion
          </Button>,
          <Button key='back' onClick={handleCancel}>
              Cancelar
          </Button>
        ]}>

      </Modal>

        </Form>
       || 
        <>
          <Col style={{ textAlign: "right", marginBottom: "25px" }}>
            <Button type="primary" size="small" onClick={setCrearSucursal}>
              Nueva Sucursal
            </Button>
          </Col>

          <SearchForm
            array={GestionSucursalesSearch}
            parentCallback={handleCallback} 
            title="Busqueda de Sucursal"
          />

          <Card style={{ marginTop: "10px", marginBottom: "50px" }}>
            <Table
              columns={columnsGestionSucursales}
              data={data}
              expandible={false}
              editable={true}
            />
          </Card>
        </>
      }
    </div>
  );
}

export default GestionSucursales;
