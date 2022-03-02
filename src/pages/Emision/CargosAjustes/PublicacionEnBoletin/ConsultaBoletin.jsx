import { Tabs } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import Export from "../../../../components/organisms/Export";
import DatosStandIn from "../../../../components/tabs/PublicacionBoletin/DatosStandIn";
import InfoCuenta from "../../../../components/tabs/PublicacionBoletin/InfoCuenta";
import InfoProducto from "../../../../components/tabs/PublicacionBoletin/InfoProducto";
import InfoTitular from "../../../../components/tabs/PublicacionBoletin/InfoTitular"; 

const ConsultaBoletin = () => {
  const { t} = useTranslation();
  const { TabPane } = Tabs;
  return (
    <>
      <Export></Export>
      <Tabs defaultActiveKey="1" style={{ color: "#C1C5C8" }}> 
        <TabPane tab={t("boletin.view.tab1.tab1")} key="1">
          <InfoCuenta></InfoCuenta>
        </TabPane> 
        <TabPane tab={t("boletin.view.tab2.tab2")} key="2">
          <InfoProducto></InfoProducto>
        </TabPane> 
        <TabPane tab={t("boletin.view.tab3.tab3")} key="3">
          <InfoTitular></InfoTitular>
        </TabPane> 
        <TabPane tab={t("boletin.view.tab4.tab4")} key="4">
          <DatosStandIn></DatosStandIn>
        </TabPane> 
      </Tabs>
    </>
  );
};

export default ConsultaBoletin;
