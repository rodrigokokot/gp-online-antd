import React from "react";
import { Tabs } from "antd";
import Ajustes from "./tabs/Ajustes";
import Novedades from "./tabs/Novedades";
import { useTranslation } from "react-i18next";

function GestionAprobaciones() {
  const { t } = useTranslation();
  const { TabPane } = Tabs;

  return (
    <>
      <Tabs defaultActiveKey="1" style={{ color: "#C1C5C8" }}>
        <TabPane tab={t("gestionaprobaciones.tab1.tab1")} key="1">
          <Novedades />
        </TabPane>
        <TabPane tab={t("gestionaprobaciones.tab2.tab2")} key="2">
          <Ajustes />
        </TabPane>
      </Tabs>
    </>
  );
}

export default GestionAprobaciones;
