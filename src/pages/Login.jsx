import React from 'react';
import { Form, Input, Button, Checkbox, Col, Row } from 'antd';
import { LogoNombreIcon, LogoGreenIcon } from '../assets/svg/icons';
import Icon from '@ant-design/icons';

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <>
            <Row>
                <Col span={24}>
                    <Icon component={LogoGreenIcon} style={{ position: 'absolute', left: '4.31%', right: '93.94%', top: '6.64%', bottom: '89.63%' }} />
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 4 }}>
                    <Form
                        // name="login"
                        // labelCol={{
                        //     span: 8,
                        // }}
                        // wrapperCol={{
                        //     span: 16,
                        // }}
                        // initialValues={{
                        //     remember: true,
                        // }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout="vertical"
                        size="large"
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
                                span: 16,
                                }}
                            >
                                <Checkbox>Recuérdame</Checkbox>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                offset: 8,
                                span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                Submit
                                </Button>
                            </Form.Item>
                    </Form>
                </Col>

            </Row>
        </>
    );
};

export default Login;
