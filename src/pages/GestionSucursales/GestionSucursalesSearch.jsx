import Table from "../../components/organisms/Table/index";
import React, { useState } from "react";
import SearchForm from "../../components/organisms/SearchForm/index";
import { GestionSucursalesSearchMock } from "../../Mocks/GestionSucursalesSearchMock";
import { Card, Button, Col, Switch, Form, Row, Modal} from "antd";
import {
  columnsGestionSucursales,
  dataGestionSucursales,
} from "../../Mocks/GestionSucursales";
import { useHistory, Link} from "react-router-dom";
import FloatInput from '../../components/molecules/FloatInput/index'
import FloatSelect from '../../components/molecules/FloatSelected/index'


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

  



   const routeChange = () => {
     let path = "gestionSucursales/editarSucursal/new";

     history.push(path);
   };


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
        <>
          <Col style={{ textAlign: "right", marginBottom: "25px" }}>
            <Link to="/parametrosPrincipales/gestionSucursales/editarSucursal/new">
              <Button type="primary" size="small">
                Nueva Sucursal
              </Button>
            </Link>
          </Col>

          <SearchForm
            array={GestionSucursalesSearchMock}
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
  );
}

export default GestionSucursales;
