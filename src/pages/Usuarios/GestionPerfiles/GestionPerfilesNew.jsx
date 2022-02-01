import React from "react";
import Edit from "../../../components/organisms/Edit/index";
import Table from "../../../components/organisms/Table/index";
import FloatInput from "../../../components/molecules/FloatInput";
import { Card, Row, Col, Form } from "antd";


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
        <Card>
          <Row>
            <Col>
            <h1 className="purple-title">Datos Principales</h1>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item name="nombre" rules={[{required: true, message: "Ingrese nombre"}]}>
                <FloatInput
                  placeholder="Nombre del Nuevo perfil"
                  label="Nombre del Nuevo perfil"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item name="descripcion" rules={[{required: true, message:"Ingrese descripción"}]}>
                <FloatInput
                  placeholder="Descripción del perfil"
                  label="Descripción del perfil"
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Card>
        <h1 className="purple-title">Tipos de operaciones</h1>

          <Table selectable={true} data={dataFormulario} columns={columnsFormulario}/>
        </Card>
      </>
    );
  };

  return(
  <>
    <Edit component={FormularioPerfil} />
  </>);
}
