import React from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Col,
  Row,
  Card,
  Layout,
  Select,
} from "antd";
import Meta from "antd/lib/card/Meta";
import {
  LogoNombreIcon,
  LogoGreenIcon,
  VerticalGradientIcon,
} from "../assets/svg/icons";
import { LoginImg } from "../assets/svg/img";
import Icon from "@ant-design/icons";
import InlineSVG from "svg-inline-react";
import { NotificationError } from "../assets/svg/icons";
import { useTranslation } from "react-i18next";
import test from "../services/test";

const Login = () => {
  const { t, i18n } = useTranslation();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const Login = async () => {
    try {
      const response = await test.getToken();
      sessionStorage.setItem("token", response.data.accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout style={{ background: "#fff" }}>
      <Row style={{ height: "100vh" }}>
        <Col lg={{ span: 12 }}>
          <Icon
            component={LogoGreenIcon}
            style={{
              position: "absolute",
              left: "4.31%",
              right: "93.94%",
              top: "6.64%",
              bottom: "89.63%",
            }}
          />
          <Form
            name="login"
            labelCol={{
              offset: 4,
              span: 10,
            }}
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
            // initialValues={{
            //     remember: true,
            // }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            size="large"
            style={{
              position: "relative",
              top: "25%",
            }}
          >
            <Form.Item
              label={t("login.username.label")}
              name="username"
              rules={[
                {
                  required: true,
                  message: t("login.username.error"),
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={t("login.password.label")}
              name="password"
              rules={[
                {
                  required: true,
                  message: t("login.password.error"),
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>{t("login.rememberme")}</Checkbox>
            </Form.Item>

            <Form.Item>
              <Card
                style={{
                  marginTop: 16,
                  borderLeftColor: "#F23D4F",
                  backgroundColor: "#0000000A",
                  borderLeftWidth: 7,
                }}
                bordered={true}
              >
                <Meta
                  avatar={<Icon component={NotificationError}></Icon>}
                  title={t("login.errorLogin.title")}
                  description={t("login.errorLogin.description")}
                />
              </Card>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" onClick={Login}>
                {t("login.btnLogin")}
              </Button>
            </Form.Item>
          </Form>
        </Col>
        {/* <Col lg={{ span: 6, offset: 4 }}>
                </Col> */}
        <Icon
          component={VerticalGradientIcon}
          // style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        />
        <Col
          style={{
            display: "flex",
            margin: "auto",
            flexDirection: "column",
            marginTop: "6%",
          }}
        >
          <Icon component={LogoNombreIcon} />
          <InlineSVG src={LoginImg} />
        </Col>
      </Row>
      {/* <Row>
            </Row> */}
    </Layout>
  );
};

export default Login;
