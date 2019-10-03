import React from 'react';
import { Row, Col, Card, Form, Icon, Input, Button, Checkbox, Tabs, Select } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import CreateTask from './components/create-task.jsx';
import TaskList from './../taskList/task-list.jsx';
import WorkerList from './components/work-list.jsx';



const { TabPane } = Tabs;
const { Option } = Select;

class taskApp extends React.Component {
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
                <h1>AdminPage</h1>
                <div style={{overflow:'hidden',textAlign:'right'}}>
                  <Link to='/home'>Sign out</Link>
                </div>
                <Tabs animated={true} style={{textAlign: 'center'}}>
                   <TabPane tab="Task List" key="1" style={{textAlign: 'left'}}>
                    <TaskList />
                   </TabPane>
                   <TabPane tab="Worker List" key="2" style={{textAlign: 'left'}}>
                    <WorkerList />
                   </TabPane>
                   <TabPane tab="Create Task" key="3" style={{textAlign: 'left'}}>
                     <CreateTask />
                   </TabPane>
                 </Tabs>
            </div>
        )
    }
}
const Task = Form.create()(taskApp);

export default withRouter(Task)