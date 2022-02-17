import React, { useState } from "react";
import { Form, Button, Modal, Typography } from "antd";
import PropTypes from "prop-types";

const Edit = ({
  component: Component,
  id,
  textBtnSave,
  textModalConfirm,
  textBtnModalConfirm,
}) => {
  const showModal = () => {
    Modal.confirm({
      icon: null,
      content: (
        <Typography.Title level={4} style={{ textAlign: "center" }}>
          {textModalConfirm}
        </Typography.Title>
      ),
      okText: textBtnModalConfirm,
      okButtonProps: {
        // form: id ? id : "myForm",
        type: "primary",
        htmlType: "submit",
      },
      width: 800,
      cancelText: "Cancelar",
      closable: true,
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const onFinish = (values) => {
    // showModal();
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        // id={id ? id : "myForm"}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={showModal}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
      >
        {<Component></Component>}
        <Form.Item>
          <div style={{ marginTop: "36px", display: "flex", gap: "12px" }}>
            <Button type="primary" htmlType="submit">
              {textBtnSave}
            </Button>
            <Button style={{ border: "2px solid #0DD8B0" }}>Cancelar</Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

Edit.propTypes = {
  textBtnSave: PropTypes.string,
  textModalConfirm: PropTypes.string,
  textBtnModalConfirm: PropTypes.string,
};

Edit.defaultProps = {
  textBtnSave: "Guardar cambios",
  textModalConfirm: "¿Estas seguro de guardar los cambios?",
  textBtnModalConfirm: "Si, generar cambios",
};

export default Edit;
