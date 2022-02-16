import React, { useState } from "react";
import Meta from "antd/lib/card/Meta";
import { AutoComplete, Card } from "antd";
<<<<<<< HEAD
import { dataNovedades, columnsNovedades, NovedadesSearch } from "../mock";
=======
import { dataNovedades, ColumnsNovedades, NovedadesSearch } from "../mock";
>>>>>>> 628e7e7061dadd9faea6bbbd314ee69e69ea7c93
import Icon from "@ant-design/icons";
import { Notification } from "../../../assets/svg/icons/notification";
import Table from "../../../components/organisms/Table";
import DeploymentConfirmation from "../../../components/molecules/DeploymentConfirmation";
import SearchForm from "../../../components/organisms/SearchForm";
import { useTranslation } from "react-i18next";

function Novedades() {
  const [pendientes, setPendientes] = useState(false);
  const [data, setData] = useState("");
  const { t } = useTranslation();

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
              title={t("gestionaprobaciones.tab1.deploymentconfirmation.meta.title")}
              description={t("gestionaprobaciones.tab1.deploymentconfirmation.meta.description")}
            />
          </Card>
          <br />
        </>
      ) : null}

      <SearchForm
        title={t("gestionaprobaciones.tab1.search.searchtitle")}
        array={NovedadesSearch()}
        parentCallback={handleCallback}
        span={6}
      ></SearchForm>
      <br />
      <Table
        component={DeploymentConfirmation}
        data={data}
        columns={ColumnsNovedades()}
        expandible={true}
        selectable={false}
      />
    </>
  );
}

export default Novedades;
