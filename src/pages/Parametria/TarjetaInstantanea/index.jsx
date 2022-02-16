import React, { useState } from "react";
import SearchForm from "../../../components/organisms/SearchForm";
import Table from "../../../components/organisms/Table";
import { Link } from "react-router-dom";
import { Col, Button } from "antd";
import { columnsTarjetaInstantanea, dataTarjetaInstantanea, TarjetaInstantaneaSearch } from "./mock";

function TarjetaInstantanea() {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataTarjetaInstantanea);
  }

  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/parametria/tarjetaInstantanea/nueva">
          <Button type="primary" size="small">
            Nuevo tarjeta instantanea
          </Button>
        </Link>

        <Link to="/parametria/tarjetaInstantanea/nueva2">
          <Button type="primary" size="small">
            Nuevo tarjeta instantanea 2
          </Button>
        </Link>

        <Link to="/parametria/tarjetaInstantanea/nueva3">
          <Button type="primary" size="small">
            Nuevo tarjeta instantanea 3
          </Button>
        </Link>
      </Col>

      <SearchForm
        title="Búsqueda de cuentas"
        array={TarjetaInstantaneaSearch}
        parentCallback={handleCallback}
        span={5}
      ></SearchForm>
      <br />
      <Table data={data} columns={columnsTarjetaInstantanea}></Table>
    </>
  );
}

export default TarjetaInstantanea;
