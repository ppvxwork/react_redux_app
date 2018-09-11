import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div>
        <p>HEADER!</p>
        <ul>
          <li>
            <Link to={'/employees'}>Страница 1</Link>
          </li>
          <li>
            <Link to={'/employees/edit'}>Страница 2</Link>
          </li>
        </ul>

        <hr />
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
