import React, { useState } from "react";
import { Form, Button, Modal, Typography } from "antd";
import PropTypes from 'prop-types'

const Edit = ({ component: Component, textBtnSave, textModalConfirm, textBtnModalConfirm }) => {
  // const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    // setIsModalVisible(true);
    Modal.confirm({
      icon: null,
      content: <Typography.Title level={4} style={{ textAlign: 'center' }}>{textModalConfirm}</Typography.Title>,
      okText: textBtnModalConfirm,
      okButtonProps: { form:"myForm", type:"primary", htmlType:"submit" } ,
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
              {textBtnSave}
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

Edit.propTypes = {
  textBtnSave: PropTypes.string,
  textModalConfirm: PropTypes.string,
  textBtnModalConfirm: PropTypes.string
}

Edit.defaultProps = {
  textBtnSave: "Guardar cambios",
  textModalConfirm: "¿Estas seguro de guardar los cambios?",
  textBtnModalConfirm: "Si, generar cambios"
}

export default Edit;
