import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../components/login/login.js'
import Reg from '../components/reg/reg.js'
import AdminPage from '../components/adminPage/adminPage.jsx'
import QuestionListPage from '../components/questionListPage/QuestionListPage.jsx'
import DetailsOfQuestion from '../components/detailsOfQuestion/detailsOfQuestion'
import Homepage from '../components/home/home.jsx'

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
                    <Route path="/questionList" component={QuestionListPage}></Route>
                    <Route path="/questionDetails" component={DetailsOfQuestion}></Route>
                    <Route path="/home" component={Homepage}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}