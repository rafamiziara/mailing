import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
};

export default connect(null, actions)(App);