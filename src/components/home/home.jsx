import React from 'react';
import { Row, Col, Card, Form, Icon, Input, Button, Checkbox, Tabs, Select } from 'antd';
import { withRouter, Link } from 'react-router-dom';



const { TabPane } = Tabs;
const { Option } = Select;

class HomePageApp extends React.Component {
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
            <div style={{ width:'80%',margin:'3% auto 0' }}>
                <div style={{overflow:'hidden',textAlign:'right'}}>
                  <Link to='/login'>Sign in </Link>
                  &nbsp; &nbsp; &nbsp;
                  <Link to='/reg'>Create an account</Link>
                </div>
                <div>
                  <h1>HomePage</h1>
                  <p style={{textAlign:'center'}}>Answer simple questions to help us get the most correct answer</p>
                  <div>
                    <p>Project Team : </p>
                    <p>Jack Huggart - 12604512</p>
                    <p>William Roson - 11041249</p>
                    <p>Colin Luu - 99131753</p>
                    <p>Sebastian Aroney - 12606481</p>
                    <p>Xiaohan Wang - 12806295</p>
                    <p>Ty Yarwood - 12552434</p>
                    <p>Supervisor - Xianzhi Wang</p>
                  </div>

                </div>

            </div>
        )
    }
}
const HomePage = Form.create()(HomePageApp);

export default withRouter(HomePage)