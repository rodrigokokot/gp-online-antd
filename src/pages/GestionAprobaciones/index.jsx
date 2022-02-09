import React from "react";
import { Tabs } from "antd";
import Ajustes from "./tabs/Ajustes";
import Novedades from "./tabs/Novedades";

function GestionAprobaciones() {
  const { TabPane } = Tabs;

  return (
    <>
      <Tabs defaultActiveKey="1" style={{ color: "#C1C5C8" }}>
        <TabPane tab="Novedades por confirmar" key="1">
          <Novedades />
        </TabPane>
        <TabPane tab="Ajustes por Confirmar" key="2">
          <Ajustes />
        </TabPane>
      </Tabs>
    </>
  );
}

export default GestionAprobaciones;
