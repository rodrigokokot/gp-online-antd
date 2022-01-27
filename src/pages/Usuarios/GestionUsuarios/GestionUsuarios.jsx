import React from 'react';
import SearchForm from '../../../components/organisms/SearchForm/index'
import Table from '../../../components/organisms/Table/index'
import {Link} from 'react-router-dom'
import {GestionUsuariosSearch, dataGestionUsuarios, columnsGestionUsuarios} from '../../../Mocks/GestionUsuariosSearchMock'
import {Col, Button, Card} from 'antd'

function GestionUsuario() {
  const handleCallback = (values) =>{
      console.log(values);
  }
  
  
  return(
  <>
          <Col style={{ textAlign: "right", marginBottom: "25px"}}>
            
            <Link to="/usuarios/gestionUsuarios/nuevo"> 
            <Button type="primary" size="small">
              Nuevo Usuario
            </Button>
            </Link>
          </Col >
          <SearchForm array={GestionUsuariosSearch} parentCallback={handleCallback} title="Busqueda de Usuario" />
          
          <Table data={dataGestionUsuarios} columns={columnsGestionUsuarios} expandible={false} editable={true}/>
          
  </>);
  
}

export default GestionUsuario;
