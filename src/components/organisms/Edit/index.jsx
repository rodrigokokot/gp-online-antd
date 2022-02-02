import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Radio, Modal, Typography } from "antd";
import FloatInput from "../../molecules/FloatInput";

const Edit = ({ component: Component }) => {
  // const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    // setIsModalVisible(true);
    Modal.confirm({
      icon: null,
      content: <Typography.Title level={4} style={{ textAlign: 'center' }}>¿Estás seguro que deseas generar estos cambios a esta sucursal?</Typography.Title>,
      okText: "Si, generar cambios",
      width: 800,
      cancelText: "Cancelar",
      closable: true,
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    })
  };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        id="myForm"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size='large'
      >
        {<Component></Component>}
        <Form.Item>
          <div  style={{ marginTop: '36px', display: 'flex', gap: '12px' }}>
            <Button type="primary" onClick={showModal}>
              Guardar cambios
            </Button>
            <Button style={{ border: '2px solid #0DD8B0' }}>Cancelar</Button>
          </div>
        </Form.Item>
      </Form>

      {/* <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button form="myForm" type="primary" htmlType="submit" onClick={handleOk}>Si, generar cambios</Button>,
          <Button onClick={handleCancel}>Cancelar</Button>
        ]}
      >
        <h2>Esta seguro que desea hacer cambios en esta sucursal?</h2>
      </Modal> */}

    </>
  );
};

export default Edit;
