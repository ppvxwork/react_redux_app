import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import EmployeeListPageContainer from '../containers/EmployeeListPageContainer';
import EmployeeEditPageContainer from '../containers/EmployeeEditPageContainer';
import NotFoundPage from './NotFoundPage';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={EmployeeListPageContainer}/>
        <Route exact path='/employees' component={EmployeeListPageContainer}/>
        <Route exact path='/employees/edit' component={EmployeeEditPageContainer}/>
        <Route component={NotFoundPage}/>
      </Switch>
    );
  }
}

export default Main;
