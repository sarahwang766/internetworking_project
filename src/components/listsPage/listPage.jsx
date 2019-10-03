import React from 'react';
import { List, Typography } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import './listpage.css'


const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class listPageApp extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {


        return (
            <div style={{ width:'80%',margin:'3% auto 0' }}>

                <div style={{overflow:'hidden',textAlign:'right'}}>
                  <Link to='/login'>Sign out</Link>
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
                      <Link to="/listInfo">

                        <List.Item.Meta
                          title={item}
                          description= {item}
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