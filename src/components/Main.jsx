import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Page1 from '../containers/Page1';

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path='/page-1' component={Page1} />
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
