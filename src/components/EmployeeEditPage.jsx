import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'antd';
import EmployeeTree from './EmployeeTree';

const columns = [{
  title: 'Id',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Condition',
  dataIndex: 'condition',
  key: 'condition',
}, {
  title: 'Email',
  key: 'email',
  dataIndex: 'email',
}, {
  title: 'Addresses',
  key: 'addresses',
  dataIndex: 'addresses',
}];

class EmployeeEditPage extends Component {
  renderTemplate = () => {
    const {
      employees,
      employeesIsLoading,
      employeesIsFailed,
      positions,
      positionsIsLoading,
      positionsIsFailed,
      checkedEmployeeIds,
      checkedEmployeeIdsAction,
      updateEmployeesAction,
    } = this.props;

    if (employeesIsFailed || positionsIsFailed) {
      return <p>Во время загрузки сущностей произошла ошибка.</p>;
    }

    if (employeesIsLoading || positionsIsLoading) {
      return <p>Загрузка...</p>;
    }

    console.log('EmployeeEditPage props:', this.props);

    const employeeIds = checkedEmployeeIds
      .filter(id => id.indexOf('employee-') !== -1)
      .map(id => id.replace('employee-', ''));
    const newEmployees = employees
      .filter(employee => employeeIds.indexOf(employee.id.toString()) !== -1);

    return (
      <React.Fragment>
        <EmployeeTree
          positions = {positions}
          employees = {employees}
          checkedEmployeeIds = {checkedEmployeeIds}
          checkedEmployeeIdsAction={checkedEmployeeIdsAction}
        />
        <hr/>
        <Table dataSource={newEmployees} columns={columns} rowKey='id' />;
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.renderTemplate()}
      </React.Fragment>
    );
  }
}


EmployeeEditPage.propTypes = {
  employees: PropTypes.array.isRequired,
  employeesIsLoading: PropTypes.bool.isRequired,
  employeesIsFailed: PropTypes.bool.isRequired,
  positions: PropTypes.array.isRequired,
  positionsIsLoading: PropTypes.bool.isRequired,
  positionsIsFailed: PropTypes.bool.isRequired,
  updateEmployeesAction: PropTypes.func.isRequired,
  checkedEmployeeIds: PropTypes.array,
  checkedEmployeeIdsAction: PropTypes.func,
};

export default EmployeeEditPage;
