import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../components/login/login.js'
import Reg from '../components/reg/reg.js'
import AdminPage from '../components/adminPage/adminPage.jsx'
import ListPage from '../components/listsPage/listPage.jsx'
import viewTask from '../components/viewTasks/viewTasks.jsx'

export default class AppRouter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/reg" component={Reg}></Route>
                    <Route path="/adminPage" component={AdminPage}></Route>
                    <Route path="/lists" component={ListPage}></Route>
                    <Route path="/listInfo" component={viewTask}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}