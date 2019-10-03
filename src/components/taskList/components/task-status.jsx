import React from 'react';
import {
    Row,
    Col,
    Card,
    Form,
    Table,
    Divider,
    Tag,
    Tabs,
    Icon,
    Input,
    Button,
    Checkbox,
    Select,
    Radio
} from 'antd';

const { TextArea } = Input;
const { TabPane } = Tabs;



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
            <a>close</a>
        ),
    },
];

const data = [{
        key: '1',
        id: '1',
        subject: 'John Brown',
        creationDate: '2019-04-05',
        status: 0,
    },{
        key: '2',
        id: '2',
        subject: 'John Brown22',
        creationDate: '2019-04-06',
        status: 0,
    },{
        key: '3',
        id: '3',
        subject: 'John Brown333',
        creationDate: '2019-07-05',
        status: 2,
    },{
        key: '4',
        id: '4',
        subject: 'John Brown6666',
        creationDate: '2019-04-07',
        status: 1,
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