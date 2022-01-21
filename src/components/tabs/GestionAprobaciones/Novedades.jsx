import React from "react";
import Filter from "../../organisms/Filter";
import Table from "../../organisms/Table";
import DateRangeFilter from "../../organisms/DateRangeFilter";
import Meta from "antd/lib/card/Meta";
import { AutoComplete, Card } from "antd";
import {
  dataNovelty,
  columnsNovelty,
} from "../../../Mocks/GestionAprobaciones";
import { filtros } from "../../../Mocks/GestionAprobaciones";
import Icon, { HomeOutlined } from "@ant-design/icons";
import { Notification } from "../../../assets/svg/icons/notification";
import TableFilters from "../../templates/TableFilters";

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
          avatar={<Icon component={Notification}></Icon>}
          title="Tenés 25 pedidos de aprobación"
          description="Desplegá cada fila para poder operar las confirmaciones."
        />
      </Card>
      <TableFilters
        data={dataNovelty}
        columns={columnsNovelty}
        expandible={true}
        selectable={false}
        filtros={filtros}
      ></TableFilters>
    </>
  );
}

export default Novedades;
