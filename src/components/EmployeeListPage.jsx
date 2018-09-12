import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'antd';
import { Link } from 'react-router-dom';
import { getKey } from '../utils';

const { Column } = Table;

class EmployeeListPage extends Component {
  renderTemplate = () => {
    const {
      employees, employeesIsLoading, employeesIsFailed, checkedEmployeeIdsAction, checkedEmployeeIds,
    } = this.props;

    if (employeesIsFailed) {
      return <p>Во время загрузки сущностей произошла ошибка.</p>;
    }

    if (employeesIsLoading) {
      return <p>Загрузка...</p>;
    }

    return (
      <Table dataSource={employees} bordered>
        <Column
          title='Id'
          key={getKey('id', 'employee')}
          dataIndex='id'
          render={ id => <Link to={'/employees/edit'} onClick={checkedEmployeeIdsAction(id)}>{id}</Link> }
        />
        <Column
          title='Name'
          key={getKey('name', 'employee')}
          dataIndex='name'
        />
        <Column
          title='Condition'
          key={getKey('condition', 'employee')}
          dataIndex='condition'
          render={ condition => <span>{condition ? 'true' : 'false'}</span> }
        />
        <Column
          title='Email'
          key={getKey('email', 'employee')}
          dataIndex='email'
        />
        <Column
          title='Addresses'
          key={getKey('addresses', 'employee')}
          dataIndex='addresses'
        />
        <Column
          title='Action'
          key={getKey('action', 'employee')}
          dataIndex=''
          render={ record => <Button href={'/employees/edit'} onClick={checkedEmployeeIdsAction(record.id)} type={'primary'}>Редактировать</Button> }
        />
      </Table>
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

export default EmployeeListPage;

EmployeeListPage.propTypes = {
  employees: PropTypes.array.isRequired,
  employeesIsFailed: PropTypes.bool.isRequired,
  employeesIsLoading: PropTypes.bool.isRequired,
};

// const columns = [{
//   title: 'Id',
//   dataIndex: 'id',
//   key: 'id',
//   render: id => <Link to={'/employees/edit'} onClick={checkedEmployeeIdsAction(id)}>{id}</Link>,
// }, {
//   title: 'Name',
//   dataIndex: 'name',
//   key: 'name',
// }, {
//   title: 'Condition',
//   dataIndex: 'condition',
//   key: 'condition',
// }, {
//   title: 'Email',
//   key: 'email',
//   dataIndex: 'email',
// }, {
//   title: 'Addresses',
//   key: 'addresses',
//   dataIndex: 'addresses',
// }, {
//   title: 'Action',
//   key: 'action',
//   dataIndex: '',
//   render: record => <Button href={'/employees/edit'} onClick={checkedEmployeeIdsAction(record.id)}>Редактировать</Button>,
// }];
