import React, { useState } from "react";
import { Form, Col, Row, Button, Collapse,Card } from "antd";
import "./index.less";
import Icon from "@ant-design/icons";
import {
  CollapseClose,
  CollapseOpen,
} from "../../../assets/svg/icons/collapse";

const SearchForm = ({ array, parentCallback, title }) => {
  const [form] = Form.useForm();
  const { Panel } = Collapse;
  const [open, setOpen] = useState(["1"]);

  const onFinish = (values) => {
    
    console.log(values);
    parentCallback(values);
    // console.log("Received values of form: ", values);
    setOpen([""]);
  };

  const getFields = () => {
    const fields = [];
    array.map((item) => {
      fields.push(
        <Col key={item.index}>
          <Form.Item name={item.index}>{item.input}</Form.Item>
        </Col>
      );
    });
    return fields;
  };

  return (
      <Collapse style={{ backgroundColor:'white' }}
        expandIconPosition="right"
        bordered={false}
        activeKey={open}
        onChange={setOpen}
        expandIcon={({ isActive }) => (
          <Icon component={isActive ? CollapseClose : CollapseOpen} />
        )}
      >
        <Panel key="1" header={title}>
          {console.log(title)}
          <Form style={{ backgroundColor:'white' }}
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            size="large"
          >
            <Row gutter={24} style={{ marginTop: 20 }}>
              {getFields()}
            </Row>

            <Row style={{ marginTop: 40 }}>
              <Col span={24} style={{ textAlign: "left" }}>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
                <Button
                  style={{ margin: "0 8px" }}
                  onClick={() => {
                    form.resetFields();
                  }}
                >
                  Clear
                </Button>
              </Col>
            </Row>
          </Form>

        </Panel>
        
      </Collapse>
  );
};

export default SearchForm;
