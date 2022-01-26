import React from 'react';
import SearchForm from '../../components/organisms/SearchForm/index'
import {GestionPerfilesSearchMock} from '../../Mocks/GestionPerfilesSearchMock'

function GestionPerfilesBusqueda() {
  const handleCallback = (values) =>{
      console.log(values);
  }
  
  
  return(
  
  <div>
          <Col style={{ textAlign: "right", marginBottom: "25px" }}>
            <Button type="primary" size="small" onClick={setCrearSucursal}>
              Nuevo Perfil
            </Button>
          </Col>
      <SearchForm array={GestionPerfilesSearchMock} parentCallback={handleCallback} title="Busqueda de Perfiles" />

  </div>);
  
}

export default GestionPerfilesBusqueda;
