import React from 'react';
import PropTypes from 'prop-types';


class Entity extends React.Component {
  render() {
    const {
      id, name, condition, email, addresses,
    } = this.props;
    return (
      <div>
        <h3>
          {id}
        </h3>
      </div>
    );
  }
}

export default Entity;

Entity.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  condition: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  addresses: PropTypes.array.isRequired,
};
