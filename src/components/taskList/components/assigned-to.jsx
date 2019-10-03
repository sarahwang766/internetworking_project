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
        title: 'Assigned to',
        dataIndex: 'assigned',
        key: 'assigned',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <a>Add Worker</a>
        ),
    },
];

const data = [{
        key: '1',
        id: '1',
        assigned: 'John Brown',
    },{
        key: '2',
        id: '2',
        assigned: 'John Brown22',
    },{
        key: '3',
        id: '3',
        assigned: 'John Brown333',
    },{
        key: '4',
        id: '4',
        assigned: 'John Brown6666',
    },

];


class AssignedToApp extends React.Component {
    render() {

        return (
            <div>
                <Table columns={columns} dataSource={data} />
          </div>
        )
    }
}
const AssignedTo = Form.create()(AssignedToApp);

export default AssignedTo