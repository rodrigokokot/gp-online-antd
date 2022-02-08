import { Tabs } from "antd";
import React from "react";
import Export from "../../../../components/organisms/Export";
import InformacionDeLaCuenta from "./tabs/InformacionDeLaCuenta";
import InformacionDelProducto from "./tabs/InformacionDelProducto";
import InformacionDelTitular from "./tabs/InformacionDelTitular";
import CambioDeEstadoTarjeta from "./tabs/CambioDeEstadoTarjeta";

const CambioDeEstadoDetalle = () => {
  const { TabPane } = Tabs;
  return (
    <>
      <Export></Export>
      <Tabs defaultActiveKey="1" style={{ color: "#C1C5C8" }}>
        <TabPane tab="Informacion de la cuenta" key="1">
          <InformacionDeLaCuenta />
        </TabPane>

        <TabPane tab="Inofrmacion del producto" key="2">
          <InformacionDelProducto />
        </TabPane>

        <TabPane tab="Informacion del titular" key="3">
          <InformacionDelTitular />
        </TabPane>

        <TabPane tab="Cambio de estado de tarjeta" key="4">
          <CambioDeEstadoTarjeta />
        </TabPane>
      </Tabs>
    </>
  );
};

export default CambioDeEstadoDetalle;
