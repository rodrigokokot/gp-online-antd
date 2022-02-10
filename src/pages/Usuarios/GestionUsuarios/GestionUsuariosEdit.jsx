import React from "react";
import { Tabs} from "antd";
import FormContraseña from "../../../components/tabs/GestionUsuarios/FormContraseña";
import FormDatosGenerales from "../../../components/tabs/GestionUsuarios/FormDatosGenerales";
import Edit from "../../../components/organisms/Edit";

function EditUsuario() {
  const { TabPane } = Tabs; 
  return (
    <>
      <Tabs defaultActiveKey="1" style={{ color: "#C1C5C8"}}>

        <TabPane tab="Datos Generales" key="1">
             <Edit id="datosgenerales" component={FormDatosGenerales} textBtnSave="Editar usuario" textModalConfirm="¿Estas seguro de editar este usuario?" textBtnModalConfirm="Si, editar"></Edit>
        </TabPane>

        <TabPane tab="Contraseña" key="2">
              <Edit id="contraseña" component={FormContraseña} textBtnSave="Blanquear contraseña" textModalConfirm="¿Estas seguro de blanquear la contraseña?" textBtnModalConfirm="Si, guardar"></Edit>
        </TabPane>
      </Tabs>
    </>
  );
}

export default EditUsuario;