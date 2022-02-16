import React from "react";
import Edit from "../../../components/organisms/Edit/index";
import Table from "../../../components/organisms/Table/index";
import FloatInput from "../../../components/molecules/FloatInput";
import { Card, Row, Tabs, Col, Form, Typography,Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

function GestionPerfilesEdit() {
  const { t} = useTranslation();
  
  const columnsFormulario = [
    {
      name:(t("gestionperfiles.edit.tab1.table.column1")),
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name:(t("gestionperfiles.edit.tab1.table.column2")),
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
              <Typography.Title level={3}  style={{ color: '#ab218e' }}>
              {t("gestionperfiles.edit.tab1.title1")}
              </Typography.Title>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item name="nombre" rules={[{required: true, message: (t("gestionperfiles.edit.tab1.outline.perfil.error"))}]}> 
                <FloatInput
                  outline
                  defaultValue="pedroPz"
                  type="text"
                  label={t("gestionperfiles.edit.tab1.outline.perfil.label")}
                ></FloatInput>
              </Form.Item>
              <Form.Item name="descripcion" rules={[{required: true, message:(t("gestionperfiles.edit.tab1.outline.descripcion.error"))}]}> 
                <FloatInput
                  outline
                  defaultValue="Admin de GP con tareas de gestión"
                  type="text"
                  label={t("gestionperfiles.edit.tab1.outline.descripcion.label")}
                ></FloatInput>
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
          <Typography.Title level={3}  style={{ color: '#ab218e' }}>
          {t("gestionperfiles.edit.tab1.title2")}
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
        <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
        <Typography.Title level={3}  style={{ color: '#ab218e' }}>{t("gestionperfiles.edit.tab2.password.title")}</Typography.Title>
        <Col span={6}>
          <Form.Item name="password" rules = {[
              { required: true, message: (t("gestionperfiles.edit.tab2.password.error1")) },
              {
                validator: (_, value1) =>
                  value1 && value1.length >= 8
                    ? Promise.resolve()
                    : value1.length === 0 ? Promise.reject(new Error('')) : Promise.reject(new Error((t("gestionperfiles.edit.tab2.password.error2")))),
              },
              {
                validator: (_, value2) =>
                  value2 && value2.match(/\d+/g)
                    ? Promise.resolve()
                    : value2.length === 0 ? Promise.reject(new Error('')) : Promise.reject(new Error((t("gestionperfiles.edit.tab2.password.error3")))),
              },
            ]}
          >
             <Input.Password 
             style={ { borderRadius: '0.5em', boxShadow: '#ab218e'} }   
              placeholder={t("gestionperfiles.edit.tab2.password.label")} iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            ></Input.Password>  
          </Form.Item>
        </Col>
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
          <Edit component={FormularioPerfil}  
          textBtnSave={t("gestionperfiles.edit.edit1.save")} 
          textModalConfirm={t("gestionperfiles.edit.edit1.confirm")} 
          textBtnModalConfirm={t("gestionperfiles.edit.edit1.btnconfirm")}/>
        </TabPane>

        {/* Pantalla de Edicion de Contraseña */}
        <TabPane tab="Contraseña" key="2">
          <Edit
            component={FormularioContraseña}
            textBtnSave={t("gestionperfiles.edit.edit2.save")} 
              textModalConfirm={t("gestionperfiles.edit.edit2.confirm")} 
              textBtnModalConfirm={t("gestionperfiles.edit.edit2.btnconfirm")}
          />
        </TabPane>
      </Tabs>
    </>
  );
}

export default GestionPerfilesEdit;
