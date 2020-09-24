import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Thanks from './Thanks';
import SurveyNew from './surveys/SurveyNew';

import './App.css'


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="home">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Route path="/thanks" component={Thanks} />
          </div>
        </BrowserRouter>
        <p className="made-by">made with <img className="love" src="/love.svg" /> by <a className="link" href="https://github.com/rafamiziara">rm30</a></p>
      </div>
    );
  }
};

export default connect(null, actions)(App);