import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import Page1 from '../containers/Page1';


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
  render: () => <Button>Кнопка</Button>,
}];


class EntityList extends Component {
  renderTemplate = () => {
    const { entities, isLoading, isFailed } = this.props;

    if (isFailed) {
      return <p>Во время загрузки сущностей произошла ошибка.</p>;
    }

    if (isLoading) {
      return <p>Загрузка...</p>;
    }

    return <Table dataSource={entities} columns={columns} rowKey='id'/>;
  };

  render() {
    return (
      <div>
        {this.renderTemplate()}
      </div>
    );
  }
}

export default EntityList;

EntityList.propTypes = {
  entities: PropTypes.array.isRequired,
  isFailed: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
