import React from 'react';
import { Form, Input, Button, Checkbox, Col, Row, Image, Layout } from 'antd';
import { LogoNombreIcon, LogoGreenIcon, VerticalGradientIcon  } from '../assets/svg/icons';
import { LoginImg } from "../assets/svg/img";
import Icon from '@ant-design/icons';
import InlineSVG from 'svg-inline-react';

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Layout style={{ background: '#fff'}}>
            <Row style={{ height: '100vh' }}>
                <Col lg={{ span: 12}}>
                    <Icon component={LogoGreenIcon} style={{ position: 'absolute', left: '4.31%', right: '93.94%', top: '6.64%', bottom: '89.63%' }} />
                    <Form
                        name="login"
                        labelCol={{
                            offset: 4,
                            a: 10,
                        }}
                        wrapperCol={{
                            offset: 4,
                            a: 16,
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
                                position: 'relative',
                                top: '25%',
                        }}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
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
                            a: 16,
                            }}
                        >
                            <Checkbox>Recuérdame</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                            offset: 8,
                            a: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" disabled>
                            Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                {/* <Col lg={{ span: 6, offset: 4 }}>
                </Col> */}
                <Icon component={VerticalGradientIcon}
                // style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                />
                <Col style={{ display: 'flex', margin: 'auto', flexDirection: 'column', marginTop: '6%' }}>
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
