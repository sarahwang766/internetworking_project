import React from 'react';
import { Row, Col, Card, Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.css'

class LoginApp extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{ marginTop: '10%' }}>
                <Row >
                    <Col span={6} offset={9} style={{ background: 'red', }}>
                        <Card title="Login" style={{ width: "100%" }} className='login-card'>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Username"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input.Password
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="input password" />
                                       ,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                    <a href="/reg" className='login-form-reg'>register now!</a>
                                </Form.Item>
                            </Form>
                        </Card>

                    </Col>
                </Row>
            </div>
        )
    }
}
const Login = Form.create()(LoginApp);

export default Login