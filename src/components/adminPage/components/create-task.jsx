import React from 'react';
import {  Form,  Input, Button, Radio } from 'antd';

const { TextArea } = Input;


const answers = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
}


class CreateTaskApp extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        asnum: 0,
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };


    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            asnum: e.target.value,
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { asnum } = this.state;

        const InputApp = (asnum) => {
            var items = [];
            for (var i = 0; i < asnum; i++) {
                items.push(
                    <Form.Item key={i} label={answers[i]}>
                      {getFieldDecorator(`subject${answers[i]}`, {
                        rules: [
                          {
                            required: true,
                            message: 'Please enter the answer',
                          },
                        ],
                      })(<Input  placeholder='Please enter the answer'/>)}
                    </Form.Item>
                );
            }
            console.log("items -->", items);
            return items
        }

        return (
            <div style={{ width:'80%',margin:'3% auto 0' }}>
                <Form onSubmit={this.handleSubmit} >


                <Form.Item label="subject">
                  {getFieldDecorator('subject', {
                    rules: [
                      {
                        required: true,
                        message: 'Please enter subject',
                      },
                    ],
                  })(<Input  placeholder='Please enter subject'/>)}
                </Form.Item>

                <Form.Item label="question">
                  {getFieldDecorator('question', {
                    rules: [
                      {
                        required: true,
                        message: 'Please enter question',
                      },
                    ],
                  })(<TextArea  rows={4}  placeholder='Please enter question'/>)}
                </Form.Item>

                <Form.Item label="the number of answers">
                  {getFieldDecorator('number', {
                    rules: [
                      {
                        required: true,
                        message: 'select the number',
                      },
                    ],
                  })(

                  <Radio.Group onChange={this.onChange} >
                     <Radio  value="2"> Two </Radio>
                     <Radio  value="3"> Three </Radio>
                     <Radio  value="4"> Four </Radio>
                   </Radio.Group>
                  )}
                </Form.Item>


                    {InputApp(asnum)}



                    <Form.Item>

                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Create a Task
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
const CreateTask = Form.create()(CreateTaskApp);

export default CreateTask