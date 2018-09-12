import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEmployees, getCheckedEmployeeIds } from '../actions/EmployeeAction';
import EmployeeListPage from '../components/EmployeeListPage';
import { getKey } from '../utils';

class EmployeeListPageContainer extends Component {
  componentDidMount() {
    this.props.getEmployeesAction('https://5b939d42bd13d3001426964a.mockapi.io/api/v1/entities');
  }

  render() {
    const {
      employees, employeesIsLoading, employeesIsFailed, checkedEmployeeIdsAction, checkedEmployeeIds,
    } = this.props;
    return (
      <EmployeeListPage
        employees={employees}
        employeesIsLoading={employeesIsLoading}
        employeesIsFailed={employeesIsFailed}
        checkedEmployeeIdsAction={checkedEmployeeIdsAction}
        checkedEmployeeIds={checkedEmployeeIds}
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
  };
};

const mapDispatchToProps = dispatch => ({
  getEmployeesAction: () => dispatch(getEmployees()),
  checkedEmployeeIdsAction(id) {
    return () => {
      console.log('in checkedEmployeeIdsAction, EmployeeListPageContainer: ', id);
      const ids = [];
      ids.push(getKey(id.toString(), 'employee-'));
      dispatch(getCheckedEmployeeIds(ids));
    };
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeListPageContainer);
