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
      updateEmployeesAction,
    } = this.props;

    const checkedEmployees = ['Mrs. Kristopher Lang'];

    if (employeesIsFailed || positionsIsFailed) {
      return <p>Во время загрузки сущностей произошла ошибка.</p>;
    }

    if (employeesIsLoading || positionsIsLoading) {
      return <p>Загрузка...</p>;
    }

    return (
      <React.Fragment>
        <EmployeeTree positions = {positions} employees = {employees} checkedEmployees = {checkedEmployees}/>
        <hr/>
        <Table dataSource={employees} columns={columns} rowKey='id'/>;
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
};

export default EmployeeEditPage;
