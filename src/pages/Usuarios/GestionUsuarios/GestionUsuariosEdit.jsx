import React from "react";
import { Tabs} from "antd";
import FormContraseña from "../../../components/tabs/GestionUsuarios/FormContraseña";
import FormDatosGenerales from "../../../components/tabs/GestionUsuarios/FormDatosGenerales";
import Edit from "../../../components/organisms/Edit";
import { useTranslation } from 'react-i18next';

function EditUsuario() {
  const { t} = useTranslation();
  const { TabPane } = Tabs; 
  return (
    <>
      <Tabs defaultActiveKey="1" style={{ color: "#C1C5C8"}}>

        <TabPane tab={t("gestionusuarios.edit.tab1.tab1")} key="1">
             <Edit id="datosgenerales" component={FormDatosGenerales} 
             textBtnSave={t("gestionusuarios.edit.edit1.save")}
             textModalConfirm={t("gestionusuarios.edit.edit1.confirm")}
             textBtnModalConfirm={t("gestionusuarios.edit.edit1.btnconfirm")}> 
             </Edit>
        </TabPane>

        <TabPane tab={t("gestionusuarios.edit.tab2.tab2")} key="2">
              <Edit id="contraseña" component={FormContraseña} 
              textBtnSave={t("gestionusuarios.edit.edit2.save")} 
              textModalConfirm={t("gestionusuarios.edit.edit2.confirm")} 
              textBtnModalConfirm={t("gestionusuarios.edit.edit2.btnconfirm")}> 
              </Edit>
        </TabPane>
      </Tabs>
    </>
  );
}

export default EditUsuario;