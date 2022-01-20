import React from "react";
import Filter from "../../organisms/Filter";
import Table from '../../organisms/Table'
import DateRangeFilter from '../../organisms/DateRangeFilter'
import Meta from "antd/lib/card/Meta";
import { AutoComplete, Card } from "antd";
import { dataNovelty,columnsNovelty } from "../../../Mocks/GestionAprobaciones";
import DeploymentConfirmation from "../../molecules/DeploymentConfirmation";

function Novedades() {
  return (
    <>
      <Card
        style={{
          width: AutoComplete,
          marginTop: 16,
          borderLeftColor: "#69E2B7",
          borderLeftWidth: 7,
        }}
        bordered={true}
      >
        <Meta
          avatar={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
                fill="#69E2B7"
              />
              <path
                d="M8.97064 3.87891H7.03125L7.27367 9.21224H8.72822L8.97064 3.87891Z"
                fill="white"
              />
              <path
                d="M8.00095 10.1819C8.5365 10.1819 8.97064 10.6161 8.97064 11.1516C8.97064 11.6872 8.5365 12.1213 8.00095 12.1213C7.4654 12.1213 7.03125 11.6872 7.03125 11.1516C7.03125 10.6161 7.4654 10.1819 8.00095 10.1819Z"
                fill="white"
              />
            </svg>
          }
          title="Tenés 25 pedidos de aprobación"
          description="Desplegá cada fila para poder operar las confirmaciones."
        />
      </Card>
      <Filter></Filter>
      <DateRangeFilter></DateRangeFilter>
      <Table
        component={DeploymentConfirmation}
        columns={columnsNovelty}
        data={dataNovelty}
        expandible={true}
        // selectable={true}
      />
    </>
  );
}

export default Novedades;
