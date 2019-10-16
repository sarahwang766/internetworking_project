import React from 'react';
import {
    Form,
    Table
} from 'antd'; //import components from antd UI library



const columns = [{         // the columns attributes of the "assigned-to" table
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

const data = [{           // fill the data of the columns with mock data
        key: '1',
        id: '1',
        assigned: 'UserA, UserB, UserC',
    },{
        key: '2',
        id: '2',
        assigned: 'UserB, UserD',
    },{
        key: '3',
        id: '3',
        assigned: 'UserE, UserF',
    },{
        key: '4',
        id: '4',
        assigned: 'UserA, UserD, UserE',
    },

];


class AssignedToApp extends React.Component {
    render() { //render UI components to generate a page

        return (
            <div>
                <Table columns={columns} dataSource={data} />
          </div>
        )
    }
}
const AssignedTo = Form.create()(AssignedToApp);

export default AssignedTo