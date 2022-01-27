import React from "react";
import Searchform from "../../../components/organisms/SearchForm";
import { MovimientosIPMSearch } from "../../../Mocks/MovimientosIPMSearch";
import Table from "../../../components/organisms/Table";
import {
  columnsMovimientosIPM,
  dataMovimientosIPM,
} from "../../../Mocks/MovimientosIPM"; 

function MovimientosIPM() {
  return (
    <>  
      <Searchform array={MovimientosIPMSearch} title={"Búsqueda de archivos IPM"}></Searchform>
      <br></br>
      <Table data={dataMovimientosIPM} columns={columnsMovimientosIPM}></Table>
    </>
  );
}

export default MovimientosIPM;
