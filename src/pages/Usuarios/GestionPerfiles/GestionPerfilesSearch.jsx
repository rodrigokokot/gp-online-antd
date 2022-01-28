import React from "react";
import {Col,Button} from "antd"; 
import Table from "../../../components/organisms/Table";
import SearchForm from "../../../components/organisms/SearchForm"
import { Link } from "react-router-dom";
import {GestionPerfilesSearchMock,dataGestionPerfiles,columnsGestionPerfiles} from "../../../Mocks/GestionPerfilesSearchMock"

function GestionPerfilesBusqueda() {
  const handleCallback = (values) =>{
      console.log(values);
  }
  
  return(
  
  <div>
          <Col style={{ textAlign: "right", marginBottom: "25px" }}>
            
            <Link to="/usuarios/gestionDePerfiles/nuevo"> 
            <Button type="primary" size="small">
              Nuevo Perfil
            </Button>
            </Link>
          </Col>
      <SearchForm array={GestionPerfilesSearchMock} parentCallback={handleCallback} title="Busqueda de Perfiles" />
      <Table data={dataGestionPerfiles} columns={columnsGestionPerfiles} expandible={false} editable={true}/>

  </div>);
  
}

export default GestionPerfilesBusqueda;
