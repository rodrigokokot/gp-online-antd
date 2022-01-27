import React from "react";
import Searchform from "../../../components/organisms/SearchForm";
import { MovimientosIPMSearch } from "../../../Mocks/MovimientosIPMSearch";
import Table from "../../../components/organisms/Table";
import {
  columnsMovimientosIPM,
  dataMovimientosIPM,
} from "../../../Mocks/MovimientosIPM";
import DateRangeFilter from "../../../components/organisms/DateRangeFilter";

function MovimientosIPM() {
  return (
    <>
      <DateRangeFilter></DateRangeFilter>
      <Searchform array={MovimientosIPMSearch}></Searchform>
      <Table data={dataMovimientosIPM} columns={columnsMovimientosIPM}></Table>
    </>
  );
}

export default MovimientosIPM;
