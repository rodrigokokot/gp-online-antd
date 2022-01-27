import React ,{useState} from "react";
import Searchform from "../../../components/organisms/SearchForm";
import Table from "../../../components/organisms/Table";
import {
  columnsMovimientosCTF,
  dataMovimientosCTF,
  MovimientosCTFSearch
} from "../../../Mocks/MovimientosCTF";

function MovimientosCTF() {
  const [data, setData] = useState("");

  const handleCallback = (values) => {
    if (
      Object.values(values).every((value) => {
        if (value === "" || value === undefined) {
          return true;
        }
      })
    ) {
      setData(dataMovimientosCTF);
    } else {
      setData(
        dataMovimientosCTF.filter((d) => {
          return (
            d.idautorizacion.toString() === values.idautorizacion.toString() ||
            d.idconsumo.toString() === values.idconsumo.toString() ||
            d.ididentidad.toString() === values.ididentidad.toString()||
            d.idorigen.toString() === values.idorigen.toString()||
            d.numeroCTF.toString() === values.numeroCTF.toString()||
            d.procesado.toString() === values.procesado.toString()
          );
        })
      );
    }
  };
  return (
    <>
      <Searchform title='Búsqueda de archivos CTF'
          parentCallback={handleCallback} 
          array={MovimientosCTFSearch}
      />
      <br></br>
      <Table data={data} columns={columnsMovimientosCTF}></Table>
    </>
  );
}

export default MovimientosCTF;