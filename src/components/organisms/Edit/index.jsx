import React, { useState } from "react";
import { Form, Button, Modal } from "antd";

const Edit = ({ component: Component, key }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log("key",key);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        id={ key !== undefined ? key : "myForm" }
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size='large'
      >
        {<Component></Component>}
      </Form>
      
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button form={ key !== undefined ? key : "myForm" } type="primary" htmlType="submit" onClick={handleOk}>Si, generar cambios</Button>,
          <Button onClick={handleCancel}>Cancelar</Button>
        ]}
      >
        <h2>Esta seguro que desea hacer cambios en esta sucursal?</h2>
      </Modal>

      <Button type="primary" onClick={showModal}>
        Guardar cambios
      </Button>
      <Button>Cancelar</Button>
    </>
  );
};

export default Edit;
