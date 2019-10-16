import React from 'react';
import {Radio, Form, Button,Card } from 'antd';
import { withRouter, Link } from 'react-router-dom';


const data = [
    '[Question Description]'
];

class viewTaskApp extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
          if (!err) {
              this.props.history.push('/questionlist')
          }
      });
  };

    render() {
      const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };
        const { getFieldDecorator } = this.props.form;

        return (
            <div style={{ width:'80%',margin:'3% auto 0' }}>

                <div style={{overflow:'hidden',}}>
                  <span>
                    <Link to='/questionList'>Back to Task list</Link>
                  </span>
                  <span style={{'float':'right'}}>
                    <Link to='/home'>Sign out</Link>
                  </span>
                </div>

                <div>
                  <h1>Question</h1>
                  <div>
                  
                    <Card>
                    <Card.Grid>
                     
                       Question ID:
                     
                     </Card.Grid>
                     <Card.Grid>
                    
                       Subject:
                     
                     </Card.Grid>
                     <Card.Grid>
                     
                       Creation Date:
                     
                     </Card.Grid>
                     </Card>
                   
                  </div>

                  <div>
                    {data.map(item=>
                 <Card  title={`Q. ${item}`}>
                  <Form onSubmit={this.handleSubmit} >
                  {
                    data.map(item=>

                      <Form.Item >
                        {getFieldDecorator('sss', {})(
                        <Radio.Group >
                           <Radio style={radioStyle} value="A"> Answer A</Radio>
                           <Radio style={radioStyle}value="B"> Answer B </Radio>
                           <Radio style={radioStyle} value="C"> Answer C </Radio>
                         </Radio.Group>

                        )} 
                      </Form.Item>

                      )
                  }








                      <Form.Item>

                          <Button type="primary" htmlType="submit" className="login-form-button">
                              Submit
                          </Button>
                      </Form.Item>
                  </Form>



                  </Card>
                   )}
                  </div>
                 



                </div>







            </div>
        )
    }
}
const viewTask = Form.create()(viewTaskApp);

export default withRouter(viewTask)