import React from "react";
import Searchform from "../../../components/organisms/SearchForm"; 
import Table from "../../../components/organisms/Table";
import {
  columnsMovimientosIPM,
  dataMovimientosIPM,MovimientosIPMSearch
} from "./mock"; 

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
