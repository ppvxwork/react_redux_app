import React, { Component } from 'react';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
