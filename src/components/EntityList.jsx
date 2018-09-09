import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

const columns = [{
  title: 'Id',
  dataIndex: 'id',
  key: 'id',
  render: text => <a href='#'>{text}</a>,
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


class EntityList extends React.Component {
  renderTemplate = () => {
    const { entities, isLoading, isFailed } = this.props;

    if (isFailed) {
      return <p>Во время загрузки сущностей произошла ошибка.</p>;
    }

    if (isLoading) {
      return <p>Загрузка...</p>;
    }

    return <Table dataSource={entities} columns={columns} />;
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
