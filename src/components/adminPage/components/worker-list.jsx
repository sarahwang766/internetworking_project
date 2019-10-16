import React from 'react';
import {
 
    Form,
    Table,


} from 'antd';



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
        username: 'UserA',
        number: '50',
        rate: '20%',

    }, {
        key: '2',
        id: '2',
        username: 'UserB',

        number: '52',
        rate: '75%',
    }, {
        key: '3',
        id: '3',
        username: 'UserC',
        number: '53',
        rate: '75%',
    }, {
        key: '4',
        id: '4',
        username: 'UserD',
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