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
        title: 'Current Result',
        dataIndex: 'result',
        key: 'result',
    },
    {
        title: 'Percentage',
        dataIndex: 'percentage',
        key: 'percentage',
    },
];

const data = [{
        key: '1',
        id: '1',
        result: 'A',
        percentage: 'A',
    }, {
        key: '2',
        id: '2',
        result: 'B',
        percentage: 'B',
    }, {
        key: '3',
        id: '3',
        result: 'D',
        percentage: 'D',
    }, {
        key: '4',
        id: '4',
        result: 'C',
        percentage: 'C',
    },

];





class ResultsApp extends React.Component {
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
const Results = Form.create()(ResultsApp);

export default Results