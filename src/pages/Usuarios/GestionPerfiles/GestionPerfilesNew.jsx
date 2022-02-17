import React from "react";
import Edit from "../../../components/organisms/Edit/index";
import Table from "../../../components/organisms/Table/index";
import FloatInput from "../../../components/molecules/FloatInput";
import { Card, Row, Col, Form, Typography } from "antd";
import { useTranslation } from "react-i18next";


export default function GestionPerfilesNew() {
    const { t} = useTranslation();

  const columnsFormulario = [
    {
      name:(t("gestionperfiles.new.table.column1")),
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name:(t("gestionperfiles.new.table.column2")),
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
          <Typography.Title level={3} style={{ color: '#ab218e' }}>
          {t("gestionperfiles.new.title1")}
          </Typography.Title>

          <Row>
            <Col span={8}>
              <Form.Item name="nombre" rules={[{required: true, message: (t("gestionperfiles.new.outline.perfil.error"))}]}>
                <FloatInput
                  outline
                  placeholder={t("gestionperfiles.new.outline.perfil.label")}
                  label={t("gestionperfiles.new.outline.perfil.label")}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <Form.Item name="descripcion" rules={[{required: true, message:(t("gestionperfiles.new.outline.descripcion.error"))}]}>
                <FloatInput
                  outline
                  placeholder={t("gestionperfiles.new.outline.descripcion.label")}
                  label={t("gestionperfiles.new.outline.descripcion.label")}
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
          <Typography.Title level={3} style={{ color: '#ab218e' }}>
          {t("gestionperfiles.new.title2")}
          </Typography.Title>
        </Card>
        <Table selectable={true} data={dataFormulario} columns={columnsFormulario}/>
      </>
    );
  };

  return(
  <>
    <Edit component={FormularioPerfil}  
    textBtnSave="Crear perfil" 
    textModalConfirm="¿Estas seguro de crear este perfil?" 
    textBtnModalConfirm="Si, crear"/>
  </>);
}
