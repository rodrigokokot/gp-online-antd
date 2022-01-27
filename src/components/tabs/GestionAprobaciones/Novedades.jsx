import React, { useState } from "react";
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
  const [notification, setNotification] = useState(false);
  function handleCallback(value) {
    console.log("from parent", value);
    // responseChild = value;
  }

  return (
    <>
      {notification ? (
        <>
          <Card
            style={{
              width: AutoComplete,
              marginTop: 16,
              borderLeftColor: "#69E2B7",
              backgroundColor: "#0000000A",
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
          <br></br>
        </>
      ) : null}

      <SearchForm
        title={"Busqueda de aprobaciones"}
        array={GestionSucursalesSearch}
        parentCallback={handleCallback}
      ></SearchForm>
      <br></br>
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
