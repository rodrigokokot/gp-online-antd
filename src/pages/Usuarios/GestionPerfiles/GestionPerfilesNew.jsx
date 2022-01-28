import React from "react";
import Edit from "../../../components/organisms/Edit/index";
import Table from "../../../components/organisms/Table/index";
import FloatInput from "../../../components/molecules/FloatInput";
import { Card, Row, Col, Form } from "antd";
import PurpleTitle from "../../../components/molecules/PurpleTitle";


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
              <PurpleTitle text="Datos Principales" />
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
            <PurpleTitle text="Tipos de Operaciones" />

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
