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


const columns = [{
        title: 'Worker ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'The Number of Tasks Completed',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Performance Rate',
        dataIndex: 'rate',
        key: 'rate',
    },
];

const data = [{
        key: '1',
        id: '1',
        username: 'John Brown',
        number: '50',
        rate: '20%',

    }, {
        key: '2',
        id: '2',
        username: 'John Brown22',

        number: '52',
        rate: '75%',
    }, {
        key: '3',
        id: '3',
        username: 'John Brown333',
        number: '53',
        rate: '75%',
    }, {
        key: '4',
        id: '4',
        username: 'John Brown6666',
        number: '372',
        rate: '23%',
    },

];



class WorkerListApp extends React.Component {

    render() {

        return (
            <div >
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}
const WorkerList = Form.create()(WorkerListApp);

export default WorkerList