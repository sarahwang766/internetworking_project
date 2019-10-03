import React from 'react';
import { List } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import './QuestionListPage.css'


const data = [
    'Q#[QuestionID].[ Question Description ]',
    'Q#[QuestionID].[ Question Description ]',
    'Q#[QuestionID].[ Question Description ]',

];

class listPageApp extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {


        return (
            <div style={{ width:'80%',margin:'3% auto 0' }}>

                <div style={{overflow:'hidden',textAlign:'right'}}>
                  <Link to='/home'>Sign out</Link>
                </div>
                <div>
                  <h1>LIST OF TASKS</h1>

                  <List
                    size="small"
                    bordered
                    style={{textAlign:'center'}}
                    dataSource={data}
                    renderItem={item =>
                      <List.Item className="list-wap">
                       <Link to="/questionDetails"> 

                        <List.Item.Meta
                          title={item}
                          description= "Subject:[subjectName]&nbsp;&nbsp;&nbsp;&nbsp; CreationDate:[date]"
                        />
                      </Link>
                      </List.Item>

                    }
                  />

                </div>







            </div>
        )
    }
}
const ListPage = (listPageApp);

export default withRouter(ListPage)