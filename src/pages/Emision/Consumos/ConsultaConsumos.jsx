import { Card, Tabs } from "antd";
import React from "react";
import Export from "../../../components/organisms/Export";
import ConsultasAutorizacion from "../../../components/tabs/EmisionConsumos/ConsultasAutorizacion";
import DatosAdicionales from "../../../components/tabs/EmisionConsumos/DatosAdicionales";
import DatosComercio from "../../../components/tabs/EmisionConsumos/DatosComercio";
import DatosConsumo from "../../../components/tabs/EmisionConsumos/DatosConsumo";
import DatosSocio from "../../../components/tabs/EmisionConsumos/DatosSocio";

const ConsultaConsumos = () => {
  const { TabPane } = Tabs;
  return (
    <>
      <Export></Export>
      <Tabs defaultActiveKey="1" style={{ color: "#C1C5C8" }}>
        {/* Pantalla 1 */}
        <TabPane tab="Datos consumo" key="1">
          <DatosConsumo></DatosConsumo>
        </TabPane>

        {/* Pantalla 2 */}
        <TabPane tab="Datos socio" key="2">
          <DatosSocio></DatosSocio>
        </TabPane>

        <TabPane tab="Datos adicionales" key="3">
          <DatosAdicionales></DatosAdicionales>
        </TabPane>

        <TabPane tab="Consulta autorizacion" key="4">
          <ConsultasAutorizacion></ConsultasAutorizacion>
        </TabPane>

        <TabPane tab="Datos Comercio" key="5">
          <DatosComercio></DatosComercio>
        </TabPane>
      </Tabs>
    </>
  );
};

export default ConsultaConsumos;
