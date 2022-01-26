import React from "react";
import { Tabs} from "antd";
import Contraseña from "../../tabs/GestionUsuarios/Contraseña";
import DatosGenerales from "../../tabs/GestionUsuarios/DatosGenerales";

function EditUsuario() {
  const { TabPane } = Tabs;

  return (
    <>
      <Tabs defaultActiveKey="1" style={{ color: "#C1C5C8"}}>
        {/* Pantalla 1 */}
        <TabPane tab="Datos Generales" key="1">
             {/*Enviar DatosGenerales al componente de facundo */}
             <DatosGenerales />
        </TabPane>

        {/* Pantalla 2 */}
        <TabPane tab="Contraseña" key="2">
              <Contraseña />
        </TabPane>
      </Tabs>
    </>
  );
}

export default EditUsuario;