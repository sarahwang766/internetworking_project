import React from 'react';
import {  Form, Tabs } from 'antd';
import TaskStatus from './components/task-status.jsx'
import AssignedTo from './components/assigned-to.jsx'
import Results from './components/results.jsx'


const { TabPane } = Tabs;


class TaskListApp extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {


        return (
            <div style={{ width:'95%',margin:'3% auto 0' }}>
              <Tabs animated={true} type="card" style={{textAlign: 'center'}}>
                 <TabPane tab="Task Status" key="1" style={{textAlign: 'left'}}>
                     <TaskStatus />
                 </TabPane>
                 <TabPane tab="Assigned to" key="2" style={{textAlign: 'left'}}>
                     <AssignedTo />
                 </TabPane>
                 <TabPane tab="Results" key="3" style={{textAlign: 'left'}}>
                     <Results />
                 </TabPane>
               </Tabs>
          </div>
        )
    }
}
const TaskList = Form.create()(TaskListApp);

export default TaskList