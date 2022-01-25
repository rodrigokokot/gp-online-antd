import React from "react";
import Meta from "antd/lib/card/Meta";
import { AutoComplete, Card } from "antd";
import {
  dataNovelty,
  columnsNovelty,
} from "../../../Mocks/GestionAprobaciones";
import Icon from "@ant-design/icons";
import { Notification } from "../../../assets/svg/icons/notification";
import Table from "../../organisms/Table";
import DeploymentConfirmation from "../../molecules/DeploymentConfirmation";
import DateRangeFilter from "../../organisms/DateRangeFilter";
import SearchForm from "../../organisms/SearchForm";
import { GestionSucursalesSearch } from "../../../Mocks/GestionSucursalesSearch";

function Novedades() {

  function handleCallback(value) {
    console.log('from parent', value)
    // responseChild = value;
  }

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
      <DateRangeFilter></DateRangeFilter>
      <SearchForm array={GestionSucursalesSearch} parentCallback={handleCallback}></SearchForm>
      <Table
        component={DeploymentConfirmation}
        data={dataNovelty}
        columns={columnsNovelty}
        expandible={true}
        selectable={false}
      />
    </>
  );
}

export default Novedades;
