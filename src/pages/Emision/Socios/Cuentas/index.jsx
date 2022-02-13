import React,{useState} from 'react';
import SearchForm from '../../../../components/organisms/SearchForm/index'
import Table from '../../../../components/organisms/Table/index'
import {Link} from 'react-router-dom'
import {GestionCuentaSearch, dataGestionCuenta, columnsGestionCuenta} from './mock'
import {Col, Button} from 'antd'

/* hacer que router tengo la dir de app.js  */
const GestionCuentas=()=> {    
  const [data, setData] = useState("");

  const handleCallback = (values) => {
    if (
      Object.values(values).every((value) => {
        if (value === "" || value === undefined) {
          return true;
        }
      })
    ) {
      setData(dataGestionCuenta);
    } else {
      setData(
        dataGestionCuenta.filter((d) => {
          return (
            d.estado.toString() === values.estado.toString() ||
            d.gpafinidad.toString() === values.gpafinidad.toString() ||
            d.idcuenta.toString() === values.idcuenta.toString()||
            d.nombre.toString() === values.nombre.toString()||
            d.producto.toString() === values.producto.toString()||
            d.tarjeta.toString() === values.tarjeta.toString()||
            d.cexterna.toString() === values.cexterna.toString()||
            d.dni.toString() === values.dni.toString()
          );
        })
      );
    }
  };
  
  return(
  <>
          <Col style={{ textAlign: "right", marginBottom: "25px"}}> 
            <Link to="/emision/socios/cuentas/gestionDeCuentas/nueva"> 
            <Button type="primary" size="small">
              Nueva Cuenta
            </Button>
            </Link>
          </Col > 
          <SearchForm span={4} array={GestionCuentaSearch} parentCallback={handleCallback} title="Busqueda de gestión de cuentas" />
          <br></br>
          <Table data={data} columns={columnsGestionCuenta} expandible={false} editable={true}/>
           
  </>);
}
export default GestionCuentas;