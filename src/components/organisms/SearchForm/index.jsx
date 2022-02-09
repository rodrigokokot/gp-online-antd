import React, { useState } from "react";
import { Form, Col, Row, Button, Collapse, Typography } from "antd";
import "./index.less";
import Icon from "@ant-design/icons";
import {
  CollapseClose,
  CollapseOpen,
} from "../../../assets/svg/icons/collapse";
import useRangePicker from "../../../hooks/useRangePicker";

const SearchForm = ({ array, parentCallback, title, span }) => {
  const [form] = Form.useForm();
  const { Panel } = Collapse;
  const [open, setOpen] = useState(["1"]);
  const { state } = useRangePicker(); //state del rangepicker

  const onFinish = (values) => {
    console.log(values);
    parentCallback(values);
  };

  return (
    <Collapse
      style={{ backgroundColor: "white", borderRadius: "0.5em" }}
      expandIconPosition="right"
      bordered={false}
      activeKey={open}
      onChange={setOpen}
      expandIcon={({ isActive }) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Typography.Text>
            {isActive ? "Colapsar búsqueda" : "Refinar búsqueda"}
          </Typography.Text>
          <Icon component={isActive ? CollapseClose : CollapseOpen} />
        </div>
      )}
    >
      <Panel
        key="1"
        header={
          <Typography.Title level={5} style={{ color: "#AB218E" }}>
            {title}
          </Typography.Title>
        }
      >
        <Form
          style={{ backgroundColor: "white" }}
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish}
          size="large"
        >
          <Row gutter={24} style={{ marginTop: 20 }}>
            {array.map((item) => {
              return (
                <Col key={item.index} span={span}>
                  <Form.Item name={item.index}>{item.input}</Form.Item>
                </Col>
              );
            })}
          </Row>

          <Row style={{ marginTop: 40 }}>
            <Col span={24} style={{ textAlign: "left" }}>
              <Button type="primary" htmlType="submit" onClick={()=>setOpen([""])}>
                Buscar
              </Button>
              <Button
                type="text"
                style={{ margin: "0 8px" }}
                onClick={() => {
                  form.resetFields();
                }}
              >
                Restablecer
              </Button>
            </Col>
          </Row>
        </Form>
      </Panel>
    </Collapse>
  );
};

export default SearchForm;
