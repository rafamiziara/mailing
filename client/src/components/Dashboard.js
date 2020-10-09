import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSurveys } from '../actions';
import SurveyList from './surveys/SurveyList';
import SimpleModal from './Modal';
import './Landing.css'

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderButton() {
    if(!this.props.auth) {
      return
    }

    if(this.props.auth.credits < 1) {
      return (
        <SimpleModal text="You need to add credits in order to create a survey" />
      );
    }

    if(this.props.surveys.length > 5) {
      return (
        <SimpleModal text="As a test project, you have a limit of 5 surveys. Delete some survey to continue" />
      );
    }

    return (
      <Link to={"/surveys/new"}>  
        <img style={{width: '4rem', backgroundColor: 'white', padding: '0.7rem', borderRadius: '100%'}} src="/add.svg" />
      </Link>
    );
  }

  render() {
    return (
      <div>
        <SurveyList />
        <div className="fixed-action-btn">
          {this.renderButton()}
        </div>
      </div>
    );
  }
};

const mapStateToProps = ({ auth, surveys }) => {
  return { auth, surveys }
};

export default connect(mapStateToProps, { fetchSurveys })(Dashboard);