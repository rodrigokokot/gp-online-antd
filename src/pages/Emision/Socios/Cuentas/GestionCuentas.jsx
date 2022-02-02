import React,{useState} from 'react';
import SearchForm from '../../../../components/organisms/SearchForm/index'
import Table from '../../../../components/organisms/Table/index'
import {Link} from 'react-router-dom'
import {GestionCuentaSearch, dataGestionCuenta, columnsGestionCuenta} from '../../../../Mocks/GestionCuentaSearchMock'
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
            d.usuario.toString() === values.usuario.toString() ||
            d.documento.toString() === values.documento.toString() ||
            d.apellido.toString() === values.apellido.toString()||
            d.nombre.toString() === values.nombre.toString()||
            d.perfil.toString() === values.perfil.toString()
          );
        })
      );
    }
  };
  
  return(
  <>
          <Col style={{ textAlign: "right", marginBottom: "25px"}}>
            {/* width ver tamaño en Mocks*/}
            <Link to="/emision/socios/cuentas/gestionDeCuentas/nueva"> 
            <Button type="primary" size="small">
              Nueva Cuenta
            </Button>
            </Link>
          </Col >
          {/* width del searchfrom ver tamaño en Mocks*/}
          <SearchForm array={GestionCuentaSearch} parentCallback={handleCallback} title="Busqueda de Usuario" />
          <br></br>
          <Table data={data} columns={columnsGestionCuenta} expandible={false} editable={true}/>
           
  </>);
}
export default GestionCuentas;