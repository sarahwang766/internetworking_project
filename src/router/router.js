import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../components/login/login.js'
import Reg from '../components/reg/reg.js'
import Task from './../views/task/task.jsx'

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
                    <Route path="/task" component={Task}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}