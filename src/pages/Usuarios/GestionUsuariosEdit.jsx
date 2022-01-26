import React from "react";
import { Tabs} from "antd";
import FormContraseña from "../../components/tabs/GestionUsuarios/FormContraseña";
import FormDatosGenerales from "../../components/tabs/GestionUsuarios/FormDatosGenerales";

function EditUsuario() {
  const { TabPane } = Tabs;
  const usuario="PedroPz";
  return (
    <>
      <Tabs defaultActiveKey="1" style={{ color: "#C1C5C8"}}>
        {/* Pantalla 1 */}
        <TabPane tab="Datos Generales" key="1">
             {/*Enviar Formulario DatosGenerales al componente de facundo o marx*/}
             <FormDatosGenerales usuario={{usuario}} />
        </TabPane>

        {/* Pantalla 2 */}
        <TabPane tab="Contraseña" key="2">
              <FormContraseña />
        </TabPane>
      </Tabs>
    </>
  );
}

export default EditUsuario;