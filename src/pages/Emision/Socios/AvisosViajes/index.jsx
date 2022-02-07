import React,{useState} from 'react'; 
import SearchForm from '../../../../components/organisms/SearchForm/index'
import Table from '../../../../components/organisms/Table/index' 
import { dataAvisosViajes,columnsAvisosViajes,AvisosViajesSearch } from "./mock"

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
            d.cuenta.toString() === values.cuenta.toString() ||
            d.documento.toString() === values.documento.toString() ||
            d.estado.toString() === values.estado.toString()||
            d.fdesde.toString() === values.fdesde.toString()||
            d.fhasta.toString() === values.fhasta.toString()||
            d.idviaje.toString() === values.idviaje.toString()||
            d.tdocumento.toString() === values.tdocumento.toString()
          );
        })
      );
    }
  };
  
  return(
  <>
          {/* width del searchfrom ver tamaño en Mocks*/}
          <SearchForm span={4} array={AvisosViajesSearch} parentCallback={handleCallback} title="Busqueda de avisos de viajes" />
          <br></br>
          <Table data={data} columns={columnsAvisosViajes} expandible={false} editable={true}/>
  </>);
}
export default AvisosViajes;