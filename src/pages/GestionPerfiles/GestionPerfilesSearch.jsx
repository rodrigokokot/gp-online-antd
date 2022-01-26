import React from 'react';
import SearchForm from '../../components/organisms/SearchForm/index'
import Table from '../../components/organisms/Table/index'
import {Link} from 'react-router-dom'
import {GestionPerfilesSearchMock} from '../../Mocks/GestionPerfilesSearchMock'
import {Col, Button} from 'antd'

function GestionPerfilesBusqueda() {
  const handleCallback = (values) =>{
      console.log(values);
  }
  
  
  return(
  
  <div>
          <Col style={{ textAlign: "right", marginBottom: "25px" }}>
            
            <Link to=""> 
            <Button type="primary" size="small">
              Nuevo Perfil
            </Button>
            </Link>
          </Col>
      <SearchForm array={GestionPerfilesSearchMock} parentCallback={handleCallback} title="Busqueda de Perfiles" />
      <Table />

  </div>);
  
}

export default GestionPerfilesBusqueda;
