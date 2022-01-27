import React, { useState } from "react";
import { Button, Modal, Form, Input, Radio, Checkbox } from "antd";
import FloatInput from "../../molecules/FloatInput";

const Export = () => {
  const [visible, setVisible] = useState(false);
  const [optionSelected, setOptionSelected] = useState("pdf");

  function onCancel() {
    setVisible(false);
  }

  function selectOption(e) {
    setOptionSelected(e.target.value);
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Exportar
      </Button>
      <Modal
        visible={visible}
        title="Exportar"
        onCancel={onCancel}
        onOk={(e) => console.log(e)}
        footer={[]}
      >
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Nombre"
            name="nombre"
          >
            <FloatInput></FloatInput>
          </Form.Item>

          <Form.Item name="option" label="Tipo">
            <Radio.Group defaultValue="pdf" buttonStyle="solid">
              <Radio.Button value="pdf">PDF</Radio.Button>
              <Radio.Button value="xlsx">XLSX</Radio.Button>
              <Radio.Button value="docx">DOCX</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Export;
