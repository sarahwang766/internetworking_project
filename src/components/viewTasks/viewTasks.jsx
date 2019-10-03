import React from 'react';
import { List, Typography, Row, Col, Radio, Form, Button } from 'antd';
import { withRouter, Link } from 'react-router-dom';


const data = [
    '[Question Description]'
];

class viewTaskApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { getFieldDecorator } = this.props.form;

        return (
            <div style={{ width:'80%',margin:'3% auto 0' }}>

                <div style={{overflow:'hidden',}}>
                  <span>
                    <Link to='/lists'>Back to Task list</Link>
                  </span>
                  <span style={{'float':'right'}}>
                    <Link to='/login'>Sign out</Link>
                  </span>
                </div>

                <div>
                  <h1>Question</h1>
                  <div>
                  <Row>
                     <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                       Question ID:
                     </Col>
                     <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                       Subject:
                     </Col>
                     <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                       Creation Date:
                     </Col>
                   </Row>
                  </div>

                  <div>

                  <Form  style={{textAlign:'center'}} >
                  {
                    data.map(item=>

                      <Form.Item label={`Q. ${item}`}>
                        {getFieldDecorator('sss', {})(
                        <Radio.Group >
                           <Radio  value="2"> Two </Radio>
                           <Radio  value="3"> Three </Radio>
                           <Radio  value="4"> Four </Radio>
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




                  </div>



                </div>







            </div>
        )
    }
}
const viewTask = Form.create()(viewTaskApp);

export default withRouter(viewTask)