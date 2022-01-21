import React, {useState} from "react";
import { Form, Col, Row, Button, Collapse} from "antd";
import './index.less';


const SearchForm = ({array}) => {

const [form] = Form.useForm();
const { Panel } = Collapse;
const [open, setOpen] = useState(["1"]);

const onFinish = (values) => {
  console.log("Received values of form: ", values);
  setOpen([""]);
};

const getFields = () => {
  const fields = [];
  console.log(array);
  
  array.map((item) => {
    fields.push(
      <Col
        key={item.index}
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          flexBasis: "auto",
        }}
      >
        <Form.Item name={item.index}>{item.input}</Form.Item>
      </Col>
    );
  });
  console.log(fields);
  return fields;
};


  return (
    <>
      <Collapse expandIconPosition="right" activeKey={open} onChange={setOpen}>
        <Panel key="1">
          <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            size="large"
          >
            <Row gutter={24} style={{ marginTop: 20 }}>{getFields()}</Row>

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
    </>
  );
};

export default SearchForm;