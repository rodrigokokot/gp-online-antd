import React, { useState } from "react";
import { Button, Modal, Form, Radio, Col } from "antd";
import FloatInput from "../../molecules/FloatInput";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { useTranslation } from "react-i18next";

const Export = ({dataExport, disabled}) => {
  const { t} = useTranslation();
  const [visible, setVisible] = useState(false);

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  function onCancel() {
    setVisible(false);
  }

  const onFinish = (values) => {
    switch (values.option) {
      case "pdf":
        console.log("exportar pdf");
        break;
      case "xlsx":
        const ws = XLSX.utils.json_to_sheet(dataExport);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, values.nombre + fileExtension);
        break;
      case "docx":
        console.log("exportar a word");
        break;
    }
    setVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo.values);
  };

  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
          disabled={disabled}
        >
          {t("exportar")}
        </Button>
      </Col>
      <Modal
        visible={visible}
        title="Exportar"
        onCancel={onCancel}
        onOk={(e) => console.log(e.values)}
        footer={[]}
      >
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Nombre" name="nombre" rules={[{ required: true }]}>
            <FloatInput
              value="Débito/Prueba/sistema"
              placeholder="Nombre del archivo"
            ></FloatInput>
          </Form.Item>

          <Form.Item name="option" label="Tipo" rules={[{ required: true }]}>
            <Radio.Group buttonStyle="solid">
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
    </>
  );
};

export default Export;
