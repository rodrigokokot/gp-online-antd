import React from "react";
import Filter from "../../organisms/Filter";
import Table from "../../organisms/Table";
import DateRangeFilter from "../../organisms/DateRangeFilter";
import { Button } from "antd";
import DeploymentConfirmation from "../../molecules/DeploymentConfirmation";
import {
  dataSettings,
  columnsSettins,
  filtros,
  columnsNovelty,
} from "../../../Mocks/GestionAprobaciones";
import TableFilters from "../../templates/TableFilters";

const Ajustes = () => {
  let childResponse = null;

  function handleCallback(value){
    childResponse = value.selectedRows;
  }

  function ShowValues(){
    console.log('request:',childResponse)
  }
  
  return (
    <>
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

      <Table
        data={dataSettings}
        columns={columnsNovelty}
        expandible={false}
        selectable={true}
        parentCallback={handleCallback}
      />

      <Button type="primary" onClick={ShowValues}>Aplicar Confirmación</Button>
    </>
  );
};

export default Ajustes;
