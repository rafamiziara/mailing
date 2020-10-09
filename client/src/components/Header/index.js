import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from '../Payments';
import { Header } from './styles';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a style={{display: 'flex'}} className="google-button" href="/auth/google"><img style={{width: '1.4rem', marginRight: '1rem'}} src="/google.svg" />Login With Google</a></li>;
      default:
        return [
          <li key="1" className="credits">
            <div className="balance">
              CREDITS: {this.props.auth.credits || 0}
              <Payments />
            </div>
          </li>,
          <li key="2"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <Header className="nav-wrapper nav-bar">
          <Link 
            style={{display: 'flex'}}
            to={this.props.auth ? '/surveys' : '/' } 
            className="left brand-logo"
          >
            <img style={{width: '3rem', marginRight: '1rem'}} src="/email.svg" />
            mailing
          </Link>
          <p className="warning">Alert!</p>
          <p className="message">This is a test project. Do not use it for commercial purposes!</p>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </Header>
      </nav>
    )
  }
};

const mapStateToProps = ({ auth }) => {
  return { auth }
};

export default connect(mapStateToProps)(Header);