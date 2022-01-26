import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Row, Col, Modal, Button, Switch } from "antd";
import FloatInput from "../../components/molecules/FloatInput/index";
import FloatSelect from "../../components/molecules/FloatSelected/index";

function EditarSucursal() {
  const { id } = useParams();



  //////////////////////////////////////////////////////////////////////
  const [isModalVisible, setIsModalVisible] = useState(false);

  const setModalVisible = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  /////////////////////////////////////////////////////////////////////
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Form
        form={form}
        id="form-edit-new"
        name="form-edit-new"
        className="ant-advanced-search-form"
        onFinish={onFinish}
        size="large"
      >
        <h3>Datos Principales</h3>

        {id === "new" && (
          <Form.Item
            name="codigo"
            rules={[{ required: true, message: "Ingrese código" }]}
          >
            <FloatInput label="Codigo" placeholder="Código"></FloatInput>
          </Form.Item>
        )}

        <Form.Item
          name="descripcion"
          rules={[{ required: true, message: "Ingrese descripción" }]}
        >
          <FloatInput label="Descripcion" placeholder="Descripcion" />
        </Form.Item>

        {id != "new" && (
          <>
            <p>Estado de la Sucursal</p>
            <Form.Item name="estado" rules={[{ required: true }]}>
              <Switch unCheckedChildren="Inactivo" checkedChildren="Activo" />
            </Form.Item>
          </>
        )}

        <h3>Domicilio</h3>

        <Row gutter={24}>
          <Col>
            <Form.Item
              name="calle"
              rules={[{ required: true, message: "Ingrese calle" }]}
            >
              <FloatInput label="Calle" placeholder="Calle"></FloatInput>
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              name="num"
              rules={[{ required: true, message: "Ingrese número" }]}
            >
              <FloatInput label="Número" placeholder="Número"></FloatInput>
            </Form.Item>
          </Col>

          <Col>
            <Form.Item name="piso">
              <FloatInput label="Piso" placeholder="Piso"></FloatInput>
            </Form.Item>
          </Col>

          <Col>
            <Form.Item name="piso">
              <FloatInput label="Depto" placeholder="Depto"></FloatInput>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Item
              name="localidad"
              rules={[{ required: true, message: "Ingrese localidad" }]}
            >
              <FloatSelect
                width={205}
                label="Localidad"
                placeholder="Localidad"
                options={[
                  {
                    title: "San Juan",
                    value: "San Juan",
                    disabled: false,
                  },
                  {
                    title: "Mendoza",
                    value: "Mendoza",
                    disabled: false,
                  },
                  {
                    title: "San Luis",
                    value: "San Luis",
                    disabled: false,
                  },
                ]}
              ></FloatSelect>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Item
              name="provincia"
              rules={[{ required: true, message: "Ingrese provincia" }]}
            >
              <FloatSelect
                width={205}
                label="Provincia"
                placeholder="Provincia"
                options={[
                  {
                    title: "San Juan",
                    value: "San Juan",
                    disabled: false,
                  },
                  {
                    title: "Mendoza",
                    value: "Mendoza",
                    disabled: false,
                  },
                  {
                    title: "San Luis",
                    value: "San Luis",
                    disabled: false,
                  },
                ]}
              ></FloatSelect>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Item
              name="telefono"
              rules={[{ required: true, message: "Ingrese teléfono" }]}
            >
              <FloatInput label="Telefono" placeholder="Telefono"></FloatInput>
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" onClick={setModalVisible}>
          {id === "new" ? "Crear Sucursal" : "Guardar Cambios"}
        </Button>
        <Link to="/parametrosPrincipales/gestionSucursales">
               <Button style={{margin: "0 8px"}}>Cancelar</Button>
        
        </Link>
 

        <Modal
          title="¿Aplicar Cambios?"
          centered
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button
              form="form-edit-new"
              key="submit"
              type="primary"
              htmlType="submit"
              onClick={handleOk}
            >
              Aplicar Confirmacion
            </Button>,
            <Button key="back" onClick={handleCancel} >
              Cancelar
            </Button>,
          ]}
        ></Modal>
      </Form>
    </>
  );
}

export default EditarSucursal;
