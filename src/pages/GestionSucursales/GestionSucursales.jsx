import Table from "../../components/organisms/Table/index";
import React, {useState} from "react";
import  SearchForm  from "../../components/organisms/SearchForm/index";
import { GestionSucursalesSearch } from "../../Mocks/GestionSucursalesSearch";
import { Card, Button, Col } from "antd";
import {columnsGestionSucursales, dataGestionSucursales} from "../../Mocks/GestionSucursales";
import { useHistory } from "react-router-dom";

function GestionSucursales() {

  const [data, setData] = useState("");
  const history=useHistory();

  const routeChange= (newentry) =>{
    let path = 'new'

    history.push(path);
  }


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
        dataGestionSucursales.filter(d => {
         return( d.estado.toString() === values.estado.toString() ||
            d.descripcion.toString() === values.descripcion.toString() ||
            d.codigo.toString() === values.codigo.toString())
        })
      );
    }
  };



  return (
    <div>
      <Col style={{textAlign: 'right', marginBottom: '25px'}}>
              <Button type='primary' size='small' onClick={routeChange}>
          Nueva Sucursal
        </Button>
      </Col>

 

        <SearchForm array={GestionSucursalesSearch} parentCallback={handleCallback}  />

      <Card style={{ marginTop: "10px", marginBottom: "50px" }}>
        <Table columns={columnsGestionSucursales} data={data} expandible={true}/>
      </Card>
    </div>
  );
}

export default GestionSucursales;
