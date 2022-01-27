import React,{useState} from 'react';
import SearchForm from '../../../components/organisms/SearchForm/index'
import Table from '../../../components/organisms/Table/index'
import {Link} from 'react-router-dom'
import {GestionUsuariosSearch, dataGestionUsuarios, columnsGestionUsuarios} from '../../../Mocks/GestionUsuariosSearchMock'
import {Col, Button, Card} from 'antd'

function GestionUsuario() {
  const [data, setData] = useState("");

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
            
            <Link to="/usuarios/gestionUsuarios/crear"> 
            <Button type="primary" size="small">
              Nuevo Usuario
            </Button>
            </Link>
          </Col >
          <SearchForm array={GestionUsuariosSearch} parentCallback={handleCallback} title="Busqueda de Usuario" />
          
          <Table data={data} columns={columnsGestionUsuarios} expandible={false} editable={true}/>
          
  </>);
  
}

export default GestionUsuario;
