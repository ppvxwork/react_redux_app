import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEmployees, updateEmployees } from '../actions/EmployeeAction';
import { getPositions } from '../actions/PositionAction';
import EmployeeEditPage from '../components/EmployeeEditPage';

class EmployeeEditPageContainer extends Component {
  componentDidMount() {
    this.props.getEmployeesAction('https://5b939d42bd13d3001426964a.mockapi.io/api/v1/entities');
    this.props.getPositionsAction('https://5b939d42bd13d3001426964a.mockapi.io/api/v1/categories');
  }

  render() {
    const {
      employees,
      employeesIsLoading,
      employeesIsFailed,
      positions,
      positionsIsLoading,
      positionsIsFailed,
      updateEmployeesAction,
    } = this.props;
    return (
      <EmployeeEditPage
        employees = {employees}
        employeesIsLoading={employeesIsLoading}
        employeesIsFailed={employeesIsFailed}
        positions = {positions}
        positionsIsLoading={positionsIsLoading}
        positionsIsFailed={positionsIsFailed}
        updateEmployeesAction={updateEmployeesAction}
      />
    );
  }
}

const mapStateToProps = store => ({
  employees: store.employeeReducerSuccess,
  employeesIsLoading: store.employeeReducerRequest,
  employeesIsFailed: store.employeeReducerFail,
  positions: store.positionReducerSuccess,
  positionsIsLoading: store.positionReducerRequest,
  positionsIsFailed: store.positionReducerFail,
});

const mapDispatchToProps = dispatch => ({
  getEmployeesAction: url => dispatch(getEmployees(url)),
  updateEmployeesAction: (url, employees) => dispatch(updateEmployees(url, employees)),
  getPositionsAction: url => dispatch(getPositions(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeEditPageContainer);
