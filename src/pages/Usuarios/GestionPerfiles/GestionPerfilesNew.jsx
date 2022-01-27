import React from "react";
import Edit from "../../../components/organisms/Edit/index";
import Table from "../../../components/organisms/Table/index";
import FloatInput from "../../../components/molecules/FloatInput";
import { Card, Row, Col, Form } from "antd";


export default function GestionPerfilesNew() {
  const FormularioPerfil = () => {
    return (
      <>
        <Card>
          <Row>
            <Col>
              <h3>Datos Principales</h3>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item>
                <FloatInput
                  placeholder="Nombre del Nuevo perfil"
                  label="Nombre del Nuevo perfil"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item>
                <FloatInput
                  placeholder="Descripción del perfil"
                  label="Descripción del perfil"
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Card>
          <h3>Tipos de Operaciones</h3>

          <Table />
        </Card>
      </>
    );
  };

  return(
  <>
    <Edit component={FormularioPerfil} />
  </>);
}
