import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'antd';
import { Link } from 'react-router-dom';

const columns = [{
  title: 'Id',
  dataIndex: 'id',
  key: 'id',
  render: text => <Link to={'/page-2'}>{text}</Link>,
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
}, {
  title: 'Action',
  key: 'action',
  dataIndex: '',
  render: () => <Button>Редактировать</Button>,
}];


class EmployeeListPage extends Component {
  renderTemplate = () => {
    const { employees, employeesIsLoading, employeesIsFailed } = this.props;

    if (employeesIsFailed) {
      return <p>Во время загрузки сущностей произошла ошибка.</p>;
    }

    if (employeesIsLoading) {
      return <p>Загрузка...</p>;
    }

    return <Table dataSource={employees} columns={columns} rowKey='id'/>;
  };

  render() {
    return (
      <React.Fragment>
        {this.renderTemplate()}
      </React.Fragment>
    );
  }
}

export default EmployeeListPage;

EmployeeListPage.propTypes = {
  employees: PropTypes.array.isRequired,
  employeesIsFailed: PropTypes.bool.isRequired,
  employeesIsLoading: PropTypes.bool.isRequired,
};
