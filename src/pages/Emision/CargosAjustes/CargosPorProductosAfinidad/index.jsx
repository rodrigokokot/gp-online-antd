import React, { useState } from "react";
import {
  CargoPorProductosAfinidadSearchArray,
  columnsCargosProductosAfinidad,
  dataCargosProductosAfinidad,
} from "./mock";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import { Link } from "react-router-dom";
import { Col, Button } from "antd";

export default function CargosPorProductosAfinidadSearch() {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataCargosProductosAfinidad);
  }
  return (
    <div>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        {/* width ver tamaño en Mocks*/}
        <Link to="/emision/cargosAjustes/cargosPorProductosAfinidad/crearCargoPorProductoYAfinidad">
          <Button type="primary" size="small">
            Nuevo Cargo
          </Button>
        </Link>
      </Col>

      <SearchForm
        array={CargoPorProductosAfinidadSearchArray}
        title="Búsqueda de tipos de Cargos a Socios por producto y grupo de afinidad"
        span={6}
        parentCallback={handleCallback}
      />
      <Table
        data={data}
        columns={columnsCargosProductosAfinidad}
        expandible={false}
        editable={true}
      />
    </div>
  );
}
