import { Tabs } from "antd";
import React from "react";
import Export from "../../../../components/organisms/Export";
import InformacionDeLaCuenta from "./tabs/InformacionDeLaCuenta";
import InformacionDelProducto from "./tabs/InformacionDelProducto";
import InformacionDelTitular from "./tabs/InformacionDelTitular";
import CambioDeEstadoTarjeta from "./tabs/CambioDeEstadoTarjeta";
import { useTranslation } from "react-i18next";

const CambioDeEstadoDetalle = () => {
  const { t } = useTranslation();
  const { TabPane } = Tabs;
  return (
    <>
      <Export></Export>
      <Tabs defaultActiveKey="1" style={{ color: "#C1C5C8" }}>
        <TabPane tab={t("estado.view.tab1.tab1")} key="1">
          <InformacionDeLaCuenta />
        </TabPane>

        <TabPane tab={t("estado.view.tab2.tab2")} key="2">
          <InformacionDelProducto />
        </TabPane>

        <TabPane tab={t("estado.view.tab3.tab3")}key="3">
          <InformacionDelTitular />
        </TabPane>

        <TabPane tab={t("estado.view.tab4.tab4")} key="4">
          <CambioDeEstadoTarjeta />
        </TabPane>
      </Tabs>
    </>
  );
};

export default CambioDeEstadoDetalle;
