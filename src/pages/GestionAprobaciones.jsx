import React from "react";
import { Card, Tabs} from "antd";

import Ajustes from "../components/tabs/GestionAprobaciones/Ajustes";
import Novedades from "../components/tabs/GestionAprobaciones/Novedades";

function GestionAprobaciones() {
  const { TabPane } = Tabs;

  return (
    <>
      <Tabs defaultActiveKey="1" style={{ color: "#C1C5C8" }}>
        {/* Pantalla 1 */}
        <TabPane tab="Novedades por confirmar" key="1">
          <Novedades/>
        </TabPane>

        {/* Pantalla 2 */}
        <TabPane tab="Ajustes por Confirmar" key="2">
          <Ajustes/>
        </TabPane>
      </Tabs>
    </>
  );
}

export default GestionAprobaciones;
