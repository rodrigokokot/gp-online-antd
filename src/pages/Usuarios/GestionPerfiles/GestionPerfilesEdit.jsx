import React from "react";
import Edit from "../../../components/organisms/Edit/index";
import Table from "../../../components/organisms/Table/index";
import FloatInput from "../../../components/molecules/FloatInput";
import { Card, Row, Tabs, Col, Form, Typography } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

function GestionPerfilesEdit() {
  const columnsFormulario = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Descripcion",
      selector: (row) => row.descripcion,
      sortable: false,
    },
  ];

  const dataFormulario = [
    {
      id: "1",
      nombre: "Rol de prueba",
      descripcion: "Lectura de modelos transaccion GlobalOnline",
    },
  ];

  const FormularioPerfil = () => {
    return (
      <>
        <Card style={{ borderRadius: "16px", marginBottom: "12px" }}>
          <Row>
            <Col>
              <Typography.Title level={4} style={{ color: "#ab218e" }}>
                Perfil
              </Typography.Title>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item name="nombre">
                <FloatInput
                  outline
                  defaultValue="pedroPz"
                  type="text"
                  label="Nombre"
                ></FloatInput>
              </Form.Item>
              <Form.Item name="descripcion">
                <FloatInput
                  outline
                  defaultValue="Admin de GP con tareas de gestión"
                  type="text"
                  label="Descripcion"
                ></FloatInput>
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Card style={{ borderRadius: "16px", marginBottom: "12px" }}>
          <Typography.Title level={4} style={{ color: "#ab218e" }}>
            Tipo de operaciones
          </Typography.Title>
        </Card>
        <Form.Item name="tabla">
          <Table
            selectable={true}
            data={dataFormulario}
            columns={columnsFormulario}
          />
        </Form.Item>
      </>
    );
  };

  const FormularioContraseña = () => {
    return (
      <>
        <Card style={{ borderRadius: "16px", marginBottom: "12px" }}>
          <Row>
            <Col>
              <Typography.Title level={4} style={{ color: "#ab218e" }}>
                Contraseña
              </Typography.Title>
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Ingrese Contraseña" },
                  {
                    validator: (_, value1) =>
                      value1 && value1.length >= 8
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error("Debe ingresar al menos 8 caracteres")
                          ),
                  },
                  {
                    validator: (_, value2) =>
                      value2 && value2.match(/\d+/g)
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error("Debe ingresar al menos un número")
                          ),
                  },
                ]}
              >
                <FloatInput
                  outline
                  label="Contraseña nueva"
                  placeholder="Ingresá tu contraseña para generar cambios"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
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
          <Edit
            component={FormularioPerfil}
            textBtnSave="Crear perfil"
            textModalConfirm="¿Estas seguro de crear este perfil?"
            textBtnModalConfirm="Si, crear"
          />
        </TabPane>

        {/* Pantalla de Edicion de Contraseña */}
        <TabPane tab="Contraseña" key="2">
          <Edit
            component={FormularioContraseña}
            textBtnSave="Blanquear contraseña"
            textModalConfirm="¿Estas seguro de Blanquear la contraseña?"
            textBtnModalConfirm="Si, guardar"
          />
        </TabPane>
      </Tabs>
    </>
  );
}

export default GestionPerfilesEdit;
