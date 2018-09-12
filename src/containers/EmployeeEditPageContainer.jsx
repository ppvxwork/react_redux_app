import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCheckedEmployeeIds, getEmployees, updateEmployees } from '../actions/EmployeeAction';
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
      checkedEmployeeIds,
      checkedEmployeeIdsAction,
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
        checkedEmployeeIds={checkedEmployeeIds}
        checkedEmployeeIdsAction={checkedEmployeeIdsAction}
      />
    );
  }
}

const mapStateToProps = (store) => {
  console.log(store);
  return {
    employees: store.employeeReducerSuccess,
    employeesIsLoading: store.employeeReducerRequest,
    employeesIsFailed: store.employeeReducerFail,
    checkedEmployeeIds: store.employeeReducerCheckedIds,
    positions: store.positionReducerSuccess,
    positionsIsLoading: store.positionReducerRequest,
    positionsIsFailed: store.positionReducerFail,
  };
};

const mapDispatchToProps = dispatch => ({
  getEmployeesAction: () => dispatch(getEmployees()),
  updateEmployeesAction: employees => dispatch(updateEmployees(employees)),
  getPositionsAction: () => dispatch(getPositions()),
  checkedEmployeeIdsAction: ids => dispatch(getCheckedEmployeeIds(ids)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeEditPageContainer);
