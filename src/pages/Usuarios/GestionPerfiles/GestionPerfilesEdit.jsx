import React from "react";
import Edit from "../../../components/organisms/Edit/index";
import Table from "../../../components/organisms/Table/index";
import FloatInput from "../../../components/molecules/FloatInput";
import { Card, Row, Tabs, Col, Form} from "antd";

function GestionPerfilesEdit() {
  
  const columnsFormulario = [
    {
      name:"Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name:"Descripcion",
      selector: (row) => row.descripcion,
      sortable: false,
    },
  ]

  const dataFormulario = [
    {
      id: "1",
      nombre: "Rol de prueba",
      descripcion: "Lectura de modelos transaccion GlobalOnline"
    }
  ]
  
  
  
  
  const FormularioPerfil = () => {
    return (
      <>
        <Card>
          <Row>
            <Col>
            <h1 className="purple-title">Perfil</h1>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <p>Nombre</p>
              <h1>...algún Nombre</h1>
            </Col>

            <Col span={12}>
              <p>Descripción del perfil</p>
              <h1>...alguna descripción</h1>
            </Col>
          </Row>
        </Card>

        <Card>
        <h1 className="purple-title">Tipos de operaciones</h1>
          <Form.Item name="tabla">
            <Table selectable={true} data={dataFormulario} columns={columnsFormulario}/>
          </Form.Item>
        </Card>
      </>
    );
  };

  const FormularioContraseña = () => {
    return (
      <>
        <Card>
          <Row>
            <Col>
            <h1 className="purple-title">Contraseña</h1>
            </Col>
          </Row>

          <Row>
            <Col span={8}>
             <p>Ingresá tu contraseña para generar cambios</p>
            </Col>
          </Row>


          <Row>
            <Col>
              <Form.Item name="contraseña" rules={[{required: true, message:"Ingrese una contraseña"}]}>
                <FloatInput
                  placeholder="Contraseña nueva"
                  label="Contraseña nueva"
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </>
    );
  };

  const { TabPane } = Tabs;
  return (
    <>
      <Tabs defaultActivekey="1" style={{ color: "#C1C5C8" }}>
        {/* Pantalla de Edición de Perfil */}

        <TabPane tab="Datos generales" key="1">
          <Edit component={FormularioPerfil} />
        </TabPane>

        {/* Pantalla de Edicion de Contraseña */}
        <TabPane tab="Contraseña" key="2">
          <Edit component={FormularioContraseña} />
        </TabPane>
      </Tabs>
    </>
  );
}

export default GestionPerfilesEdit;
