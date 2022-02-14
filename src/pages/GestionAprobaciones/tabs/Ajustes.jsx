import React, { useState } from "react";
import Table from "../../../components/organisms/Table";
import { Button, Card } from "antd";
import SearchForm from "../../../components/organisms/SearchForm";
import { ajustesSearch, columnsAjustes, dataAjustes, } from "../mock";

const Ajustes = () => {
  let childResponse = null;
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataAjustes);
  }

  function selectedRows(value) {
    childResponse = value.selectedRows;
  }

  function showValues() {
    console.log("request:", childResponse);
  }

  return (
    <>
      <Card style={{ marginBottom: "6px", borderRadius: "0.5em" }}>
        <h2 style={{ color: "#AB218E" }}>Informacion de la cuenta</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            gap: "10% 10%",
            flexDirection: "row",
          }}
        >
          <div>
            <h3>
              Nº de cuenta:<h5>213432</h5>
            </h3>
            <h3>
              Nº de CTA. Original:<h5>Emilia</h5>
            </h3>
            <h3>
              Fecha de Alta:<h5>Emilia</h5>
            </h3>
          </div>
          <div>
            <h3>
              Marca:<h5>Actualizacion de la targeta</h5>
            </h3>
            <h3>
              Fecha de inicio:<h5>23/4/19</h5>
            </h3>
            <h3>
              Fecha de finalizacion:<h5>-</h5>
            </h3>
          </div>
          <div>
            <h3>
              Estado de transaccion:<h5>Pendiente</h5>
            </h3>
            <h3>
              Comentario:<h5>-</h5>
            </h3>
          </div>
        </div>
      </Card>
      <SearchForm
        title="Busqueda de ajustes"
        array={ajustesSearch}
        span={6}
        parentCallback={handleCallback}
      />
      <br />
      <Table
        data={data}
        columns={columnsAjustes}
        expandible={false}
        selectable={true}
        parentCallback={selectedRows}
      />
      <br />
      <Button type="primary" onClick={showValues}>
        Aplicar Confirmación
      </Button>
    </>
  );
};

export default Ajustes;
