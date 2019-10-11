import React from 'react';
import {

    Form,
    Table,
    Divider,
 

} from 'antd';




const columns = [{
        title: 'Task ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Subject',
        dataIndex: 'subject',
        key: 'subject',
    },
    {
        title: 'Creation Date',
        dataIndex: 'creationDate',
        key: 'creationDate',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
        <a>Open</a>
        <Divider type="vertical" />
        <a>Close</a>
      </span>
        ),
    },
];

const data = [{
        key: '1',
        id: '1',
        subject: 'Science',
        creationDate: '2019-04-05',
        status: 'open',
    },{
        key: '2',
        id: '2',
        subject: 'History',
        creationDate: '2019-04-06',
        status: 'closed',
    },{
        key: '3',
        id: '3',
        subject: 'Math',
        creationDate: '2019-07-05',
        status: 'open',
    },{
        key: '4',
        id: '4',
        subject: 'Music',
        creationDate: '2019-04-07',
        status: 'closed',
    },

];





class TaskStatusApp extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <Table columns={columns} dataSource={data} />
          </div>
        )
    }
}
const TaskStatus = Form.create()(TaskStatusApp);

export default TaskStatus