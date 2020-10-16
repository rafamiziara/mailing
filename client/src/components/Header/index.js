import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from '../Payments';
import { 
  NavWrapper,
  MainLogo,
  LogoWrapper,
  GoogleButton,
  GoogleLogo,
  CreditsWrapper,
  Balance
} from './styles';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <GoogleButton href="/auth/google">
              <GoogleLogo src="/google.svg" />
              Login With Google
            </GoogleButton>
          </li>
        );
      default:
        return [
          <CreditsWrapper key="1">
            <Balance>
              CREDITS: {this.props.auth.credits || 0}
              <Payments />
            </Balance>
          </CreditsWrapper>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <NavWrapper>
        <Link to={this.props.auth ? '/surveys' : '/' }>
          <LogoWrapper>
            <MainLogo src="/send-mail.svg" />
            mailing
          </LogoWrapper>
        </Link>
        <ul>
          {this.renderContent()}
        </ul>
      </NavWrapper>
    )
  }
};

const mapStateToProps = ({ auth }) => {
  return { auth }
};

export default connect(mapStateToProps)(Header);