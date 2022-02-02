import React,{useState} from 'react';
import SearchForm from '../../../../components/organisms/SearchForm/index'
import Table from '../../../../components/organisms/Table/index'
import {AvisosViajesSearch, dataAvisosViajes, columnsAvisosViajes} from '../../../../Mocks/AvisosViajesSearchMock'

/* hacer que router tengo la dir de app.js  */
const AvisosViajes=()=> {    
  const [data, setData] = useState("");

  const handleCallback = (values) => {
    if (
      Object.values(values).every((value) => {
        if (value === "" || value === undefined) {
          return true;
        }
      })
    ) {
      setData(dataAvisosViajes);
    } else {
      setData(
        dataAvisosViajes.filter((d) => {
          return (
            d.cuenta.toString() === values.usuario.toString() ||
            d.documento.toString() === values.documento.toString() ||
            d.estado.toString() === values.apellido.toString()||
            d.fdesde.toString() === values.nombre.toString()||
            d.fhasta.toString() === values.perfil.toString()||
            d.idviaje.toString() === values.perfil.toString()||
            d.tdocumento.toString() === values.perfil.toString()
          );
        })
      );
    }
  };
  
  return(
  <>
          {/* width del searchfrom ver tamaño en Mocks*/}
          <SearchForm array={AvisosViajesSearch} parentCallback={handleCallback} title="Busqueda de Usuario" />
          <br></br>
          <Table data={data} columns={columnsAvisosViajes} expandible={false} editable={true}/>
  </>);
}
export default AvisosViajes;