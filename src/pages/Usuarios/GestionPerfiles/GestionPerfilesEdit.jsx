import React from "react";
import Edit from "../../../components/organisms/Edit/index";
import Table from "../../../components/organisms/Table/index";
import FloatInput from "../../../components/molecules/FloatInput";
import { Card, Row, Tabs, Col, Form} from "antd";
import Title from "antd/lib/skeleton/Title";

function GestionPerfilesEdit() {
  const FormularioPerfil = () => {
    return (
      <>
        <Card>
          <Row>
            <Col>
              <h1>Perfil</h1>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <p>Nombre</p>
              <h3>...algún Nombre</h3>
            </Col>

            <Col span={12}>
              <p>Descripción del perfil</p>
              <h3>...alguna descripción</h3>
            </Col>
          </Row>
        </Card>

        <Card>
          <Title>Tipos de Operaciones</Title>
          <Form.Item name="tabla">
            <Table />
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
              <h1>Contraseña</h1>
            </Col>
          </Row>

          <Row>
            <Col>
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
