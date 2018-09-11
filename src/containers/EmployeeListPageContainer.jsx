import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEmployees } from '../actions/EmployeeAction';
import EmployeeListPage from '../components/EmployeeListPage';

class EmployeeListPageContainer extends Component {
  componentDidMount() {
    this.props.getEmployeesAction('https://5b939d42bd13d3001426964a.mockapi.io/api/v1/entities');
  }

  render() {
    const {
      employees, employeesIsLoading, employeesIsFailed,
    } = this.props;
    return (
      <EmployeeListPage
        employees={employees}
        employeesIsLoading={employeesIsLoading}
        employeesIsFailed={employeesIsFailed}
      />
    );
  }
}

const mapStateToProps = store => ({
  employees: store.employeeReducerSuccess,
  employeesIsLoading: store.employeeReducerRequest,
  employeesIsFailed: store.employeeReducerFail,
});

const mapDispatchToProps = dispatch => ({
  getEmployeesAction: url => dispatch(getEmployees(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeListPageContainer);
