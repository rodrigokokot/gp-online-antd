import React from "react";
import Edit from "../../../components/organisms/Edit/index";
import Table from "../../../components/organisms/Table/index";
import FloatInput from "../../../components/molecules/FloatInput";
import { Card, Row, Col, Form, Typography } from "antd";


export default function GestionPerfilesNew() {

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
        <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
          <Typography.Title level={4} style={{ color: '#ab218e' }}>Datos Principales</Typography.Title>

          <Row>
            <Col span={8}>
              <Form.Item name="nombre" rules={[{required: true, message: "Ingrese nombre"}]}>
                <FloatInput
                  outline
                  placeholder="Nombre del Nuevo perfil"
                  label="Nombre del Nuevo perfil"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <Form.Item name="descripcion" rules={[{required: true, message:"Ingrese descripción"}]}>
                <FloatInput
                  outline
                  placeholder="Descripción del perfil"
                  label="Descripción del perfil"
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
          <Typography.Title level={4} style={{ color: '#ab218e' }}>Tipos de operaciones</Typography.Title>
        </Card>
        <Table selectable={true} data={dataFormulario} columns={columnsFormulario}/>
      </>
    );
  };

  return(
  <>
    <Edit component={FormularioPerfil}  textBtnSave="Crear perfil" textModalConfirm="¿Estas seguro de crear este perfil?" textBtnModalConfirm="Si, crear"/>
  </>);
}
