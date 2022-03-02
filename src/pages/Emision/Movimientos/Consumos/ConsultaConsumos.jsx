import { Tabs } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import Export from "../../../../components/organisms/Export";
import ConsultasAutorizacion from "../../../../components/tabs/EmisionConsumos/ConsultasAutorizacion";
import DatosAdicionales from "../../../../components/tabs/EmisionConsumos/DatosAdicionales";
import DatosComercio from "../../../../components/tabs/EmisionConsumos/DatosComercio";
import DatosConsumo from "../../../../components/tabs/EmisionConsumos/DatosConsumo";
import DatosSocio from "../../../../components/tabs/EmisionConsumos/DatosSocio";

const ConsultaConsumos = () => {
  const { t} = useTranslation();
  const { TabPane } = Tabs;
  return (
    <>
      <Export></Export>
      <Tabs defaultActiveKey="1" style={{ color: "#C1C5C8" }}> 
        <TabPane tab={t("consumos.tab1.tab1")} key="1">
          <DatosConsumo></DatosConsumo>
        </TabPane> 
        
        <TabPane tab={t("consumos.tab2.tab2")} key="2">
          <DatosSocio></DatosSocio>
        </TabPane>

        <TabPane tab={t("consumos.tab3.tab3")} key="3">
          <DatosAdicionales></DatosAdicionales>
        </TabPane>

        <TabPane tab={t("consumos.tab4.tab4")} key="4">
          <ConsultasAutorizacion></ConsultasAutorizacion>
        </TabPane>

        <TabPane tab={t("consumos.tab5.tab5")} key="5">
          <DatosComercio></DatosComercio>
        </TabPane>
      </Tabs>
    </>
  );
};

export default ConsultaConsumos;
