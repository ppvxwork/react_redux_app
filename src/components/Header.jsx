import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div>
        <p>HEADER!</p>
        <ul>
          <li>
            <Link to={'/page-1'}>Страница 1</Link>
          </li>
        </ul>

        <hr />
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
