import { Tabs } from "antd";
import React from "react";
import Export from "../../../../components/organisms/Export";
import DatosStandIn from "../../../../components/tabs/PublicacionBoletin/DatosStandIn";
import InfoCuenta from "../../../../components/tabs/PublicacionBoletin/InfoCuenta";
import InfoProducto from "../../../../components/tabs/PublicacionBoletin/InfoProducto";
import InfoTitular from "../../../../components/tabs/PublicacionBoletin/InfoTitular"; 

const ConsultaBoletin = () => {
  const { TabPane } = Tabs;
  return (
    <>
      <Export></Export>
      <Tabs defaultActiveKey="1" style={{ color: "#C1C5C8" }}>
        {/* Pantalla 1 */}
        <TabPane tab="Información de la cuenta" key="1">
          <InfoCuenta></InfoCuenta>
        </TabPane>

        {/* Pantalla 2 */}
        <TabPane tab="Información del producto" key="2">
          <InfoProducto></InfoProducto>
        </TabPane>

        <TabPane tab="Información del Titular" key="3">
          <InfoTitular></InfoTitular>
        </TabPane>

        <TabPane tab="Datos Stand- In" key="4">
          <DatosStandIn></DatosStandIn>
        </TabPane>
 
      </Tabs>
    </>
  );
};

export default ConsultaBoletin;
