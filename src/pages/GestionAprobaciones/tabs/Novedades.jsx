import React, { useState } from "react";
import Meta from "antd/lib/card/Meta";
import { AutoComplete, Card } from "antd";
import { dataNovedades, columnsNovedades, novedadesSearch } from "../mock";
import Icon from "@ant-design/icons";
import { Notification } from "../../../assets/svg/icons/notification";
import Table from "../../../components/organisms/Table";
import DeploymentConfirmation from "../../../components/molecules/DeploymentConfirmation";
import SearchForm from "../../../components/organisms/SearchForm";

function Novedades() {
  const [pendientes, setPendientes] = useState(false);
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataNovedades);
  }

  return (
    <>
      {pendientes ? (
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
          <br />
        </>
      ) : null}

      <SearchForm
        title="Busqueda de aprobaciones"
        array={novedadesSearch}
        parentCallback={handleCallback}
        span={6}
      ></SearchForm>
      <br />
      <Table
        component={DeploymentConfirmation}
        data={data}
        columns={columnsNovedades}
        expandible={true}
        selectable={false}
      />
    </>
  );
}

export default Novedades;
