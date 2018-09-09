import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/Page1Action';
import EntityList from '../components/EntityList';

class Page1 extends Component {
  componentDidMount() {
    this.props.fetchDataAction('https://5b939d42bd13d3001426964a.mockapi.io/api/v1/entities');
  }

  render() {
    const {
      entities, isLoading, isFailed,
    } = this.props;
    return (
      <EntityList
        entities={entities}
        isLoading={isLoading}
        isFailed={isFailed}
      />
    );
  }
}

const mapStateToProps = store => ({
  entities: store.entityListSuccess,
  isLoading: store.entityListRequest,
  isFailed: store.entityListFail,
});

const mapDispatchToProps = dispatch => ({
  fetchDataAction: url => dispatch(fetchData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page1);
