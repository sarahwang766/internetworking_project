import React from 'react';
import {

    Form,
    Table
   
} from 'antd';




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
        percentage: 'A [85%] B[5%]  C[15%]',
    }, {
        key: '2',
        id: '2',
        result: 'B',
        percentage: 'A [40%] B[60%]',
    }, {
        key: '3',
        id: '3',
        result: 'D',
        percentage: 'A [10%] B[20%] C[30%] D[40%]',
    }, {
        key: '4',
        id: '4',
        result: 'C',
        percentage: 'A[20%]  B[60%] C[20%]',
    },

];





class ResultsApp extends React.Component {



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